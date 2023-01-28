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
			<div className='flex-auto w-full lg:w-1/3  xl:w-1/5 bg-gray-400'>
				<ContainerUI>
					<FlexColUI>
						<FlexItemsUI>
							<div>
								<Button navigateTo='/' variant='secondary' small>
									Go Back
								</Button>
							</div>

							<CardUI>
								<div className='lg:w-32 h:w-32 xl:w-64 xl:h-64'>
									<H3UI>Technologies</H3UI>
								</div>
							</CardUI>
							<CardUI>
								<div className='lg:w-32 lg:h-32 xl:w-64 xl:h-64'>
									<H3UI>Date</H3UI>
								</div>
							</CardUI>
						</FlexItemsUI>
					</FlexColUI>
				</ContainerUI>
			</div>
			<div className='flex-auto w-full lg:w-2/3  xl:w-4/5'>{children}</div>
		</div>
	);
};

export default TwoColsLayout;
