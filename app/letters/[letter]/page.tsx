import Letter from "@/components/Letter";
import FooterBar from "@/components/FooterBar";

import { all_letters } from '@/lib/data';

export default function PageLetter({ params }: { params: { letter: string } }) {
	return (
		<main className="h-screen flex flex-col items-center justify-between pt-[6vh] pb-[12vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let / Letters</h2>
			<Letter letter={params.letter} defaultLetters={all_letters} />
			<FooterBar page={"letters"} />
		</main>
	);
}
