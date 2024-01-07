import { redirect } from 'next/navigation';

function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function PageNumbers() {
    const newNumber = numbers.at(randomIntFromInterval(0, 10));
    redirect(`/numbers/${newNumber}`);
}
