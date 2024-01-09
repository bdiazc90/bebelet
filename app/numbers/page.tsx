import { redirect } from 'next/navigation';

import { all_numbers } from '@/lib/data';
import { randomIntFromInterval } from '@/lib/utils';

const numbers = all_numbers;
const max_qty = numbers.length - 1;

export default function PageNumbers() {
    const randomIndex = randomIntFromInterval(0, max_qty);
    const newNumber = numbers.at(randomIndex);
    redirect(`/numbers/${newNumber}`);
}
