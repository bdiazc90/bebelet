"use client";

import { useState } from "react";

function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

type Props = {
	letter: string;
};

export default function Letter({ letter }: Props) {
	const [tempLetter, setTempLetter] = useState(letter);

	const clickSetLetter = () => {
		const newLetter = letters.at(randomIntFromInterval(0, 25))?.toLowerCase();
		if (newLetter !== undefined) {
			setTempLetter(newLetter);
			window.history.pushState({}, "", '/letters/' + newLetter);
		}
	};

	return (
		<div className="w-full cursor-pointer" onClick={clickSetLetter}>
			<h1 className="text-[50vh]/[0.8] lg:text-[80vh]/[0.8] text-center select-none font-extrabold drop-shadow-[0px_0px_10px_#edaeff] text-blue-950 dark:drop-shadow-[0px_0px_10px_#5a1599] dark:text-yellow-50">{tempLetter.toUpperCase()}</h1>
		</div>
	);
}
