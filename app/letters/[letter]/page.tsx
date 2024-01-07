import Letter from "@/components/Letter";

import Link from "next/link";
import Image from "next/image";

export default function PageLetter({ params }: { params: { letter: string } }) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-[4vh] lg:p-[8vh]">
			<div className="flex flex-col max-w-5xl w-full items-center justify-center gap-[8vh] lg:gap-[4vh]">
				<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
				<Letter letter={params.letter} />
				<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
					<div className="block relative w-6 h-6">
						<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill />
					</div>
				</Link>
			</div>
		</main>
	);
}
