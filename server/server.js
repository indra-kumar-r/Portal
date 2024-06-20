import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/db.js";
import router from "./router/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));

db.then(() => {
  app.use(router);
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
