"use client";

import { useState } from "react";
import QuestionField from "../../QuestionField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { INCORRECT_ALERT_MESSAGE } from "@/constants";

export default function NumberingQuiz({ params }: any) {
	const [name, setName] = useState<string>("");

	const [value, setValue] = useState<number | null>(null);
	const valueAns = 69;

	const [bonus, setBonus] = useState<number | null>(null);
	const bonusAns = 420;
	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		if (value === valueAns && name) {
			await setDoc(
				doc(
					db,
					"numbering",
					"LVttouNJO0soQePSlL7t",
					params?.code,
					String(Date.now() * Math.random())
				),
				{
					time: Date.now(),
					bonus: bonus === bonusAns,
					name: name,
				}
			);
			console.log("Submitted");
			return;
		} else {
			e.preventDefault();
			alert(INCORRECT_ALERT_MESSAGE);
			return;
		}
	}
	return (
		<div className="text-4xl">
			<h1 className="mt-[-6rem] mb-8 font-bold bg-clip-text bg-gradient-radial from-orange-200 via-orange-400 to-rose-400 text-transparent">
				Numbering Systems Quiz
			</h1>
			<h2 className="">Name: </h2>
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
			<form onSubmit={onSubmit}>
				<button
					type="submit"
					className="bg-zinc-900 p-4 text-center border-2 border-zinc-800 rounded-md hover:opacity-75 active:opacity-25"
				>
					Submit
				</button>
			</form>
		</div>
	);
}
