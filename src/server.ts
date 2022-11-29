import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router'
import {protect} from "./modules/auth";


// app.get("/", (req, res) => {
//     console.log("GET /");
// });
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);
export default app;