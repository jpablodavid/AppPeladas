import axios from "axios";

const apiGoogle = axios.create({
	baseURL: "https://accounts.google.com/o/oauth2/v2/auth",
});

const apiInst = axios.create({
	baseURL: "https://api.instagram.com",
});


export { apiGoogle, apiInst };
