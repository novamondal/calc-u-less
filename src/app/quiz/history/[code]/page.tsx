"use client";

import { useState } from "react";
import QuestionField from "../../QuestionField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { INCORRECT_ALERT_MESSAGE } from "@/constants";
import { useRouter } from "next/navigation";

export default function HistoryQuiz({ params }: any) {
	const router = useRouter();

	const [name, setName] = useState<string>("");

	const [value, setValue] = useState<number | null>(null);
	const valueAns = 69;

	const [bonus, setBonus] = useState<number | null>(null);
	const bonusAns = 420;
	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (value === valueAns && name) {
			await setDoc(
				doc(
					db,
					"history",
					"Bq0C2OKBeGYXaMBPOr4u",
					params?.code,
					String(10000 * Math.random())
				),
				{
					time: Date.now(),
					bonus: bonus === bonusAns,
					name: name,
				}
			);
			console.log("Submitted");
			router.push("/quiz/submitted");
			return;
		} else {
			alert(INCORRECT_ALERT_MESSAGE);
			return;
		}
	}
	return (
		<div className="text-4xl">
			<h1 className="mt-[-6rem] bg-gradient-radial from-pink-300 via-rose-400 to-orange-400 bg-clip-text text-transparent font-bold mb-8">
				History of Calculus Quiz
			</h1>
			<h2>Name: </h2>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={name}
				className="bg-zinc-900 border-2 border-zinc-700 rounded-md p-2 max-w-full"
			></input>
			<QuestionField value={value} setValue={setValue} answer={valueAns}>
				<h1> Test question</h1>
			</QuestionField>
			<QuestionField
				value={bonus}
				setValue={setBonus}
				answer={bonusAns}
				bonus
			>
				<h1> Bonus question</h1>
			</QuestionField>
			<form
				onSubmit={(e) => {
					onSubmit(e).then(() => {
						console.log("meow");
					});
				}}
			>
				<button
					type="submit"
					className="bg-zinc-900 p-4 text-center border-2 border-zinc-800 rounded-md hover:opacity-75 active:opacity-25"
				>
					Submit
				</button>
			</form>
			<div className="h-[16rem]"></div>
		</div>
	);
}
