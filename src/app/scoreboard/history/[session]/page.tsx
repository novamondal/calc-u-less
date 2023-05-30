"use client";

import {
	DocumentData,
	QueryDocumentSnapshot,
	collection,
	doc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useEffect, useState } from "react";
import { revalidatePath } from "next/cache";

function getList(
	session: string,
	setData: (
		arg: React.SetStateAction<QueryDocumentSnapshot<DocumentData>[]>
	) => void,
	setBonusWinner: (arg: React.SetStateAction<Record<string, unknown>>) => void
) {
	const collectionRef = collection(
		db,
		"history",
		"Bq0C2OKBeGYXaMBPOr4u",
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
			<div className="flex flex-col justify-start items-center px-8 bg-gradient-conic bg-fixed h-screen from-transparent via-zinc-950">
				<h1 className="text-5xl text-center font-bold my-4 bg-clip-text bg-gradient-to-tr from-rose-300 to-orange-200 text-transparent pb-2">
					Leaderboard for History of Calculus: {params?.session}{" "}
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

export function ScoreboardCard({
	data,
	position,
}: {
	data: Record<string, unknown>;
	position: number | string;
}) {
	return (
		<div className="border-4 bg-clip-border bg-gradient-to-tr from-rose-700 to-orange-800 w-full min-h-[6em] border-transparent my-4 rounded-md">
			<div className="w-full min-h-[6em] bg-zinc-900 flex-row flex items-center rounded-md">
				<h1 className="text-2xl mx-4 bg-gradient-to-tr from-pink-100 to-rose-200 bg-clip-text text-transparent">
					{typeof position === "number" ? "#" : ""}
					{position}
				</h1>
				<h1 className="mx-4 text-xl bg-gradient-to-tr from-pink-100 to-rose-200 bg-clip-text text-transparent">{`${data?.name}`}</h1>
			</div>
		</div>
	);
}
