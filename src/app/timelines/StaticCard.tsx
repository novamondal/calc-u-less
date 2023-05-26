import Image from "next/image";

export interface TextCardProps {
	header: string;
	body: string;
}

export default function TextCard({ header, body }: TextCardProps) {
	return (
		<div className="bg-clip-border bg-gradient-to-tr from-purple-400 to-indigo-500 border-1 p-1 my-6 rounded-lg bg-fixed">
			<div className="p-4 bg-zinc-900 rounded-md">
				<h2 className="text-3xl bg-clip-text bg-gradient-to-tr from-green-300 to-blue-600 text-transparent">
					{header}
				</h2>
				<p className="text-lg">{body}</p>
			</div>
		</div>
	);
}

export function BasicCard({
	header,
	children,
}: {
	header: string;
	children: React.ReactNode;
}) {
	return (
		<div className="bg-clip-border bg-gradient-to-tr from-purple-400 to-indigo-500 border-1 p-1 my-6 rounded-lg bg-fixed">
			<div className="p-4 bg-zinc-900 rounded-md">
				<h2 className="text-3xl bg-clip-text bg-gradient-to-tr from-green-300 to-blue-600 text-transparent">
					{header}
				</h2>
				{children}
			</div>
		</div>
	);
}

interface ImageCardProps {
	src: string;
	alt: string;
	h?: `h-[${number}${"em" | "rem" | "%" | "vh" | "px"}]`;
	fit?: "contain" | "cover";
	max_w?: `max-w-[${number}${"em" | "rem" | "%" | "vh" | "px"}]` | null;
}

export function ImageCard({
	src,
	alt,
	h = "h-[16em]",
	fit = "cover",
	max_w = null,
}: ImageCardProps) {
	const containerClass = `p-4 bg-transparent rounded-md relative 
				overflow-hidden ${h} ${max_w}}`;
	return (
		<div
			className={`bg-clip-border bg-gradient-to-tr from-emerald-400 to-blue-600 border-0 p-1 my-6 rounded-lg bg-fixed ${max_w}`}
		>
			<div className={containerClass}>
				<Image
					src={src}
					alt={alt}
					fill={true}
					className={
						fit === "contain" ? "object-contain" : "object-cover"
					}
				/>
			</div>
		</div>
	);
}
