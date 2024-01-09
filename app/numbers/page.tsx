"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import { all_numbers as defaultNumbers } from "@/lib/data";
import { randomIntFromInterval } from "@/lib/utils";

export default function PageNumbers() {
	useEffect(() => {
		if (window !== undefined && window.localStorage) {
			const lsNumbers = localStorage.getItem("bbl.numbers");
			const currentNumbers = lsNumbers ? JSON.parse(lsNumbers) : defaultNumbers;
			localStorage.setItem("bbl.numbers", JSON.stringify(currentNumbers));
			const max_qty = currentNumbers.length - 1;
			const randomIndex = randomIntFromInterval(0, max_qty);
			const newNumber = currentNumbers.at(randomIndex);
			redirect(`/numbers/${newNumber}`);
		}
	}, []);
}
