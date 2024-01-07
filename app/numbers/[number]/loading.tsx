import Link from "next/link";
import Image from "next/image";

export default function PageLetter({ params }: { params: { letter: string } }) {
	return (
		<main className="flex min-h-screen bg-gradient-to-t from-slate-100 to-slate-400 dark:from-slate-700 dark:to-slate-600 flex-col items-center justify-between p-[4vh] lg:p-[8vh]">
			<div className="flex flex-col max-w-5xl w-full items-center justify-center gap-[8vh] lg:gap-[4vh]">
				<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
				<div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
					<div className="border-t-transparent border-solid animate-spin rounded-full border-blue-950 dark:border-yellow-50 border-8 h-72 w-72"></div>
				</div>
				<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
					<div className="block relative w-6 h-6">
						<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill />
					</div>
				</Link>
			</div>
		</main>
	);
}
