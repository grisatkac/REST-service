import express, {Application, Request, Response, NextFunction} from "express";
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

    constructor() {
        this.app = express();
    };

    public listen() {
        this.app.listen(this.PORT, ()=> console.log(`Server has been started on the ${this.PORT} port`));
    };

    public initializeMiddlewares() {
        this.app.use(express.json());
    };

    public createRoutes() {
        this.app.use('/', (req: Request, res: Response, next: NextFunction) => {
            if (req.originalUrl === '/') {
                res.send('Service is running...');
            };
        });
        this.app.use('/users', UserRoute);
        //this.app.use('/boards');
        //this.app.use('/boards/:boardId/tasks');
    }
}

export default App;
//export {startExpress};
