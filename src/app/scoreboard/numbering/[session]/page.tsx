"use client";

import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	where,
	onSnapshot,
	QueryDocumentSnapshot,
	DocumentData,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { ScoreboardCard } from "../../history/[session]/page";
import { useState, useEffect } from "react";

function getList(
	session: string,
	setData: (
		arg: React.SetStateAction<QueryDocumentSnapshot<DocumentData>[]>
	) => void,
	setBonusWinner: (arg: React.SetStateAction<Record<string, unknown>>) => void
) {
	const collectionRef = collection(
		db,
		"numbering",
		"LVttouNJO0soQePSlL7t",
		session
	);
	const dataQuery = query(collectionRef, orderBy("time"));

	const unsubscribe = onSnapshot(dataQuery, (querySnapshot) => {
		const data: QueryDocumentSnapshot<DocumentData>[] = [];
		querySnapshot.forEach((doc) => {
			data.push(doc);
		});
		setData(data);
		const bonusWinner = data
			?.filter((doc) => doc?.data()?.bonus)[0]
			?.data();
		setBonusWinner(bonusWinner);
	});
	return unsubscribe;
}

export default function Scoreboard({ params }: any) {
	const [data, setData] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
	const [bonusWinner, setBonusWinner] = useState<Record<string, unknown>>({});

	useEffect(() => {
		const unsubscribe = getList(params?.session, setData, setBonusWinner);
		return () => {
			unsubscribe();
		};
	}, [params?.session]);

	if (data?.[0])
		return (
			<div className="flex flex-col justify-start items-center px-8 bg-gradient-conic from-transparent via-slate-800 bg-fixed h-screen">
				<h1 className="text-5xl text-center font-bold my-4 bg-clip-text bg-gradient-to-tr from-rose-300 to-orange-500 text-transparent pb-2">
					Leaderboard for Alternate Numbering Systems:{" "}
					{params?.session}{" "}
				</h1>
				{data?.map((doc, index) => {
					return (
						<ScoreboardCard
							data={doc?.data()}
							position={index + 1}
							key={doc?.id}
						/>
					);
				})}
				<ScoreboardCard
					data={
						bonusWinner?.name
							? bonusWinner
							: { name: "No one yet!" }
					}
					position={"BONUS WINNER: "}
				/>
			</div>
		);
	return (
		<div className="text-6xl text-center m-5 pt-16">
			<h1>Loading data...</h1>
			<p className="text-lg">
				(if this is taking a long time, it's probably because nobody has
				submitted anything yet)
			</p>
		</div>
	);
}
