import start from "./app";
import { createServer } from "http";
import ws from "./rooms";

start()
  .then((app) => {
    // create http server
    const server = createServer(app);

    // create ws server
    ws(server);

    // config http server
    const PORT = process.env.PORT || 3000;

    // setup http server
    server.listen(PORT, () => console.log(`Running at port: ${PORT}`));
  })
  .catch(console.error);
