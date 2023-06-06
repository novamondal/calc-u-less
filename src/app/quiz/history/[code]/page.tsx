"use client";

import { useState } from "react";
import QuestionField from "../../QuestionField";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { INCORRECT_ALERT_MESSAGE } from "@/constants";
import { useRouter } from "next/navigation";
import normalsImage from "../../../../../public/normals.png";
import Image from "next/image";

export default function HistoryQuiz({ params }: any) {
	const router = useRouter();

	const [name, setName] = useState<string>("");

	const [q1, setQ1] = useState<string | null>(null);
	const ans1 = "3.469";

	const [q2, setQ2] = useState<string | null>(null);
	const ans2 = "0.194";

	const [q3, setQ3] = useState<string | null>(null);
	const ans3 = "-0.5";

	const [q4, setQ4] = useState<string | null>(null);
	const ans4 = "9.577";

	const [bonus, setBonus] = useState<string | null>(null);
	const bonusAns = "0.463";

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (
			q1?.toLowerCase() === ans1?.toLowerCase() &&
			name &&
			ans2?.toLowerCase() === q2?.toLowerCase() &&
			ans3?.toLowerCase() === q3?.toLowerCase() &&
			ans4?.toLowerCase() === q4?.toLowerCase()
		) {
			await setDoc(
				doc(
					db,
					"history",
					"Bq0C2OKBeGYXaMBPOr4u",
					params?.code,
					String(10000 * Math.random())
				),
				{
					time: Date.now(),
					bonus: bonus?.toLowerCase() === bonusAns?.toLowerCase(),
					name: name,
				}
			);
			console.log("Submitted");
			router.push("/quiz/submitted");
			return;
		} else {
			alert(INCORRECT_ALERT_MESSAGE);
			return;
		}
	}
	return (
		<div className="text-4xl">
			<h1 className="mt-[-6rem] bg-gradient-radial from-pink-300 via-rose-400 to-orange-400 bg-clip-text text-transparent font-bold mb-8">
				History of Calculus Quiz
			</h1>
			<h2>Name: </h2>
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
				value={name}
				className="bg-zinc-900 border-2 border-zinc-700 rounded-md p-2 max-w-full"
			></input>
			<QuestionField value={q1} setValue={setQ1} answer={ans1}>
				<h1>1. Descartes Method of Normals</h1>
				<h2 className="text-xl">
					Find the slope of the line tangent to the red curve at the
					point shown using the image below by applying Descartes'
					Method of Normals. Round your final answer to{" "}
					<strong className="font-extrabold underline">
						EXACTLY
					</strong>{" "}
					3 past the decimal point (YOU WILL BE MARKED WRONG IF YOUR
					ROUNDING IS OFF)
				</h2>
				<Image
					src={normalsImage}
					alt="normals"
					className="m-1 rounded-md"
				/>
			</QuestionField>
			<QuestionField value={q2} setValue={setQ2} answer={ans2}>
				<h1>2. Newton's Law of Cooling</h1>
				<p className="text-lg">
					The cooling of an oven at the end of a baking cycle is
					modeled using Newton's Law of Cooling by the differential
					equation <code className="text-2xl">y'(t)=k(L-y)</code>{" "}
					where y' is the rate of change of the temperature of the
					oven in degrees F per minute, k is a positive constant, and
					L is the constant ambient temperature in degrees F. The
					solution to the equation is in the form of{" "}
					<code className="text-2xl">
						y(t)=L+C·<i>e</i>
						<sup>-k·t</sup>
					</code>{" "}
					where C is a constant and t is the time in minutes. It is
					known the the ambient temperature L is 80 degrees. If the
					oven is initially at 450 degrees when t=0 minutes and then
					at 250 degrees when t=4 minutes, find the value of k. Round
					your final answer to{" "}
					<strong className="font-extrabold underline">
						EXACTLY
					</strong>{" "}
					3 past the decimal point (YOU WILL BE MARKED WRONG IF YOUR
					ROUNDING IS OFF).
				</p>
			</QuestionField>
			<QuestionField value={q3} setValue={setQ3} answer={ans3}>
				<h1>3. L'Hospital</h1>
				<p className="text-lg">
					Compute the following limit using L'Hopital's Rule. Express
					your answer as a decimal with no trailing zeroes.{" "}
				</p>
				<div className="relative">
					<svg
						viewBox="0 0 100 59"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path
								d="M1.608 13.48H4.248V27.376C4.248 28.016 4.344 28.424 4.536 28.6C4.728 28.776 4.968 28.864 5.256 28.864C5.576 28.864 5.872 28.832 6.144 28.768C6.432 28.704 6.68 28.624 6.888 28.528L7.272 30.616C6.888 30.776 6.432 30.912 5.904 31.024C5.376 31.136 4.904 31.192 4.488 31.192C3.592 31.192 2.888 30.944 2.376 30.448C1.864 29.936 1.608 29.232 1.608 28.336V13.48ZM8.80275 31V18.448H11.4428V31H8.80275ZM8.80275 16.384V13.48H11.4428V16.384H8.80275ZM33.8153 31H31.1753V23.968C31.1753 22.8 30.9833 21.944 30.5993 21.4C30.2153 20.856 29.6553 20.584 28.9193 20.584C28.1833 20.584 27.4953 20.864 26.8553 21.424C26.2313 21.968 25.7913 22.68 25.5353 23.56V31H22.8953V23.968C22.8953 22.8 22.7033 21.944 22.3193 21.4C21.9353 20.856 21.3833 20.584 20.6633 20.584C19.9273 20.584 19.2393 20.856 18.5993 21.4C17.9753 21.944 17.5273 22.656 17.2553 23.536V31H14.6152V18.448H17.0153V20.968C17.5113 20.088 18.1593 19.416 18.9593 18.952C19.7753 18.472 20.7033 18.232 21.7433 18.232C22.7833 18.232 23.5993 18.504 24.1913 19.048C24.7993 19.592 25.1753 20.272 25.3193 21.088C25.8633 20.16 26.5273 19.456 27.3113 18.976C28.1113 18.48 29.0233 18.232 30.0473 18.232C30.7833 18.232 31.3993 18.368 31.8953 18.64C32.3913 18.912 32.7753 19.288 33.0473 19.768C33.3193 20.232 33.5113 20.776 33.6233 21.4C33.7513 22.008 33.8153 22.656 33.8153 23.344V31Z"
								fill="white"
							/>
							<path
								d="M3.564 44L5.496 41.216L3.6 38.516H4.548L5.976 40.544L7.344 38.516H8.232L6.456 41.18L8.472 44H7.488L5.976 41.864L4.548 44H3.564ZM9.192 40.064H13.152L11.424 38.672L11.844 38.156L14.676 40.4V40.664L11.82 42.74L11.424 42.14L13.14 40.868H9.192V40.064ZM16.284 42.152L19.488 38.036L19.764 38.6L16.56 42.668L16.284 42.152ZM18 44.132C17.504 44.132 17.084 43.984 16.74 43.688C16.396 43.392 16.132 42.96 15.948 42.392C15.772 41.816 15.684 41.12 15.684 40.304C15.684 39.512 15.772 38.832 15.948 38.264C16.132 37.688 16.396 37.248 16.74 36.944C17.084 36.632 17.504 36.476 18 36.476C18.496 36.476 18.916 36.632 19.26 36.944C19.604 37.248 19.864 37.688 20.04 38.264C20.224 38.832 20.316 39.512 20.316 40.304C20.316 41.12 20.224 41.816 20.04 42.392C19.864 42.96 19.604 43.392 19.26 43.688C18.916 43.984 18.496 44.132 18 44.132ZM18 43.4C18.304 43.4 18.564 43.28 18.78 43.04C18.996 42.8 19.16 42.452 19.272 41.996C19.392 41.532 19.452 40.968 19.452 40.304C19.452 39.672 19.392 39.128 19.272 38.672C19.16 38.208 18.996 37.848 18.78 37.592C18.564 37.336 18.304 37.208 18 37.208C17.696 37.208 17.436 37.336 17.22 37.592C17.004 37.848 16.836 38.208 16.716 38.672C16.604 39.128 16.548 39.672 16.548 40.304C16.548 40.968 16.604 41.532 16.716 41.996C16.836 42.452 17.004 42.8 17.22 43.04C17.436 43.28 17.696 43.4 18 43.4Z"
								fill="white"
							/>
							<path
								d="M43.564 42L45.496 39.216L43.6 36.516H44.548L45.976 38.544L47.344 36.516H48.232L46.456 39.18L48.472 42H47.488L45.976 39.864L44.548 42H43.564ZM50.332 38.628V37.824H53.692V38.628H50.332ZM58.588 42.084C58.236 42.084 57.948 42.024 57.724 41.904C57.5 41.784 57.328 41.6 57.208 41.352C57.088 41.096 57.008 40.776 56.968 40.392C56.936 40.008 56.928 39.552 56.944 39.024L57.088 35.112L57.988 35.004L58.108 34.992L58.12 35.076C58.08 35.132 58.044 35.188 58.012 35.244C57.988 35.3 57.968 35.396 57.952 35.532L57.844 36.888L57.88 37.104L57.796 39.084C57.772 39.692 57.788 40.164 57.844 40.5C57.9 40.828 58 41.056 58.144 41.184C58.288 41.304 58.48 41.364 58.72 41.364C58.984 41.364 59.216 41.312 59.416 41.208C59.624 41.104 59.84 40.972 60.064 40.812L60.328 41.496C60.056 41.696 59.776 41.844 59.488 41.94C59.2 42.036 58.9 42.084 58.588 42.084ZM55.84 36.516H59.788V37.224H55.84V36.516ZM63.532 42.132C62.908 42.132 62.428 41.992 62.092 41.712C61.756 41.424 61.588 41.06 61.588 40.62C61.588 40.324 61.66 40.06 61.804 39.828C61.948 39.588 62.144 39.388 62.392 39.228C62.648 39.06 62.944 38.932 63.28 38.844C63.616 38.756 63.972 38.712 64.348 38.712C64.484 38.712 64.62 38.716 64.756 38.724C64.9 38.724 65.048 38.732 65.2 38.748C65.36 38.756 65.524 38.772 65.692 38.796L65.716 39.456C65.572 39.432 65.424 39.416 65.272 39.408C65.128 39.392 64.984 39.38 64.84 39.372C64.696 39.364 64.556 39.36 64.42 39.36C64.132 39.36 63.868 39.384 63.628 39.432C63.388 39.48 63.18 39.552 63.004 39.648C62.828 39.744 62.692 39.868 62.596 40.02C62.5 40.172 62.452 40.356 62.452 40.572C62.452 40.74 62.48 40.884 62.536 41.004C62.6 41.116 62.684 41.208 62.788 41.28C62.892 41.344 63.012 41.392 63.148 41.424C63.292 41.456 63.448 41.472 63.616 41.472C63.928 41.472 64.204 41.424 64.444 41.328C64.692 41.224 64.9 41.076 65.068 40.884C65.244 40.692 65.376 40.456 65.464 40.176C65.552 39.896 65.596 39.576 65.596 39.216C65.596 38.672 65.532 38.248 65.404 37.944C65.276 37.64 65.084 37.424 64.828 37.296C64.58 37.168 64.26 37.104 63.868 37.104C63.604 37.104 63.344 37.156 63.088 37.26C62.832 37.356 62.6 37.508 62.392 37.716L61.972 37.164C62.228 36.908 62.524 36.716 62.86 36.588C63.196 36.46 63.552 36.396 63.928 36.396C64.288 36.396 64.616 36.44 64.912 36.528C65.208 36.616 65.46 36.764 65.668 36.972C65.884 37.172 66.048 37.444 66.16 37.788C66.28 38.132 66.34 38.564 66.34 39.084V42H65.404V41.16C65.3 41.36 65.172 41.524 65.02 41.652C64.876 41.78 64.72 41.88 64.552 41.952C64.384 42.016 64.212 42.06 64.036 42.084C63.86 42.116 63.692 42.132 63.532 42.132ZM67.864 42V36.516H68.704V37.488C68.848 37.264 69.016 37.072 69.208 36.912C69.4 36.744 69.612 36.616 69.844 36.528C70.076 36.432 70.316 36.384 70.564 36.384C70.868 36.384 71.14 36.46 71.38 36.612C71.62 36.764 71.812 37.008 71.956 37.344C72.1 37.68 72.172 38.124 72.172 38.676V42H71.332V38.7C71.332 38.316 71.288 38.012 71.2 37.788C71.112 37.556 70.992 37.392 70.84 37.296C70.688 37.192 70.516 37.14 70.324 37.14C70.14 37.14 69.952 37.18 69.76 37.26C69.576 37.34 69.404 37.456 69.244 37.608C69.084 37.752 68.952 37.928 68.848 38.136C68.752 38.344 68.704 38.58 68.704 38.844V42H67.864ZM77.74 43.248C77.076 42.936 76.496 42.52 76 42C75.512 41.472 75.132 40.88 74.86 40.224C74.596 39.56 74.464 38.872 74.464 38.16C74.464 37.448 74.596 36.772 74.86 36.132C75.124 35.484 75.496 34.908 75.976 34.404C76.456 33.892 77.02 33.484 77.668 33.18L77.896 33.924C77.512 34.132 77.16 34.388 76.84 34.692C76.528 34.996 76.256 35.332 76.024 35.7C75.8 36.068 75.624 36.464 75.496 36.888C75.376 37.312 75.316 37.748 75.316 38.196C75.316 38.644 75.376 39.08 75.496 39.504C75.624 39.928 75.804 40.332 76.036 40.716C76.268 41.092 76.544 41.436 76.864 41.748C77.192 42.052 77.56 42.312 77.968 42.528L77.74 43.248ZM79.564 42L81.496 39.216L79.6 36.516H80.548L81.976 38.544L83.344 36.516H84.232L82.456 39.18L84.472 42H83.488L81.976 39.864L80.548 42H79.564ZM86.596 43.248L86.368 42.528C86.776 42.312 87.14 42.052 87.46 41.748C87.788 41.436 88.068 41.092 88.3 40.716C88.532 40.332 88.708 39.928 88.828 39.504C88.956 39.08 89.02 38.644 89.02 38.196C89.02 37.748 88.956 37.312 88.828 36.888C88.708 36.464 88.532 36.068 88.3 35.7C88.076 35.332 87.804 34.996 87.484 34.692C87.172 34.388 86.824 34.132 86.44 33.924L86.668 33.18C87.316 33.484 87.88 33.892 88.36 34.404C88.84 34.908 89.212 35.484 89.476 36.132C89.74 36.772 89.872 37.448 89.872 38.16C89.872 38.872 89.736 39.56 89.464 40.224C89.2 40.88 88.82 41.472 88.324 42C87.836 42.52 87.26 42.936 86.596 43.248Z"
								fill="white"
							/>
							<path
								d="M43.564 20L45.496 17.216L43.6 14.516H44.548L45.976 16.544L47.344 14.516H48.232L46.456 17.18L48.472 20H47.488L45.976 17.864L44.548 20H43.564ZM50.332 16.628V15.824H53.692V16.628H50.332ZM58.012 20.12C57.708 20.12 57.416 20.088 57.136 20.024C56.864 19.96 56.604 19.864 56.356 19.736C56.116 19.608 55.892 19.448 55.684 19.256L56.164 18.44L56.236 18.332L56.308 18.38C56.324 18.444 56.34 18.512 56.356 18.584C56.38 18.648 56.436 18.728 56.524 18.824C56.692 18.992 56.892 19.132 57.124 19.244C57.364 19.348 57.668 19.4 58.036 19.4C58.332 19.4 58.58 19.364 58.78 19.292C58.988 19.22 59.148 19.12 59.26 18.992C59.372 18.856 59.428 18.7 59.428 18.524C59.428 18.404 59.404 18.3 59.356 18.212C59.308 18.116 59.228 18.028 59.116 17.948C59.012 17.868 58.872 17.788 58.696 17.708C58.52 17.628 58.304 17.548 58.048 17.468C57.632 17.348 57.268 17.208 56.956 17.048C56.644 16.888 56.404 16.704 56.236 16.496C56.068 16.28 55.984 16.036 55.984 15.764C55.984 15.484 56.06 15.244 56.212 15.044C56.364 14.836 56.588 14.676 56.884 14.564C57.188 14.444 57.56 14.384 58 14.384C58.256 14.384 58.488 14.404 58.696 14.444C58.904 14.476 59.096 14.528 59.272 14.6C59.448 14.672 59.608 14.764 59.752 14.876C59.904 14.98 60.048 15.104 60.184 15.248L59.692 15.848L59.608 15.944L59.548 15.884C59.54 15.82 59.52 15.76 59.488 15.704C59.464 15.64 59.408 15.564 59.32 15.476C59.136 15.332 58.928 15.224 58.696 15.152C58.464 15.072 58.24 15.032 58.024 15.032C57.704 15.032 57.428 15.088 57.196 15.2C56.964 15.312 56.848 15.484 56.848 15.716C56.848 15.836 56.888 15.956 56.968 16.076C57.056 16.188 57.212 16.304 57.436 16.424C57.66 16.536 57.98 16.652 58.396 16.772C58.852 16.916 59.216 17.064 59.488 17.216C59.768 17.36 59.968 17.528 60.088 17.72C60.216 17.912 60.28 18.14 60.28 18.404C60.28 18.708 60.196 18.992 60.028 19.256C59.868 19.52 59.62 19.732 59.284 19.892C58.948 20.044 58.524 20.12 58.012 20.12ZM62.2 20V19.304H63.604V15.212H62.272V14.516H64.468V19.304H65.752V20H62.2ZM63.988 13.364C63.82 13.364 63.676 13.304 63.556 13.184C63.436 13.064 63.376 12.92 63.376 12.752C63.376 12.576 63.432 12.428 63.544 12.308C63.664 12.188 63.812 12.128 63.988 12.128C64.156 12.128 64.3 12.192 64.42 12.32C64.548 12.44 64.612 12.584 64.612 12.752C64.612 12.92 64.548 13.064 64.42 13.184C64.3 13.304 64.156 13.364 63.988 13.364ZM67.864 20V14.516H68.704V15.488C68.848 15.264 69.016 15.072 69.208 14.912C69.4 14.744 69.612 14.616 69.844 14.528C70.076 14.432 70.316 14.384 70.564 14.384C70.868 14.384 71.14 14.46 71.38 14.612C71.62 14.764 71.812 15.008 71.956 15.344C72.1 15.68 72.172 16.124 72.172 16.676V20H71.332V16.7C71.332 16.316 71.288 16.012 71.2 15.788C71.112 15.556 70.992 15.392 70.84 15.296C70.688 15.192 70.516 15.14 70.324 15.14C70.14 15.14 69.952 15.18 69.76 15.26C69.576 15.34 69.404 15.456 69.244 15.608C69.084 15.752 68.952 15.928 68.848 16.136C68.752 16.344 68.704 16.58 68.704 16.844V20H67.864ZM77.74 21.248C77.076 20.936 76.496 20.52 76 20C75.512 19.472 75.132 18.88 74.86 18.224C74.596 17.56 74.464 16.872 74.464 16.16C74.464 15.448 74.596 14.772 74.86 14.132C75.124 13.484 75.496 12.908 75.976 12.404C76.456 11.892 77.02 11.484 77.668 11.18L77.896 11.924C77.512 12.132 77.16 12.388 76.84 12.692C76.528 12.996 76.256 13.332 76.024 13.7C75.8 14.068 75.624 14.464 75.496 14.888C75.376 15.312 75.316 15.748 75.316 16.196C75.316 16.644 75.376 17.08 75.496 17.504C75.624 17.928 75.804 18.332 76.036 18.716C76.268 19.092 76.544 19.436 76.864 19.748C77.192 20.052 77.56 20.312 77.968 20.528L77.74 21.248ZM79.564 20L81.496 17.216L79.6 14.516H80.548L81.976 16.544L83.344 14.516H84.232L82.456 17.18L84.472 20H83.488L81.976 17.864L80.548 20H79.564ZM86.596 21.248L86.368 20.528C86.776 20.312 87.14 20.052 87.46 19.748C87.788 19.436 88.068 19.092 88.3 18.716C88.532 18.332 88.708 17.928 88.828 17.504C88.956 17.08 89.02 16.644 89.02 16.196C89.02 15.748 88.956 15.312 88.828 14.888C88.708 14.464 88.532 14.068 88.3 13.7C88.076 13.332 87.804 12.996 87.484 12.692C87.172 12.388 86.824 12.132 86.44 11.924L86.668 11.18C87.316 11.484 87.88 11.892 88.36 12.404C88.84 12.908 89.212 13.484 89.476 14.132C89.74 14.772 89.872 15.448 89.872 16.16C89.872 16.872 89.736 17.56 89.464 18.224C89.2 18.88 88.82 19.472 88.324 20C87.836 20.52 87.26 20.936 86.596 21.248Z"
								fill="white"
							/>
							<path
								d="M43 27.5L95 27"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_2">
								<rect width="100" height="59" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</QuestionField>
			<QuestionField value={q4} setValue={setQ4} answer={ans4}>
				<h1>4. Riemann Sums</h1>
				<p className="text-xl xl:text-2xl">
					Let{" "}
					<code className="text-3xl">
						f(x)=0.1·e
						<sup>
							(4x-x<sup>2</sup>)
						</sup>
					</code>
					Approximate the area under the curve of f(x) from x=0 to x=4
					using a left-endpoint rectangular Riemann sum with 4
					subintervals of equal size. Round your final answer to{" "}
					<strong className="font-extrabold underline">
						EXACTLY
					</strong>{" "}
					3 digits past the decimal point (YOU WILL BE MARKED WRONG IF
					YOUR ROUNDING IS OFF).
				</p>
			</QuestionField>
			<QuestionField
				value={bonus}
				setValue={setBonus}
				answer={bonusAns}
				bonus
			>
				<h1> Bonus Question: Euler's Method</h1>
				<p className="text-xl xl:text-2xl">
					Starting at x=1, approximate the solution to y(2) for the
					following differential equation using Euler's Method with 2
					steps of equal size, given that y(1)=1. Express your answer
					as a decimal. Round your final answer to{" "}
					<strong className="font-extrabold underline">
						EXACTLY
					</strong>{" "}
					3 digits past the decimal point (YOU WILL BE MARKED WRONG IF
					YOUR ROUNDING IS OFF).
				</p>
				<div className="relative">
					<svg
						viewBox="0 0 148 60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path
								d="M42.564 40L44.496 37.216L42.6 34.516H43.548L44.976 36.544L46.344 34.516H47.232L45.456 37.18L47.472 40H46.488L44.976 37.864L43.548 40H42.564ZM50.904 37.132C50.624 37.132 50.356 37.088 50.1 37C49.844 36.904 49.628 36.768 49.452 36.592L49.848 36.112L49.932 36.016L49.992 36.076C50 36.14 50.02 36.196 50.052 36.244C50.084 36.292 50.152 36.36 50.256 36.448C50.344 36.488 50.436 36.524 50.532 36.556C50.636 36.58 50.752 36.592 50.88 36.592C51.184 36.592 51.416 36.512 51.576 36.352C51.736 36.192 51.816 35.988 51.816 35.74C51.816 35.516 51.756 35.34 51.636 35.212C51.524 35.084 51.36 34.996 51.144 34.948C50.936 34.892 50.684 34.876 50.388 34.9V34.384C50.644 34.384 50.852 34.364 51.012 34.324C51.18 34.284 51.312 34.228 51.408 34.156C51.504 34.076 51.568 33.984 51.6 33.88C51.64 33.776 51.66 33.668 51.66 33.556C51.66 33.42 51.628 33.308 51.564 33.22C51.5 33.124 51.412 33.052 51.3 33.004C51.196 32.948 51.072 32.92 50.928 32.92C50.76 32.92 50.596 32.948 50.436 33.004C50.284 33.052 50.14 33.14 50.004 33.268L49.596 32.872C49.78 32.688 49.988 32.56 50.22 32.488C50.46 32.408 50.696 32.368 50.928 32.368C51.352 32.368 51.692 32.476 51.948 32.692C52.204 32.908 52.332 33.188 52.332 33.532C52.332 33.78 52.264 34 52.128 34.192C51.992 34.376 51.8 34.508 51.552 34.588C51.728 34.644 51.884 34.724 52.02 34.828C52.164 34.924 52.276 35.052 52.356 35.212C52.444 35.364 52.488 35.548 52.488 35.764C52.488 36.02 52.424 36.252 52.296 36.46C52.176 36.668 52 36.832 51.768 36.952C51.536 37.072 51.248 37.132 50.904 37.132Z"
								fill="white"
							/>
							<path
								d="M38.332 17.628V16.824H41.692V17.628H38.332ZM44.524 23.088C44.268 23.088 44.032 23.048 43.816 22.968C43.608 22.888 43.424 22.772 43.264 22.62L43.636 22.032L43.708 21.924L43.78 21.972C43.796 22.036 43.824 22.088 43.864 22.128C43.904 22.176 43.98 22.236 44.092 22.308C44.164 22.332 44.24 22.348 44.32 22.356C44.4 22.372 44.484 22.38 44.572 22.38C44.788 22.38 44.968 22.328 45.112 22.224C45.264 22.12 45.396 21.96 45.508 21.744C45.62 21.528 45.728 21.256 45.832 20.928L46.876 17.7C46.996 17.332 47.112 16.968 47.224 16.608C47.336 16.248 47.412 15.884 47.452 15.516H48.316C48.26 15.884 48.172 16.256 48.052 16.632C47.932 17.008 47.804 17.384 47.668 17.76L46.3 21.624C46.108 22.16 45.86 22.536 45.556 22.752C45.26 22.976 44.916 23.088 44.524 23.088ZM43.552 15.516H44.452L46.228 20.088L45.844 21.156L43.552 15.516ZM50.512 17.556C50.888 17.212 51.22 16.912 51.508 16.656C51.804 16.392 52.052 16.156 52.252 15.948C52.46 15.732 52.616 15.524 52.72 15.324C52.832 15.124 52.888 14.916 52.888 14.7C52.888 14.508 52.852 14.356 52.78 14.244C52.708 14.132 52.608 14.052 52.48 14.004C52.352 13.956 52.208 13.932 52.048 13.932C51.888 13.932 51.732 13.956 51.58 14.004C51.436 14.052 51.304 14.124 51.184 14.22C51.104 14.324 51.048 14.404 51.016 14.46C50.992 14.516 50.984 14.576 50.992 14.64L50.944 14.7L50.848 14.628L50.38 14.256C50.556 13.976 50.788 13.76 51.076 13.608C51.364 13.448 51.688 13.368 52.048 13.368C52.336 13.368 52.592 13.424 52.816 13.536C53.048 13.64 53.228 13.792 53.356 13.992C53.484 14.184 53.548 14.42 53.548 14.7C53.548 14.948 53.492 15.184 53.38 15.408C53.268 15.632 53.116 15.856 52.924 16.08C52.732 16.296 52.508 16.52 52.252 16.752C52.004 16.984 51.736 17.232 51.448 17.496H53.044C53.18 17.496 53.276 17.488 53.332 17.472C53.388 17.456 53.44 17.424 53.488 17.376H53.572V17.496V18.048H50.512V17.556Z"
								fill="white"
							/>
							<path
								d="M40 27L55 27"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M12.808 41.12C12.528 41.12 12.252 41.06 11.98 40.94C11.716 40.82 11.472 40.64 11.248 40.4C11.032 40.16 10.86 39.856 10.732 39.488C10.604 39.12 10.54 38.692 10.54 38.204C10.54 37.7 10.608 37.272 10.744 36.92C10.88 36.56 11.06 36.268 11.284 36.044C11.508 35.812 11.756 35.644 12.028 35.54C12.3 35.428 12.576 35.372 12.856 35.372C13.112 35.372 13.34 35.412 13.54 35.492C13.748 35.572 13.928 35.684 14.08 35.828C14.24 35.964 14.364 36.128 14.452 36.32V33.02H15.244H15.364V33.104C15.316 33.152 15.284 33.204 15.268 33.26C15.26 33.316 15.256 33.412 15.256 33.548L15.268 40.148C15.268 40.292 15.272 40.436 15.28 40.58C15.296 40.716 15.332 40.856 15.388 41H14.536C14.496 40.904 14.468 40.808 14.452 40.712C14.436 40.616 14.424 40.524 14.416 40.436C14.416 40.34 14.416 40.244 14.416 40.148C14.304 40.34 14.168 40.512 14.008 40.664C13.848 40.808 13.668 40.92 13.468 41C13.268 41.08 13.048 41.12 12.808 41.12ZM12.94 40.364C13.204 40.364 13.428 40.312 13.612 40.208C13.796 40.096 13.944 39.944 14.056 39.752C14.168 39.552 14.248 39.324 14.296 39.068C14.352 38.804 14.38 38.524 14.38 38.228C14.38 37.82 14.328 37.456 14.224 37.136C14.12 36.808 13.956 36.552 13.732 36.368C13.508 36.176 13.22 36.08 12.868 36.08C12.628 36.08 12.412 36.128 12.22 36.224C12.036 36.312 11.88 36.444 11.752 36.62C11.632 36.796 11.54 37.008 11.476 37.256C11.412 37.496 11.38 37.768 11.38 38.072C11.38 38.528 11.44 38.928 11.56 39.272C11.68 39.616 11.856 39.884 12.088 40.076C12.32 40.268 12.604 40.364 12.94 40.364ZM16.564 41L18.496 38.216L16.6 35.516H17.548L18.976 37.544L20.344 35.516H21.232L19.456 38.18L21.472 41H20.488L18.976 38.864L17.548 41H16.564Z"
								fill="white"
							/>
							<path
								d="M12.808 22.12C12.528 22.12 12.252 22.06 11.98 21.94C11.716 21.82 11.472 21.64 11.248 21.4C11.032 21.16 10.86 20.856 10.732 20.488C10.604 20.12 10.54 19.692 10.54 19.204C10.54 18.7 10.608 18.272 10.744 17.92C10.88 17.56 11.06 17.268 11.284 17.044C11.508 16.812 11.756 16.644 12.028 16.54C12.3 16.428 12.576 16.372 12.856 16.372C13.112 16.372 13.34 16.412 13.54 16.492C13.748 16.572 13.928 16.684 14.08 16.828C14.24 16.964 14.364 17.128 14.452 17.32V14.02H15.244H15.364V14.104C15.316 14.152 15.284 14.204 15.268 14.26C15.26 14.316 15.256 14.412 15.256 14.548L15.268 21.148C15.268 21.292 15.272 21.436 15.28 21.58C15.296 21.716 15.332 21.856 15.388 22H14.536C14.496 21.904 14.468 21.808 14.452 21.712C14.436 21.616 14.424 21.524 14.416 21.436C14.416 21.34 14.416 21.244 14.416 21.148C14.304 21.34 14.168 21.512 14.008 21.664C13.848 21.808 13.668 21.92 13.468 22C13.268 22.08 13.048 22.12 12.808 22.12ZM12.94 21.364C13.204 21.364 13.428 21.312 13.612 21.208C13.796 21.096 13.944 20.944 14.056 20.752C14.168 20.552 14.248 20.324 14.296 20.068C14.352 19.804 14.38 19.524 14.38 19.228C14.38 18.82 14.328 18.456 14.224 18.136C14.12 17.808 13.956 17.552 13.732 17.368C13.508 17.176 13.22 17.08 12.868 17.08C12.628 17.08 12.412 17.128 12.22 17.224C12.036 17.312 11.88 17.444 11.752 17.62C11.632 17.796 11.54 18.008 11.476 18.256C11.412 18.496 11.38 18.768 11.38 19.072C11.38 19.528 11.44 19.928 11.56 20.272C11.68 20.616 11.856 20.884 12.088 21.076C12.32 21.268 12.604 21.364 12.94 21.364ZM17.524 24.088C17.268 24.088 17.032 24.048 16.816 23.968C16.608 23.888 16.424 23.772 16.264 23.62L16.636 23.032L16.708 22.924L16.78 22.972C16.796 23.036 16.824 23.088 16.864 23.128C16.904 23.176 16.98 23.236 17.092 23.308C17.164 23.332 17.24 23.348 17.32 23.356C17.4 23.372 17.484 23.38 17.572 23.38C17.788 23.38 17.968 23.328 18.112 23.224C18.264 23.12 18.396 22.96 18.508 22.744C18.62 22.528 18.728 22.256 18.832 21.928L19.876 18.7C19.996 18.332 20.112 17.968 20.224 17.608C20.336 17.248 20.412 16.884 20.452 16.516H21.316C21.26 16.884 21.172 17.256 21.052 17.632C20.932 18.008 20.804 18.384 20.668 18.76L19.3 22.624C19.108 23.16 18.86 23.536 18.556 23.752C18.26 23.976 17.916 24.088 17.524 24.088ZM16.552 16.516H17.452L19.228 21.088L18.844 22.156L16.552 16.516Z"
								fill="white"
							/>
							<path
								d="M10 27L26 27"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M30.54 26.332V25.6H35.472V26.332H30.54ZM30.54 28.816V28.084H35.472V28.816H30.54Z"
								fill="white"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1_2">
								<rect width="148" height="60" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</div>
			</QuestionField>
			<form
				onSubmit={(e) => {
					onSubmit(e).then(() => {
						console.log("meow");
					});
				}}
			>
				<button
					type="submit"
					className="bg-zinc-900 p-4 text-center border-2 border-zinc-800 rounded-md hover:opacity-75 active:opacity-25"
				>
					Submit
				</button>
			</form>
			<div className="h-[16rem]"></div>
		</div>
	);
}
