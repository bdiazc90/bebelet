import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-[6vh] lg:p-[10vh]">
			<div className="flex flex-col z-10 max-w-5xl w-full items-center gap-[4vh] lg:gap-[8vh]">
				<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
				<h1 className="text-5xl lg:text-7xl text-center font-extrabold drop-shadow-[0px_0px_10px_#edaeff] dark:drop-shadow-[0px_0px_10px_#5a1599] from-red-700 dark:from-red-300 via-orange-700 dark:via-yellow-300 to-purple-700 dark:to-purple-500 bg-gradient-to-br bg-clip-text text-transparent animate-text">A simple game to learn the letters, numbers and more</h1>
        <Link href={"/letters"} className="flex items-center text-white bg-gradient-to-br from-blue-600 to-emerald-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-2xl lg:text-4xl px-12 lg:px-32 py-4 text-center">
            Letters
        </Link>
        <Link href={"/numbers"} className="flex items-center text-white bg-gradient-to-br from-blue-600 to-emerald-600 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-2xl lg:text-4xl px-12 lg:px-32 py-4 text-center">
            Numbers
        </Link>
			</div>
		</main>
	);
}
