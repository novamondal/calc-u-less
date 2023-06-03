"use client";

import {
	HiArrowUturnLeft,
	HiOutlinePauseCircle,
	HiOutlinePlayCircle,
} from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
	src: string;
	label: string;
}

export default function AudioCard({ src, label }: AudioPlayerProps) {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [play, setPlay] = useState(false);

	const progressRef = useRef<HTMLInputElement>(null);
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		if (play) {
			audioRef.current?.play();
		}
		if (!play) {
			audioRef.current?.pause();
		}
	}, [play]);

	useEffect(() => {
		audioRef.current?.addEventListener("timeupdate", () => {
			setProgress(
				(audioRef.current!.currentTime / audioRef.current!.duration) *
					100
			);
		});
	}, []);

	useEffect(() => {
		if (progressRef.current) {
			progressRef.current.value = progress.toString();
		}
		audioRef.current?.addEventListener("ended", () => {
			setPlay(false);
		});
	}, [progress]);

	return (
		<div className="rounded-md bg-clip-border bg-gradient-to-tr from-rose-400 to-orange-500 border-2 my-2 border-transparent overflow-hidden">
			<div className="w-full p-2 bg-zinc-900 rounded-md align-middle">
				<audio src={src} ref={audioRef} />
				<div className="flex flex-row items-center w-full justify-between flex-wrap">
					<h2 className="font-mono bg-gradient-to-tr mx-2 from-rose-400 to-orange-500 text-transparent bg-clip-text">
						{label}
					</h2>
					<div className="flex items-center justify-center">
						<button
							onClick={() => {
								if (audioRef.current?.currentTime) {
									audioRef.current.currentTime = 0;
								}
							}}
							className="active:opacity-[50%] transition-all duration-100 mx-2"
							type="button"
							name="rewind"
						>
							<HiArrowUturnLeft size="2em" color="#F43F5E" />
						</button>
						<button
							onClick={() => {
								setPlay((p) => !p);
							}}
							className="active:opacity-[50%] transition-all duration-100 mx-2"
							type="button"
							name="play/pause"
						>
							{play ? (
								<HiOutlinePauseCircle
									size="2em"
									color="#F43F5E"
								/>
							) : (
								<HiOutlinePlayCircle
									size="2em"
									color="#F43F5E"
								/>
							)}
						</button>
						<input
							ref={progressRef}
							type="range"
							className="w-1/2 min-w-[6rem] appearance-none bg-gradient-to-r from-rose-400 to-orange-500 h-1 rounded-md"
							onChange={(e) => {
								if (audioRef.current?.duration) {
									audioRef.current.currentTime =
										(parseInt(e.target.value) / 100) *
										audioRef.current.duration;
								}
							}}
							step={0.1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
