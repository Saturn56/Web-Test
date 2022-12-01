import * as express from "express";
import * as dotenv from "dotenv";
import ConfigController from "./Controllers/ConfigControler";
import routes from "./routes";

dotenv.config();

const app = express();

app.use("/api", routes);
app.use("/config.json", ConfigController.config);
app.use("/", express.static("/app/dist/frontend"));
app.use("*", express.static("/app/dist/frontend/index.html"));


let port = 80;
if (process.env.NODE_ENV == "development") {
    port = 3000;
}
app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});