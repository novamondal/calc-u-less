import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer, { TimelineCard } from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { ImageCard } from "../StaticCard";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="The History of Calculus">
			{/* Exodus 400BC */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
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
				<AnimatedCard animationType="Slide_From_Right">
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
			</TimelineCard>
			<TimelineCard>
				<div className="w-screen flex flex-row justify-center">
					<QuizLink variant="history" />
				</div>
			</TimelineCard>
		</TimelineContainer>
	);
}
