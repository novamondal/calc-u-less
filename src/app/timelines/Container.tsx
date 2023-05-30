interface TimelineContainerProps {
	title: string;
	children?: React.ReactNode;
}

export default function TimelineContainer({
	title,
	children,
}: TimelineContainerProps) {
	return (
		<div className="bg-gradient-to-b from-black from-0% via-20% to-[rgba(255,255,255,0.03)] via-gray-900 w-screen h-screen px-6 py-2 items-center overflow-clip">
			<h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-orange-200 w-full pb-2">
				{title}
			</h1>
			<div className="h-[95%] w-full relative overflow-y-scroll overflow-x-hidden border-red-300 bg-transparent mt-2 rounded-lg tallParent">
				{children}
				<div className="h-[10vh]"></div>
			</div>
		</div>
	);
}

export function TimelineCard({
	children,
	reverse = false,
}: {
	children: React.ReactNode;
	reverse?: boolean;
}) {
	return (
		<div className="tallChild snap-start flex flex-col justify-start">
			<div
				className={`tallGrandchild ${
					reverse ? "flex-row-reverse" : "flex-row"
				}`}
			>
				{children}
			</div>
		</div>
	);
}
