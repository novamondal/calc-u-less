import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { db } from "../../../../../firebase";

async function getList(session: string) {
	const collectionRef = collection(
		db,
		"history",
		"Bq0C2OKBeGYXaMBPOr4u",
		session
	);
	const dataQuery = query(collectionRef, orderBy("time"));

	const querySnapshot = await getDocs(dataQuery);
	const bonusWinner = querySnapshot.docs
		.filter((doc) => doc?.data()?.bonus)?.[0]
		?.data();
	return { data: querySnapshot.docs, bonusWinner: bonusWinner };
}

export default async function Scoreboard({ params }: any) {
	const { data, bonusWinner } = await getList(params?.session);
	if (data?.[0])
		return (
			<div className="flex flex-col justify-start items-center px-8">
				<h1 className="text-5xl text-center font-bold my-4 bg-clip-text bg-gradient-to-tr from-emerald-300 to-green-500 text-transparent">
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
					data={bonusWinner}
					position={"BONUS WINNER: "}
				/>
			</div>
		);
	return (
		<div className="text-6xl text-center m-5 pt-16">
			ERROR: No data found for {params?.session}
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
		<div className="border-4 bg-clip-border bg-gradient-to-tr from-teal-400 to-emerald-500 w-full min-h-[6em] border-transparent my-4 rounded-md">
			<div className="w-full min-h-[6em] bg-zinc-900 flex-row flex items-center rounded-md">
				<h1 className="text-2xl mx-4 bg-gradient-to-tr from-teal-100 to-emerald-200 bg-clip-text text-transparent">
					{typeof position === "number" ? "#" : ""}
					{position}
				</h1>
				<h1 className="mx-4 text-xl bg-gradient-to-tr from-teal-100 to-emerald-200 bg-clip-text text-transparent">{`${data?.name}`}</h1>
			</div>
		</div>
	);
}
