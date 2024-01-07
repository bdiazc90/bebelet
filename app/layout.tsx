import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const worksans = Work_Sans({ subsets: ["latin"], display: "swap", variable: "--font-worksans" });

export const metadata: Metadata = {
	title: "Bebe Let",
	description: "A simple game to learn the letters",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${worksans.variable}`}>{children}</body>
		</html>
	);
}
