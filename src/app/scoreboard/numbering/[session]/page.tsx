import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { db } from "../../../../../firebase";
import { ScoreboardCard } from "../../history/[session]/page";

async function getList(session: string) {
	const collectionRef = collection(
		db,
		"numbering",
		"LVttouNJO0soQePSlL7t",
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
