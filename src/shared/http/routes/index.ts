import customersRouter from "@modules/customers/routes/Customers.routes";
import productsRouter from "@modules/products/routes/Products.routes";
import passwordRouter from "@modules/users/routes/Password.routes";
import profileRouter from "@modules/users/routes/Profile.routes";
import sessionsRouter from "@modules/users/routes/Sessions.routes";
import usersRouter from "@modules/users/routes/Users.routes";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRouter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/password", passwordRouter);
routes.use("/profile", profileRouter);
routes.use("/customers", customersRouter);

export default routes;
