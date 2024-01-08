'use client';

import Link from "next/link";
import Image from "next/image";

interface ModalElement extends HTMLElement {
	showModal(): void;
}

type Props = {
	page: string;
}

export default function FooterBar({page}:Props) {

	const openModal = () => {
		const modalSettings = document.getElementById("modal_settings") as ModalElement;
		modalSettings.showModal();
	}

	return (
		<div className="flex flex-row gap-4">
			<Link href="/" className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Link to Home page" src={"/assets/home_icon.svg"} fill className="hover:invert" />
				</div>
			</Link>
			<button onClick={openModal} className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Open modal for settings" src={"/assets/settings_icon.svg"} fill className="hover:invert" />
				</div>
			</button>
			<dialog id="modal_settings" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box text-black">
					<h3 className="font-bold text-lg text-black">Settings for {page}</h3>
					<p className="py-4">Choose all the {page} you want:</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
}
