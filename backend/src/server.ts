import { app } from "./app";
import { env } from "./env";

app.listen({
    port: env.PORT
}).then(data => console.log("Port running", env.PORT))