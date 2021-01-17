import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number){
        this.port = port;
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.connectDB();
    }

    static init(port: any) {
        return new Server(port);
    }

    private async connectDB(){
        await mongoose.connect('mongodb://localhost:27017/rokket-labs-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Conexion a la base de datos exitosa!');
    }

    start(){
        this.app.listen(this.port, "0.0.0.0", () => {
            console.log(`server iniciado en localhost:${this.port}`);
        });
    }
}