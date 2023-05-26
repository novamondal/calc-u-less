"use client";

import { useState } from "react";
import QuestionField from "../../QuestionField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";

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
			return;
		}
	}
	return (
		<div className="text-4xl">
			<h1>Name: </h1>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={name}
				className="bg-zinc-900 border-2 border-zinc-700 rounded-md p-2"
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
