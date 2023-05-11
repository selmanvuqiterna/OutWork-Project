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


//insertimi i nje useri prej backend ne databaz
app.get("/", (req,res)=>{
  const sqlInsert = "INSERT INTO users (fullname, email, password, confirmPassword)VALUES ('Filan Fisteku', 'filan@gmail.com','filan123','filan123')";

  db.query(sqlInsert, (err, result)=>{
    console.log('error', err);
    console.log('result', result);
    res.json("hello this is backend")
  })
    
})


app.post('/create', (req,res) =>{
  const query = "INSERT INTO users (`fullname`, `email`, `password`, `confirmPassword`)   VALUES(?)";

  const values  = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.confirmPassword
  ]

  db.query(query, [values], (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data)
  })
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