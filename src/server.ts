import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router'
import {protect} from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";


// app.get("/", (req, res) => {
//     console.log("GET /");
// });
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
    if (err.type === "auth") {
        res.status(401);
        res.json({ message: "nope" });
    }
});
export default app;