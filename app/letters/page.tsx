import { redirect } from 'next/navigation';

import { all_letters } from '@/lib/data';
import { randomIntFromInterval } from '@/lib/utils';

const letters = all_letters;
const max_qty = letters.length - 1;

export default function PageLetters() {
    const randomIndex = randomIntFromInterval(0, max_qty);
    const newLetter = letters.at(randomIndex)?.toLowerCase();
    redirect(`/letters/${newLetter}`);
}
