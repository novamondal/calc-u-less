import "./globals.css";
import { Inconsolata, Quicksand } from "next/font/google";

const quicksand = Quicksand({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-quicksand",
});

const inconsolata = Inconsolata({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inconsolata",
});

export const metadata = {
	title: "Calculus is Awesome",
	description: "Learning about calculus is the coolest thing ever",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${quicksand.variable} ${inconsolata.variable} font-sans`}
			>
				{children}
			</body>
		</html>
	);
}
