import Link from "next/link";
import Image from "next/image";

export default function FooterBar() {
	return (
		<div className="flex flex-row gap-4">
			<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill className="hover:invert" />
				</div>
			</Link>
			<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Link to Home page" src={"/assets/settings_icon.svg"} fill className="hover:invert" />
				</div>
			</Link>
		</div>
	);
}
