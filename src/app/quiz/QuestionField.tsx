interface QuestionFieldProps {
	value: string | null;
	answer: string;
	setValue: (arg: React.SetStateAction<string | null>) => void;
	children: React.ReactNode;
	bonus?: boolean;
}

export default function QuestionField({
	value,
	setValue,
	children,
	answer,
	bonus = false,
}: QuestionFieldProps) {
	return (
		<div className="my-6 border-2 bg-clip-border bg-gradient-to-bl from-orange-700 to-yellow-400 border-transparent rounded-lg bg-fixed">
			<div className="bg-zinc-900 p-4 relative rounded-lg">
				<div>{children}</div>
				<div className="relative w-min max-w-full">
					<input
						onChange={(e) => {
							setValue(e.target.value ? e.target.value : null);
						}}
						value={value ?? ""}
						className="bg-zinc-900 border-2 border-zinc-700 rounded-md p-2 max-w-full after:hidden"
						type="text"
					></input>
					<h1 className="absolute bottom-2 right-2">
						{bonus
							? ""
							: value?.toLowerCase() === answer.toLowerCase()
							? "✅"
							: "❌"}
					</h1>
				</div>
			</div>
		</div>
	);
}
