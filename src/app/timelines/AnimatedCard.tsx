"use client";

import { useInView } from "react-intersection-observer";

interface AnimatedCardProps {
	animationType:
		| "Slide_From_Right"
		| "Fade"
		| "Expand_From_Left"
		| "Expand_From_Right"
		| "Slide_From_Left"
		| "Expand_From_Top";
	children: React.ReactNode;
}

export default function AnimatedCard({
	animationType = "Fade",
	children,
}: AnimatedCardProps) {
	const { inView, ref, entry } = useInView({
		/* Optional options */
		threshold: animationType === "Fade" ? 0.5 : 0,
		// triggerOnce: animationType === "Expand_From_Left",
	});

	let offscreenStyle = "";
	let onscreenStyle = "";

	let staticStyle = "";

	switch (animationType) {
		case "Slide_From_Right":
			offscreenStyle = "translate-x-1/2 opacity-0";
			onscreenStyle = "translate-x-0";
			staticStyle = "duration-700 2xl:delay-300";
			break;
		case "Slide_From_Left":
			offscreenStyle = "-translate-x-1/2 opacity-0";
			onscreenStyle = "translate-x-0";
			staticStyle = "duration-700 2xl:delay-300";
			break;
		case "Fade":
			offscreenStyle = "opacity-0";
			onscreenStyle = "opacity-100";
			staticStyle = "duration-700 2xl:delay-100";
			break;
		case "Expand_From_Left":
			offscreenStyle = "scale-x-0 opacity-0";
			onscreenStyle = "scale-x-100";
			staticStyle =
				"duration-1000 2xl:delay-700 relative left-0 overflow-hidden origin-left";
			break;
		case "Expand_From_Right":
			offscreenStyle = "scale-x-0 opacity-0";
			onscreenStyle = "scale-x-100";
			staticStyle =
				"duration-1000 2xl:delay-700 relative left-0 overflow-hidden origin-right";
			break;
		case "Expand_From_Top":
			offscreenStyle = "scale-y-0 opacity-0";
			onscreenStyle = "scale-y-100";
			staticStyle =
				"duration-1000 2xl:delay-700 relative left-0 overflow-hidden origin-top";
			break;
	}

	const style = `${staticStyle} ${
		inView ? onscreenStyle : offscreenStyle
	}  ease-in-out transition-all`;

	return (
		// <div className="w-[150%]">
		<div className={style} ref={ref}>
			{children}
		</div>
		// </div>
	);
}
