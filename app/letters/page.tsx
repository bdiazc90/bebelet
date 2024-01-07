import { redirect } from 'next/navigation';

function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function PageLetters() {
    const newLetter = letters.at(randomIntFromInterval(0, 25))?.toLowerCase();
    redirect(`/letters/${newLetter}`);
}
