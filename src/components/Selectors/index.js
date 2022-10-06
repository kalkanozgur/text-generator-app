import React from "react";

function Selectors() {
	return (
		<form className="flex flex-row pb-8 px-4">
			<label htmlFor="paragraphs" className="flex flex-col text-sm pb-1">
				Paragraphs
				<input
					type="number"
					id="paragraphs"
					defaultValue={2}
					className="text-gray-900"
				/>
			</label>
			<label htmlFor="includehtml" className="flex flex-col px-4 text-sm ">
				Include HTML
				<select id="includehtml" className="text-gray-900">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</label>
		</form>
	);
}

export default Selectors;
