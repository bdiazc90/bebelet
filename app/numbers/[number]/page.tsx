import Number from "@/components/Number";

import Link from "next/link";
import Image from "next/image";

export default function PageNumber({ params }: { params: { number: string } }) {
	return (
		<main className="min-h-screen flex flex-col items-center justify-between py-[4vh] lg:py-[6vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
			<Number number={params.number} />
			<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill className="hover:invert" />
				</div>
			</Link>
		</main>
	);
}
