import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-md">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit">
					Nova Mondal, Emma Tudor, and Alexander Trintchouk
				</p>
				<div className="fixed bottom-0 pb-8 left-0 flex h-48 w-full sm:text-sm text-xs items-end justify-center bg-gradient-to-t from-black via-black">
					<p className="pointer-events-none flex place-items-center gap-2 p-8">
						Questions and research aided by ChatGPT
					</p>
					<p className="pointer-events-none flex place-items-center gap-2 p-8">
						AI Images made with NightCafe
					</p>
					<p className="pointer-events-none flex place-items-center gap-2 p-8">
						AI Voices made with FakeYou
					</p>
					<p className="flex place-items-center gap-2 p-8">
						Code by{" "}
						<Link
							className="underline hover:text-indigo-400"
							href={"https://github.com/novamondal/"}
						>
							Nova Mondal
						</Link>
					</p>
				</div>
				<div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-transparent">
					<Link
						className="mb-6 underline hover:text-indigo-400"
						href={"https://github.com/novamondal/calc-u-less"}
					>
						View source code on GitHub
					</Link>
				</div>
				<h1 className="md:text-7xl text-5xl font-bold">
					Alternative Numbering Systems and The History of Calculus
				</h1>
				<h2 className="md:text-4xl text-lg my-1">
					Calc BC Final Project
				</h2>
				<div className="flex flex-col">
					<Link
						href={"/timelines/history"}
						className="md:text-5xl text-2xl underline my-4 hover:text-indigo-400 w-fit"
					>
						History of Calculus
					</Link>

					<Link
						href={"/timelines/numbering"}
						className="md:text-5xl text-2xl underline my-4 hover:text-indigo-400 w-fit"
					>
						Alternate Numbering Systems
					</Link>
				</div>
			</div>
			<div className="relative h-screen flex text-9xl font-extrabold font-mono place-items-start before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40"></div>
		</main>
	);
}
