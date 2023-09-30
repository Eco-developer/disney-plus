import express from "express";
import cors from "cors";
import  { routes } from "../routes/routes";
import { connectDb } from "../db";
import { swaggerConfig } from "../swagger/swaggerConfig";
require('dotenv').config();

export class Server {
    app;
    port = process.env.PORT || '8084';
    apiPath = {
        routes: '/api/v1'
    }

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        swaggerConfig(this.app);
        
    }

    routes() {
        this.app.use( this.apiPath.routes,  routes );
    }

    async dbConnection() {
        connectDb().then(async () => {
            console.log(`database conected`)
        }).catch((err) => {console.log(err)});
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`App running on port -> ${this.port}`)
        });
    }
}