import productsRouter from "@modules/products/routes/Products.routes";
import sessionsRouter from "@modules/users/routes/Sessions.routes";
import usersRouter from "@modules/users/routes/Users.routes";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter)

export default routes;
