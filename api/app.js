import express from 'express';
import mysql from "mysql";
import cors from "cors";
const app = express();


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

app.get("/users", (req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})




app.post("/users", (req,res)=>{
    const q  = "INSERT INTO users  (`fullname`,`location`,`profession`,`description`,`resume`,`worktype`,`privilege`) VALUES(?)";
    const values = ["Esned Spahiu","Prishtina","FrontEnd Developer","Programer","linku","remote","admin"];


    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})


app.listen(8800, ()=>{
  
    
    console.log("connected to backend")
})
