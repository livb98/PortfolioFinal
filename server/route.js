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

router.post('/contact', async (req, res) => {
    const { fname, lname, email, phone } = req.body;
    try {
        const [newContact] = await db('contact')
            .insert({ fname, lname, email, phone })
            .returning('*'); 

        res.status(201).json(newContact);
    } catch (e) {
        console.log(`error => ${e}`);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

export default router;