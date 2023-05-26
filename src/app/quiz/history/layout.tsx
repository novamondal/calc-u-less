import TimelineContainer from "../../timelines/Container";

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TimelineContainer title="History of Calculus Example Problems">
			{children}
		</TimelineContainer>
	);
}
