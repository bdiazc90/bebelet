import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-[6vh] lg:p-[10vh]">
			<div className="flex flex-col max-w-5xl w-full items-center gap-[4vh] lg:gap-[8vh]">
				<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
				<h1 className="text-5xl lg:text-7xl text-center font-extrabold drop-shadow-[0px_0px_10px_#edaeff] dark:drop-shadow-[0px_0px_10px_#5a1599] from-red-700 dark:from-red-300 via-orange-700 dark:via-yellow-300 to-purple-700 dark:to-purple-500 bg-gradient-to-br bg-clip-text text-transparent animate-text">A simple game to learn the letters, numbers and more</h1>
        <Link href={"/letters"} className="btn btn-lg w-[60vw] lg:w-[40vw] border-none animate-button bg-gradient-to-br from-emerald-500 via-sky-700 to-blue-800 text-white text-2xl drop-shadow-[0px_0px_10px_theme(colors.primary)] dark:drop-shadow-[0px_0px_10px_theme(colors.secondary)]">
            Letters
        </Link>
        <Link href={"/numbers"} className="btn btn-lg w-[60vw] lg:w-[40vw] border-none animate-button bg-gradient-to-br from-emerald-500 via-sky-700 to-blue-800 text-white text-2xl drop-shadow-[0px_0px_10px_theme(colors.primary)] dark:drop-shadow-[0px_0px_10px_theme(colors.secondary)]">
            Numbers
        </Link>
			</div>
		</main>
	);
}
