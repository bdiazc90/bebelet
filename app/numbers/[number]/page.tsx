import Number from "@/components/Number";
import FooterBar from "@/components/FooterBar";

export default function PageNumber({ params }: { params: { number: string } }) {
	return (
		<main className="h-screen flex flex-col items-center justify-between py-[8vh] lg:py-[6vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let</h2>
			<Number number={params.number} />
			<FooterBar />
		</main>
	);
}
