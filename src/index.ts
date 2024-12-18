import express, { Request, Response } from "express";
import { PORT } from "./utils";
import router from "./route";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
