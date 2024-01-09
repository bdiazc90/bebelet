'use client';

import { redirect } from 'next/navigation';

import { all_letters as defaultLetters } from '@/lib/data';
import { randomIntFromInterval } from '@/lib/utils';

const lsLetters = localStorage.getItem("bbl.letters");
const currentLetters = lsLetters ? JSON.parse(lsLetters) : defaultLetters;
localStorage.setItem("bbl.letters", JSON.stringify(currentLetters));

const max_qty = currentLetters.length - 1;

export default function PageLetters() {
    const randomIndex = randomIntFromInterval(0, max_qty);
    const newLetter = currentLetters.at(randomIndex)?.toLowerCase();
    redirect(`/letters/${newLetter}`);
}
