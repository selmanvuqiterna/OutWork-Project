import express from 'express';
import mysql from "mysql";
import cors from "cors";
const app = express();

app.use(express.json());



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"outwork"
})

app.use(express.json());
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is backend")
})

app.get("/employees", (req,res)=>{
    const q = "SELECT * FROM employees"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})







app.listen(8800, ()=>{
    console.log("connected to backend")
})