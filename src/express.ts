import express, {Application} from "express";
import 'dotenv/config';

const app: Application = express();

const PORT = process.env.PORT;

app.use(express.json());

function startExpress (): void {
    app.listen(PORT, () => console.log(`Server has been started on the ${PORT} port`));
};

export {startExpress};
