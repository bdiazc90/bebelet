"use client";

import Image from "next/image";

import { all_letters, all_numbers } from "@/lib/data";
import { MouseEvent, useEffect, useState } from "react";

interface ModalElement extends HTMLElement {
	showModal(): void;
}

type Props = {
	page: string;
};

export default function Settings({ page }: Props) {
	const openModal = () => {
		const modalSettings = document.getElementById("modal_settings") as ModalElement;
		modalSettings.showModal();
	};

	const defaultItems = page === "letters" ? all_letters : all_numbers;
    const lsBucket = page === "letters" ? 'bbl.letters' : 'bbl.numbers';
    const lsItems = localStorage.getItem(lsBucket);
    const currentItems : Array<string> = (lsItems) ? JSON.parse(lsItems) : defaultItems;

    const [selectedItems, setSelectedItems] = useState(currentItems);
    const [message, setMessage] = useState("");

    const clickItem = (event: MouseEvent<HTMLElement>) => {
		setMessage("");
		const element = event.currentTarget as HTMLInputElement;
        const existsInSelected = selectedItems.find(sitem => sitem === element.value);
		if (selectedItems.length === 5 && !element.checked) {
			setMessage("Can't have less then 5 items. Will not save.");
			return false;
		}

        if (existsInSelected && !element.checked) {
            // Delete:
            const tempSelectedItems = selectedItems.filter(sitem => sitem !== element.value);
            setSelectedItems((prev) => tempSelectedItems);
        }
        if (!existsInSelected && element.checked) {
            // Add:
            setSelectedItems((prev) => [...selectedItems, element.value as never]);
        }
	};

	const restoreAll = () => {
		setSelectedItems(defaultItems);
	}
    
    useEffect(() => {
        setSelectedItems(currentItems);
    }, [])

    useEffect(() => {
        localStorage.setItem(lsBucket, JSON.stringify(selectedItems));
    }, [selectedItems])

	return (
		<>
			<button onClick={openModal} className="flex justify-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-500 p-2 rounded-xl">
				<div className="block relative w-6 h-6">
					<Image alt="Open modal for settings" src={"/assets/settings_icon.svg"} fill className="hover:invert" />
				</div>
			</button>
			<dialog id="modal_settings" className="modal modal-bottom sm:modal-middle">
				<div className="modal-box text-black">
					<h3 className="font-bold text-lg text-black">Settings for {page}</h3>
					<p className="py-4">Choose all the {page} you want:</p>
					{message && (
						<p className="text-red-500">
							{message}
						</p>
					)}
					<hr />
					<div className="flex flex-wrap gap-4 my-4 justify-center">
						{defaultItems.map((ditem: string) => (
							<div key={ditem}>
                                {currentItems.find(item => ditem === item) ? (
                                    <input onClick={clickItem} type="checkbox" aria-label={ditem} value={ditem} className="btn min-w-12" defaultChecked />
                                ) : (
                                    <input onClick={clickItem} type="checkbox" aria-label={ditem} value={ditem} className="btn min-w-12" />
                                )}
							</div>
						))}
					</div>
					<hr />
					<div className="modal-action">
						<form method="get" action={`/${page}`} className="flex gap-4">
							<button onClick={restoreAll} className="btn">Restore all</button>
							{/* if there is a button in form, it will close the modal */}
							<button className="btn btn-secondary">Save</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
