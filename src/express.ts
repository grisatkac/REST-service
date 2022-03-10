import express, {Application, Request, Response, NextFunction} from "express";
import {connect} from "mongoose";
import 'dotenv/config';

import { router as UserRoute } from './routes/user.route';



const app: Application = express();

/*const PORT = process.env.PORT;
function startExpress (): void {
    app.listen(PORT, () => console.log(`Server has been started on the ${PORT} port`));
};

app.use(express.json());*/

class App {
    public app: Application;
    private PORT = process.env.PORT;
    private DB_USER_NAME = process.env.DATABASE_USER_NAME;
    private DB_USER_PASSWORD = process.env.DATABASE_USER_PASSWORD;

    constructor() {
        this.app = express();

        this.initializeMiddlewares();
        this.createRoutes();
        this.connectToDataBase();
    };

    public listen(): void {
        this.app.listen(this.PORT, ()=> console.log(`Server has been started on the ${this.PORT} port`));
    };

    private initializeMiddlewares(): void {
        this.app.use(express.json());
    };

    private createRoutes(): void {
        this.app.use('/', (req: Request, res: Response, next: NextFunction) => {
            if (req.originalUrl === '/') {
                res.send('Service is running...');
            };
        });
        this.app.use('/users', UserRoute);
        //this.app.use('/boards');
        //this.app.use('/boards/:boardId/tasks');
    };

    private async connectToDataBase() {
        try {
            connect(`mongodb+srv://${this.DB_USER_NAME}:${this.DB_USER_PASSWORD}@cluster0.gzbg6.mongodb.net/rest?retryWrites=true&w=majority`,     
            () => console.log('Conneted to the database'));
        } catch (error) {
            throw new Error(`Can\'t connect to database`);
        }
    }
}

export default App;
//export {startExpress};
