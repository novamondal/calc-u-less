interface QuestionFieldProps {
	value: number | null;
	answer: number;
	setValue: (arg: React.SetStateAction<number | null>) => void;
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
			<div className="bg-zinc-900 p-2 relative rounded-lg">
				<div>{children}</div>
				<input
					onChange={(e) => {
						setValue(
							e.target.value ? e.target.valueAsNumber : null
						);
					}}
					value={value ?? ""}
					className="bg-zinc-900 border-2 border-zinc-700 rounded-md p-2 max-w-full after:hidden"
					type="number"
				></input>
				<h1 className="absolute right-8 top-2">
					{bonus ? "" : value === answer ? "✅" : "❌"}
				</h1>
			</div>
		</div>
	);
}
