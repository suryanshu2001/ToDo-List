import express from "express";
import {apiRoute,apiProtected} from "./router/api.js";
import authMiddleware from "./middleware/auth.js";
import cors from "cors";


const app= express();
const port=8000;

app.use(cors());
app.use(express.json());
app.use('/api/',apiRoute);
app.use('/api/',apiProtected);
app.listen(port,()=>console.log(`Server is running 0n port ${port}`));