import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer, { TimelineCard } from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { BasicCard, ImageCard } from "../StaticCard";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="The History of Calculus">
			{/* Exodus 400BC */}
			<TimelineCard>
				<AnimatedCard animationType="Expand_From_Left">
					<TextCard
						header="~400BC: Exodus of Cnidus"
						body="Exodus of Cnidus invented the technique of finding
							area by exhaustion. He would approximate the area of
							a shape by inscribing polygons in it and finding
							their areas. The approximation got better as he
							increased the number of sides. This was an early
							precursor to integration"
					/>
				</AnimatedCard>

				<div className="tallAbsolute">
					<AnimatedCard animationType="Slide_From_Right">
						<AudioCard
							src="/exodus_shapiro.mp3"
							label="Exodus and Area by Exhaustion"
						/>
					</AnimatedCard>
				</div>

				<AnimatedCard animationType="Expand_From_Top">
					<div className="xl:w-[40vw] w-[90vw]">
						<ImageCard
							src="/area-by-exhaustion.png"
							alt="Area by Exhaustion"
							fit="contain"
							h={"h-[40vh]"}
							xl_h={"xl:h-[60vh]"}
						/>
					</div>
				</AnimatedCard>
			</TimelineCard>
			<TimelineCard>
				<div className="w-full flex flex-row justify-center">
					<QuizLink variant="history" />
				</div>
			</TimelineCard>
		</TimelineContainer>
	);
}
