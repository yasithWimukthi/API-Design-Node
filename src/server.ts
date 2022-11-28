import express from 'express';
const app = express();
import router from './router'

// app.get("/", (req, res) => {
//     console.log("GET /");
// });

app.use('/api', router)

export default app;