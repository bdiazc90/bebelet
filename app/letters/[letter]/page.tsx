import Letter from "@/components/Letter";
import FooterBar from "@/components/FooterBar";

export default function PageLetter({ params }: { params: { letter: string } }) {
	return (
		<main className="h-screen flex flex-col items-center justify-between py-[8vh] lg:py-[6vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
			<Letter letter={params.letter} />
			<FooterBar />
		</main>
	);
}
