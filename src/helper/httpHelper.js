import axios from "axios";
import { env } from "../../next.config";

export const httpAxios = axios.create({
    baseUrl : process.env.BASE_URL,
})