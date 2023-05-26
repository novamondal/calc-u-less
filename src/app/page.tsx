import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
					Nova Mondal, Emma Tudor, and Alexander Trintchouk
				</p>
				<div className="fixed bottom-8 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
					<p className="pointer-events-none flex place-items-center gap-2 p-8">
						Questions generated with ChatGPT
					</p>
					<p className="pointer-events-none flex place-items-center gap-2 p-8">
						Code by Nova Mondal
					</p>
				</div>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-transparent">
					<Link
						className="flex place-items-center gap-2 p-8 underline"
						href={"https://github.com/novamondal/calc-u-less"}
					>
						View source code on GitHub
					</Link>
				</div>
				<h1 className="text-5xl font-bold">
					The History of Calculus and Alternate Numbering Systems
				</h1>
				<h2 className="text-3xl my-1">Calc BC Final Project</h2>
				<div className="flex flex-col">
					<Link
						href={"/timelines/history"}
						className="text-3xl underline my-4 hover:text-indigo-400"
					>
						History of Calculus
					</Link>

					<Link
						href={"/timelines/numbering"}
						className="text-3xl underline my-4 hover:text-indigo-400"
					>
						Alternate Numbering Systems
					</Link>
				</div>
			</div>
			<div className="relative h-screen flex text-9xl font-extrabold font-mono place-items-start before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"></div>
		</main>
	);
}
