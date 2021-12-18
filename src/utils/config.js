import axios from "axios"


export const instance = axios.create({
    baseURL : "https://disease.sh/v3/covid-19",
});

