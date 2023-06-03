import "./globals.css";
import { Inter, Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

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
			<body className={quicksand.className}>{children}</body>
		</html>
	);
}
