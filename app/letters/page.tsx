"use client";

import Link from "next/link";


function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function PageLetters() {

	const random = randomIntFromInterval(0, 25);
	const letter = letters.at(random);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-[4vh] lg:p-[8vh]">
			<div className="flex flex-col z-10 max-w-5xl w-full items-center justify-center gap-[6vh]">
				<h1 suppressHydrationWarning onClick={() => (window.location.href = "/letters")} className="text-[70vh]/[0.8] lg:text-[80vh]/[0.8] text-center select-none font-extrabold drop-shadow-[0px_0px_10px_#edaeff] dark:drop-shadow-[0px_0px_10px_#5a1599] from-blue-900 dark:from-red-100 via-purple-900 dark:via-yellow-100 to-rose-950 dark:to-purple-100 bg-gradient-to-br bg-clip-text text-transparent animate-text">
					{letter}
				</h1>
				<Link href="/" className="cursor-pointer group w-full flex bg-blue-100">
                    <p className="font-bold w-full text-start group-hover:underline">Back</p>
                </Link>
			</div>
		</main>
	);
}
