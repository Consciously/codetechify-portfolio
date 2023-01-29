import Button from '../(components)/UI/button';
import CardUI from '../(components)/UI/cardUI';
import ContainerUI from '../(components)/UI/containerUI';
import FlexColUI from '../(components)/UI/flexColUI';
import FlexItemsUI from '../(components)/UI/flexItemsUI';
import H3UI from '../(components)/UI/h3UI';

type Props = {
	children: React.ReactNode;
};

const TwoColsLayout = ({ children }: Props) => {
	return (
		<div className='flex flex-col md:flex-row'>
			<div className='flex-auto basis-full md:basis-1/3 lg:basis-1/4  xl:basis-1/6 bg-gray-400'>
				<ContainerUI>
					<FlexColUI>
						<div className='mt-8'>
							<Button navigateTo='/' variant='secondary' small>
								Go Back
							</Button>
						</div>
						<FlexItemsUI isSidebar>
							<CardUI>
								<H3UI>Technologies</H3UI>
							</CardUI>

							<CardUI>
								<H3UI>Date</H3UI>
							</CardUI>
						</FlexItemsUI>
					</FlexColUI>
				</ContainerUI>
			</div>
			<div className='flex-auto basis-full md:basis-2/3 lg:basis-3/4  xl:basis-5/6'>
				{children}
			</div>
		</div>
	);
};

export default TwoColsLayout;
