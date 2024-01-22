"use client";

import { ChangeEvent } from "react";

import { useLanguageStore } from "@/store/zustand";

export default function Toggle() {
	const languageStore = useLanguageStore();

	const changeToggle = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			languageStore.setES();
		} else {
			languageStore.setEN();
		}
	};

	return (
		<div className="flex gap-2 items-center">
			<span className="text-3xl">🇬🇧</span>
			<input type="checkbox" className="toggle [--tglbg:white] bg-orange-400 hover:bg-orange-800 border-orange-800 toggle-md toggle-secondary" onChange={changeToggle} checked={languageStore.language == 'ES'} />
			<span className="text-3xl">🇪🇸</span>
		</div>
	);
}
