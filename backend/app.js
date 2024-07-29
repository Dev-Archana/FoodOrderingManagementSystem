import express from "express";
import cors from "cors";
import dotenv from "dotenv";


const app = express();
dotenv.config({ path: "./config/config.env" });

/* connect from front end to backend */
app.use(cors({
    origin: [process.env.FRONT_END_URL],
    methods: [POST],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
export default app;