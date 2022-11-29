import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router'


// app.get("/", (req, res) => {
//     console.log("GET /");
// });
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

export default app;