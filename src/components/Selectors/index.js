import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTextAsync } from "../../context/textSlice";

function Selectors() {
	const dispatch = useDispatch();
	const [paras, setParas] = useState(useSelector((state) => state.text.paras));
	const [parasType, setParasType] = useState(
		useSelector((state) => state.text.parasType)
	);

	useEffect(() => {
		dispatch(getTextAsync({ paras, parasType }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [paras, parasType]);
	return (
		<form className="flex flex-row pb-8 px-4">
			<label htmlFor="paragraphs" className="flex flex-col text-sm pb-1">
				Paragraphs
				<input
					type="number"
					id="paragraphs"
					defaultValue={paras}
					// value={paras}
					onChange={(e) => setParas(e.target.value)}
					className="text-gray-900"
				/>
			</label>
			<label htmlFor="parasType" className="flex flex-col px-4 text-sm ">
				Include HTML
				<select
					id="parasType"
					className="text-gray-900"
					value={parasType}
					onChange={(e) => setParasType(e.target.value)}
				>
					<option value={"html"}>Yes</option>
					<option value={"text"}>No</option>
				</select>
			</label>
		</form>
	);
}

export default Selectors;
