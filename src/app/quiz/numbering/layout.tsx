import TimelineContainer from "../../timelines/Container";

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TimelineContainer title="Alternate Numbering System Example Problems">
			{children}
		</TimelineContainer>
	);
}
