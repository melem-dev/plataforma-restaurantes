import ws from "socket.io-client";
import { baseURL } from "./containts";

export default ws(baseURL);
