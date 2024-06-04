import express from "express";
import { db } from "./config.js";

const router = express.Router();

router.get('/contact',async(req,res)=> {
    try { 
        const contact = await db('contact')
        .select('*')
        res.json(contact)
        return contact

    } catch (e) {
        console.log(`error => ${e}`);
        res.status(404).json({msg:'not found'})
    }
})

export default router;