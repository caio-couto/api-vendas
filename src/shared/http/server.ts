import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(8080, () =>
{
  console.log("Server started on port 8080!");
});
