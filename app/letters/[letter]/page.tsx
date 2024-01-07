import Letter from "@/components/Letter";

import Link from "next/link";
import Image from "next/image";

export default function PageLetter({ params }: { params: { letter: string } }) {
	return (
		<main className="min-h-screen flex flex-col items-center justify-between py-[4vh] lg:py-[6vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
			<Letter letter={params.letter} />
			<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill className="hover:invert" />
				</div>
			</Link>
		</main>
	);
}
