import axios from "axios";

const axiosInstance = axios.create();

export { axiosInstance as client };
