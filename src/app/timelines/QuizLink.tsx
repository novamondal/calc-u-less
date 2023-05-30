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
		<div className="w-[75vw] overflow-hidden">
			<AnimatedCard animationType="Fade">
				<BasicCard header="Take the Quiz!">
					<div className="xl:flex xl:flex-row xl:items-center xl:justify-center xl:relative px-2">
						<div className="flex flex-col">
							<div>
								<h2 className="text-teal-200 mx-4 mt-4 text-2xl">
									Create a quiz code
								</h2>
								<input
									value={quiz}
									type="text"
									onChange={(e) => {
										setQuiz(e.target.value);
									}}
									className="bg-transparent border-2 border-teal-400 rounded-md p-2 mx-4 mb-4 h-min"
								></input>
							</div>

							<h1
								className={`mx-4 mb-4 xl:text-2xl ${
									quiz ? "" : "opacity-[10%]"
								}`}
							>
								Scan the code to join, or go to{" "}
							</h1>
							<Link
								href={"../../" + quizURL + quiz}
								className={
									// quiz
									// 	? "mx-4 mb-4 text-2xl w-min underline hover:text-indigo-400"
									// 	: "hidden"
									`mx-4 mb-4 xl:text-2xl w-min underline hover:text-indigo-400 ${
										quiz
											? ""
											: "opacity-[10%] pointer-events-none"
									}`
								}
							>
								{DOMAIN_NAME + quizURL + quiz}
							</Link>
							<Link
								href={"../../" + scoreURL + quiz}
								className={`mx-4 mb-4 text-2xl underline hover:text-indigo-400 w-min ${
									quiz
										? ""
										: "opacity-[10%] pointer-events-none"
								}`}
							>
								Scoreboard
							</Link>
						</div>
						<div className="flex flex-row items-center">
							{quiz ? (
								<Image
									src={
										QR_URL_BASE +
										DOMAIN_NAME +
										quizURL +
										quiz
									}
									alt="QR Code"
									height={500}
									width={500}
									className={`m-4 $ rounded-md`}
								/>
							) : (
								<div
									className={`w-[500px] aspect-square flex-shrink m-4 bg-gradient-to-tr from-transparent to-zinc-400 rounded-md`}
								></div>
							)}
						</div>
					</div>
				</BasicCard>
			</AnimatedCard>
			<footer className="h-[30vh]"></footer>
		</div>
	);
}
