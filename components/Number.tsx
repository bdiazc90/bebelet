"use client";

import { useState } from "react";

function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

type Props = {
	number: string;
};

export default function Number({ number }: Props) {
	const [tempNumber, setTempNumber] = useState(number);

	const clickSetnumber = () => {
		const newNumber = numbers.at(randomIntFromInterval(0, 9));
		if (newNumber !== undefined) {
			setTempNumber(newNumber);
			window.history.pushState({}, "", '/numbers/' + newNumber);
		}
	};
	
	return (
		<div className="w-full cursor-pointer" onClick={clickSetnumber}>
			<h1 className="text-[50vh]/[0.8] lg:text-[80vh]/[0.8] text-center select-none font-extrabold drop-shadow-[0px_0px_10px_#edaeff] text-blue-950 dark:drop-shadow-[0px_0px_10px_#5a1599] dark:text-yellow-50">{tempNumber}</h1>
		</div>
	);
}
