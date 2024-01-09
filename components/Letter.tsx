"use client";

import { useState } from "react";

import { randomIntFromInterval } from "@/lib/utils";

type Props = {
	letter: string;
	letters: Array<string>;
};

export default function Letter({ letter, letters }: Props) {
	const [tempLetter, setTempLetter] = useState(letter);

	const clickSetLetter = () => {
		const max_qty = letters.length - 1;
		const randomIndex = randomIntFromInterval(0, max_qty);
		const newLetter = letters.at(randomIndex)?.toLowerCase();
		if (newLetter === undefined) return;
		setTempLetter(newLetter);
		window.history.pushState({}, "", "/letters/" + newLetter);
	};

	return (
		<div className="w-full cursor-pointer" onClick={clickSetLetter}>
			<h1 className="text-[50vh]/[0.8] lg:text-[80vh]/[0.8] text-center select-none font-extrabold drop-shadow-[0px_0px_10px_#edaeff] text-blue-950 dark:drop-shadow-[0px_0px_10px_#5a1599] dark:text-yellow-50">{tempLetter.toUpperCase()}</h1>
		</div>
	);
}
