import app from './server';
const port = process.env.PORT || 3000
import * as dotenv from "dotenv";
dotenv.config();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})