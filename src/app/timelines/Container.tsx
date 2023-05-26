interface TimelineContainerProps {
	title: string;
	children?: React.ReactNode;
}

export default function TimelineContainer({
	title,
	children,
}: TimelineContainerProps) {
	return (
		<div className="bg-gradient-to-b from-black from-0% via-20% to-[rgba(255,255,255,0.03)] via-zinc-900 w-screen h-screen px-6 py-2 items-center overflow-clip">
			<h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-orange-200 w-full pb-2">
				{title}
			</h1>
			<div className="h-[95%] w-full relative overflow-scroll border-red-300 bg-transparent mt-2 rounded-lg">
				{children}
				<div className="h-[10vh]"></div>
			</div>
		</div>
	);
}
