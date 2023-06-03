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
	delay?: 0 | 1 | 2 | 3 | 4 | 5;
}

export default function AnimatedCard({
	animationType = "Fade",
	children,
	delay = 0,
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
			staticStyle = "duration-700";
			break;
		case "Slide_From_Left":
			offscreenStyle = "-translate-x-1/2 opacity-0";
			onscreenStyle = "translate-x-0";
			staticStyle = "duration-700";
			break;
		case "Fade":
			offscreenStyle = "opacity-0";
			onscreenStyle = "opacity-100";
			staticStyle = "duration-700";
			break;
		case "Expand_From_Left":
			offscreenStyle = "scale-x-0 opacity-0";
			onscreenStyle = "scale-x-100";
			staticStyle =
				"duration-1000 relative left-0 overflow-hidden origin-left";
			break;
		case "Expand_From_Right":
			offscreenStyle = "scale-x-0 opacity-0";
			onscreenStyle = "scale-x-100";
			staticStyle =
				"duration-1000 relative left-0 overflow-hidden origin-right";
			break;
		case "Expand_From_Top":
			offscreenStyle = "scale-y-0 opacity-0";
			onscreenStyle = "scale-y-100";
			staticStyle = "duration-1000 origin-top scale-x-100";
			break;
	}

	let delayStyle = "";
	switch (delay) {
		case 1:
			delayStyle = "delay-75";
			break;
		case 2:
			delayStyle = "delay-150";
			break;
		case 3:
			delayStyle = "delay-200";
			break;
		case 4:
			delayStyle = "delay-300";
			break;
		case 5:
			delayStyle = "delay-700";
			break;
		default:
			delayStyle = "delay-0";
			break;
	}

	const style = `${staticStyle} ${delayStyle} ${
		inView ? onscreenStyle : offscreenStyle
	} ease-in-out transition-all`;

	return (
		// <div className="w-[150%]">
		<div className={style} ref={ref}>
			{children}
		</div>
		// </div>
	);
}
