"use client";

export function ScoreboardCard({
	data,
	position,
}: {
	data: Record<string, unknown>;
	position: number | "BONUS WINNER: ";
}) {
	return (
		<div className="border-4 bg-clip-border bg-gradient-to-tr from-rose-700 to-orange-800 w-full min-h-[6em] border-transparent my-8 rounded-md">
			<div className="w-full h-full bg-zinc-900 flex-row flex items-center rounded-md">
				<h1 className="text-2xl mx-4 bg-gradient-to-tr from-pink-100 to-rose-200 bg-clip-text text-transparent">
					{typeof position === "number" ? "#" : ""}
					{position}
				</h1>
				<h1 className="mx-4 text-xl bg-gradient-to-tr from-pink-100 to-rose-200 bg-clip-text text-transparent">{`${data?.name}`}</h1>
			</div>
		</div>
	);
}
