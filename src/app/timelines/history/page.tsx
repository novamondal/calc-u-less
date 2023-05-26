import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { ImageCard } from "../StaticCard";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="The History of Calculus">
			{/* Exodus 400BC */}
			<div className="lg:flex lg:flex-row lg:justify-center lg:gap-6 lg:relative">
				<AnimatedCard animationType="Expand_From_Left">
					<AnimatedCard animationType="Fade">
						<TextCard
							header="~400BC: Exodus of Cnidus"
							body="Exodus of Cnidus invented the technique of finding area by exhaustion. 
						He would approximate the area of a shape by inscribing polygons in it and finding their areas. 
						The approximation got better as he increased the number of sides.
						This was an early precursor to integration"
						/>
						<div className="lg:absolute lg:bottom-2">
							<AudioCard
								src="/exodus_shapiro.mp3"
								label="Exodus and Area by Exhaustion"
							/>
						</div>
					</AnimatedCard>
				</AnimatedCard>
				<AnimatedCard animationType="Slide_From_Right">
					<AnimatedCard animationType="Fade">
						<div className="lg:w-[40vw]">
							<ImageCard
								src="/area-by-exhaustion.png"
								alt="Area by Exhaustion"
								fit="contain"
								max_w={`max-w-[40em]`}
								h={"lg:h-[30rem] h-[20rem]" as any}
							/>
						</div>
					</AnimatedCard>
				</AnimatedCard>
			</div>
			<QuizLink variant="history" />
			<div className="h-[30rem]"></div>
		</TimelineContainer>
	);
}
