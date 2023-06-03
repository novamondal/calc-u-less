import TimelineContainer from "../lessons/Container";

export const metadata = {
	title: "Quiz Game",
	description: "Test your knowledge",
};

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TimelineContainer title="Quiz">{children}</TimelineContainer>
		</>
	);
}
