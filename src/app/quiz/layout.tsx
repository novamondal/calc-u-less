import TimelineContainer from "../timelines/Container";

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <TimelineContainer title="Quiz">{children}</TimelineContainer>;
}
