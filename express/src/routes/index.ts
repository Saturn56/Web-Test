import { Router } from "express";

const routes = Router();

//routes.use("/auth", auth);

// For non-existing API Routes respond with 404
routes.use((req, res) => res.status(404).json({ error: "Not Found" }));

export default routes;