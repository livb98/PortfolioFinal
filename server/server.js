import express from 'express'
import path from 'path'
import cors from "cors"
import dotenv from 'dotenv'
import router from './route.js'
dotenv.config();
const app = express();
// app.use(cors({origin: "http://localhost:5173", credentials: true}));
app.use(cors({origin: ["http://localhost:3001",'https://portfoliofinal-7bli.onrender.com '], credentials: true}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});

app.use('/', router)