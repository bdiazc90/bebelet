'use client';

import { redirect } from "next/navigation";

import { all_numbers as defaultNumbers } from "@/lib/data";
import { randomIntFromInterval } from "@/lib/utils";

const lsNumbers = localStorage.getItem("bbl.numbers");
const currentNumbers = lsNumbers ? JSON.parse(lsNumbers) : defaultNumbers;
localStorage.setItem("bbl.numbers", JSON.stringify(currentNumbers));

const max_qty = currentNumbers.length - 1;

export default function PageNumbers() {
	const randomIndex = randomIntFromInterval(0, max_qty);
	const newNumber = currentNumbers.at(randomIndex);
	redirect(`/numbers/${newNumber}`);
}
