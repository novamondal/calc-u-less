import "./globals.css";
import { Inter, Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
	title: "We love Ms. Hanafi",
	description: "Ms. Hanafi is the best teacher ever",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={quicksand.className}>{children}</body>
		</html>
	);
}
