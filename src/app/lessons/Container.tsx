interface TimelineContainerProps {
	title: string;
	children?: React.ReactNode;
}

export default function TimelineContainer({
	title,
	children,
}: TimelineContainerProps) {
	return (
		<>
			<div className="relative overflow-x-hidden bg-transparent px-6 pt-64 md:pt-56 tallParent">
				{children}
				<div className="h-[10vh]"></div>
			</div>
			<header className="fixed inset-0 bg-gradient-to-b from-black via-[#000000DD] via-80% z-10 h-min">
				<h1 className="lg:text-6xl sm:text-3xl text-xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-orange-200 w-full pb-2 inset-0">
					{title}
				</h1>
			</header>
			<div className="fixed -z-50 bg-gradient-to-b from-black from-0% via-20% to-[rgba(255,255,255,0.03)] via-gray-900 bg-fixed w-screen h-screen inset-0"></div>
		</>
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
