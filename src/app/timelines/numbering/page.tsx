import AnimatedCard from "../AnimatedCard";
import AudioCard from "../Audio";
import TimelineContainer from "../Container";
import QuizLink from "../QuizLink";
import TextCard, { ImageCard } from "../StaticCard";

export default function HistoryOfCalc() {
	return (
		<TimelineContainer title="Alternating Numbering Systems">
			<div className="lg:flex lg:flex-row lg:gap-6 lg:relative">
				<AnimatedCard animationType="Expand_From_Left">
					<AnimatedCard animationType="Fade">
						<TextCard
							header="What is a numbering system?"
							body="A numbering system is the way you write down numbers using digits. Most people are only familiar with decimal, where digits are 0-9, but there are many more"
						/>
						<div className="lg:absolute lg:bottom-2">
							<AudioCard
								src="/most_common_spongebob.wav"
								label="Most Common Numbering Systems"
							/>
						</div>
					</AnimatedCard>
				</AnimatedCard>
				<AnimatedCard animationType="Expand_From_Left">
					<AnimatedCard animationType="Fade">
						<ImageCard
							src="/common_numbering.png"
							alt="Common Numbering Systems"
							max_w={"max-w-[40rem]"}
							fit="contain"
							h={"h-[30rem]"}
						/>
					</AnimatedCard>
				</AnimatedCard>
			</div>
			<div className="lg:flex flex-row-reverse lg:gap-6 lg:relative">
				<AnimatedCard animationType="Expand_From_Left">
					<AnimatedCard animationType="Fade">
						<TextCard
							header="Decimal Numbering"
							body="The most common numbering system is decimal, or base 10. 
						It is regarded as the easiest to use because we have a visual representation with our 10 fingers.
						Each decimal place representa a power of 10"
						/>
						<div className="lg:absolute lg:bottom-2">
							<AudioCard
								src="/base10_patrick.wav"
								label="Decimal Numbering"
							/>
						</div>
					</AnimatedCard>
				</AnimatedCard>
				<AnimatedCard animationType="Slide_From_Right">
					<AnimatedCard animationType="Fade">
						<div className="lg:w-[45vw]">
							<ImageCard
								src="/hand.jpg"
								alt="sticky hand"
								h="h-[30rem]"
							/>
						</div>
					</AnimatedCard>
				</AnimatedCard>
			</div>
			<QuizLink variant="numbering" />
		</TimelineContainer>
	);
}
