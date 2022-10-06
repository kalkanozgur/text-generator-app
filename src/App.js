import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selectors from "./components/Selectors";
import TextContent from "./components/TextContent";

import { getTextAsync } from "./context/textSlice";

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.text.isLoading);
	const loremText = useSelector((state) => state.text.text);
	useEffect(() => {
		dispatch(getTextAsync());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="px-4">
			<h1 className="text-5xl text-center pb-4">
				React Lorem text generator app
			</h1>
			<hr className="pt-4" />
			<Selectors />
			{!isLoading ? <TextContent text={loremText} /> : <h1>LOADING...</h1>}
		</div>
	);
}

export default App;
