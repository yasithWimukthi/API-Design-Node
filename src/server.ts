import express from 'express';
import morgan from 'morgan';
import router from './router'


// app.get("/", (req, res) => {
//     console.log("GET /");
// });
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

export default app;