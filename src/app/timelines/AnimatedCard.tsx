"use client";

import { useInView } from "react-intersection-observer";

interface AnimatedCardProps {
	animationType: "Slide_From_Right" | "Fade" | "Expand_From_Left";
	children: React.ReactNode;
}

export default function AnimatedCard({
	animationType = "Fade",
	children,
}: AnimatedCardProps) {
	const { inView, ref, entry } = useInView({
		/* Optional options */
		threshold:
			animationType === "Expand_From_Left"
				? 0.9
				: animationType === "Fade"
				? 0.4
				: 0,
		triggerOnce: animationType === "Expand_From_Left",
	});

	let offscreenStyle = "";
	let onscreenStyle = "";

	let staticStyle = "";

	switch (animationType) {
		case "Slide_From_Right":
			offscreenStyle = "translate-x-full";
			onscreenStyle = "translate-x-0";
			staticStyle = "duration-300 delay-300";
			break;
		case "Fade":
			offscreenStyle = "opacity-0";
			onscreenStyle = "opacity-100";
			staticStyle = "duration-700 delay-100";
			break;
		case "Expand_From_Left":
			offscreenStyle = "w-0";
			onscreenStyle = "w-full";
			staticStyle =
				"duration-1000 delay-700 relative left-0 overflow-hidden max-h-[60vh]";
			break;
	}

	const style = `${staticStyle} ${
		inView ? onscreenStyle : offscreenStyle
	} transition-all ease-in-out`;

	return (
		// <div className="w-[150%]">
		<div className={style} ref={ref}>
			{children}
		</div>
		// </div>
	);
}
