import productsRouter from "@modules/products/routes/Products.routes";
import usersRouter from "@modules/users/routes/Users.routes";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/users", usersRouter)

export default routes;
