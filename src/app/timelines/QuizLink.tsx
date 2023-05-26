"use client";

import { useState } from "react";
import AnimatedCard from "./AnimatedCard";
import { BasicCard } from "./StaticCard";
import {
	DOMAIN_NAME,
	HISTORY_QUIZ_URL_BASE,
	HISTORY_SCORE_URL_BASE,
	NUMBERING_QUIZ_URL_BASE,
	NUMBERING_SCORE_URL_BASE,
	QR_URL_BASE,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function QuizLink({
	variant,
}: {
	variant: "history" | "numbering";
}) {
	const [quiz, setQuiz] = useState("");
	const quizURL =
		variant === "history" ? HISTORY_QUIZ_URL_BASE : NUMBERING_QUIZ_URL_BASE;
	const scoreURL =
		variant === "history"
			? HISTORY_SCORE_URL_BASE
			: NUMBERING_SCORE_URL_BASE;

	return (
		<AnimatedCard animationType="Fade">
			<BasicCard header="Take the Quiz!">
				<h2 className="text-teal-200 mx-4 mt-4">Create a quiz code</h2>
				<input
					value={quiz}
					type="text"
					onChange={(e) => {
						setQuiz(e.target.value);
					}}
					className="bg-transparent border-2 border-teal-400 rounded-md p-2 mx-4 mb-4"
				></input>
				<Image
					src={QR_URL_BASE + DOMAIN_NAME + quizURL + quiz}
					alt="QR Code"
					height={200}
					width={200}
					className={quiz ? "m-4" : "hidden"}
				/>
				<div className="flex flex-col">
					<h1 className={quiz ? "mx-4 text-2xl w-full" : "hidden"}>
						Scan the code to join, or go to{" "}
					</h1>
					<Link
						href={"../../" + quizURL + quiz}
						className={
							quiz
								? "mx-4 mb-4 text-2xl w-min underline hover:text-indigo-400"
								: "hidden"
						}
					>
						{DOMAIN_NAME + quizURL + quiz}
					</Link>
					<Link
						href={"../../" + scoreURL + quiz}
						className={
							quiz
								? "mx-4 mb-4 text-2xl underline hover:text-indigo-400 w-min"
								: "hidden"
						}
					>
						Scoreboard
					</Link>
				</div>
			</BasicCard>
		</AnimatedCard>
	);
}
