import axios from "axios";
import { baseURL } from "./containts";

export default axios.create({ baseURL });
