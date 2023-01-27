/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
				port: '',
			},
		],
	},
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
