import express, { Application } from "express";
import cors from "cors";
import homeRoute from "./routes/homeRoute";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(homeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});
