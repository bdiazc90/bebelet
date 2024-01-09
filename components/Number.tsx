"use client";

import { useState } from "react";

import { randomIntFromInterval } from "@/lib/utils";

type Props = {
	number: string;
	numbers: Array<string>;
};

export default function Number({ number, numbers }: Props) {
	const [tempNumber, setTempNumber] = useState(number);

	const clickSetnumber = () => {
		const max_qty = numbers.length - 1;
		const randomIndex = randomIntFromInterval(0, max_qty);
		const newNumber = numbers.at(randomIndex);
		if (newNumber === undefined) return;
		setTempNumber(newNumber);
		window.history.pushState({}, "", "/numbers/" + newNumber);
	};

	return (
		<div className="w-full cursor-pointer" onClick={clickSetnumber}>
			<h1 className="text-[50vh]/[0.8] lg:text-[80vh]/[0.8] text-center select-none font-extrabold drop-shadow-[0px_0px_10px_#edaeff] text-blue-950 dark:drop-shadow-[0px_0px_10px_#5a1599] dark:text-yellow-50">{tempNumber}</h1>
		</div>
	);
}
