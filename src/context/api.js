import axios from "axios";

// const apiUrl = "https://baconipsum.com/api/";
const apiUrl = "https://baconipsum.com/api/?type=meat-and-filler&paras=";

export const fetchApi = async (input) => {
	const res = await axios(`${apiUrl}` + input);
	console.log(res.data);
	return res.data;
};
