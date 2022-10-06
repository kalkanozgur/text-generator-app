import axios from "axios";

// const apiUrl = "https://baconipsum.com/api/";
const apiUrl = "https://baconipsum.com/api/?type=meat-and-filler";

export const fetchApi = async (paras, parasType) => {
	// console.log(paras, parasType);
	const res = await axios(`${apiUrl}&paras=${paras}&format=${parasType}`);
	// console.log(res.data);
	return res.data;
};
