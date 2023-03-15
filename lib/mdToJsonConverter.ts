import * as fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

type JSONData = {
	type: string;
	title?: string;
	level?: number;
	content?: string;
	children?: JSONData[];
};

const convertToJson = async (filePath: string): Promise<JSONData> => {
	const file = await readFile(filePath, 'utf8');
	const lines = file.split('\n');

	let jsonData: JSONData = { type: 'document' };
	let currentParent: JSONData = { type: 'document', level: 0 };
	let level = 0;

	for (const line of lines) {
		if (line.startsWith('#')) {
			level = line.split('#').length - 1;

			const currentNode = {
				type: 'heading',
				title: line.trim().replace(/#/g, '').trim(),
				level,
			};

			if (currentParent.children) {
				currentParent.children.push(currentNode);
			} else {
				currentParent.children = [currentNode];
			}

			currentParent = currentNode;
		} else if (line.startsWith('-') || line.startsWith('*')) {
			if (!currentParent.children) {
				currentParent.children = [];
			}

			currentParent.children.push({
				type: 'list-item',
				content: line.trim().replace(/^[-*] /, ''),
			});
		} else if (line.trim().length > 0) {
			if (!currentParent.children) {
				currentParent.children = [];
			}

			currentParent.children.push({
				type: 'paragraph',
				content: line.trim(),
			});
		}

		if (currentParent.level !== undefined) {
			while (level >= (currentParent.level || 0)) {
				currentParent = jsonData;
			}
		}
	}

	return jsonData;
};

const inputFile = './data/input.md';
const outputFile = './data/output.json';

(async () => {
	const jsonData = await convertToJson(inputFile);

	console.log(jsonData);
	await writeFile(outputFile, JSON.stringify(jsonData, null, 2));
	console.log(`The conversion from ${inputFile} to ${outputFile} is done.`);
})();
