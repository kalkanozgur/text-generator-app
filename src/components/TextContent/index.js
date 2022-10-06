import React from "react";
import { FaRegCopy } from "react-icons/fa";

function TextContent({ text }) {
	const copyToClipBoard = async (copyMe) => {
		try {
			await navigator.clipboard.writeText(copyMe);
		} catch (err) {}
	};
	return (
		<div className="rounded-xl bg-neutral-600 relative">
			<FaRegCopy
				onClick={() => copyToClipBoard(text)}
				className="cursor-pointer absolute  right-2 top-2 neutral w-7 h-7 fill-neutral-800"
			/>

			<div className="container px-5 py-10">{text}</div>
		</div>
	);
}

export default TextContent;
