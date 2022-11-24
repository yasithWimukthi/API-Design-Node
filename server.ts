import express from 'express';
const app = express();

app.get("/", (req, res) => {
    console.log("GET /");
});

export default app;