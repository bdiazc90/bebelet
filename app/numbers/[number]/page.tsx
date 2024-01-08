import Number from "@/components/Number";
import FooterBar from "@/components/FooterBar";

export default function PageNumber({ params }: { params: { number: string } }) {
	return (
		<main className="h-screen flex flex-col items-center justify-between pt-[6vh] pb-[12vh]">
			<h2 className="text-xl lg:text-3xl text-center font-worksans">Bebe Let / Numbers</h2>
			<Number number={params.number} />
			<FooterBar page={"numbers"}/>
		</main>
	);
}
