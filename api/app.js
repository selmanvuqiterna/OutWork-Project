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

//create users
app.post('/create', (req,res) =>{
  const query = "INSERT INTO users (`fullname`, `email`, `password`, `confirmPassword`,`privilege`)   VALUES(?)";

  const values  = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.confirmPassword,
    req.body.privilege
  ]

  db.query(query, [values], (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data)
  })
})

//update users
app.put('/update/:id', (req,res) =>{
  const query = "UPDATE users SET `fullname` = ?, `email` = ?, `password` = ?, `confirmPassword` = ?, `privilege` = ? WHERE ID = ? ";

  const values  = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.confirmPassword,
    req.body.privilege
  ]
  const id = req.params.id;

  db.query(query, [...values,id], (err,data) =>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


//fshirja e userave
app.delete('/users/:id', (req,res) =>{
  const query = "DELETE FROM users WHERE id=?";
  const id = req.params.id;

  db.query(query, [id], (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data)
  })
})

//shtimi i punetoreve

app.post('/addEmployees', (req,res) =>{
  const query = "INSERT INTO employees (`fullname`, `location`, `profession`, `description`,`worktype`,`resume`)   VALUES(?)";

  const values  = [
    req.body.fullname,
    req.body.location,
    req.body.profession,
    req.body.description,
    req.body.worktype,
    req.body.resume
  ]

  db.query(query, [values], (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data)
  })
})

//update i punetoreve

app.put('/updateEmployees/:id', (req,res) =>{
  const query = "UPDATE employees SET `fullname` = ?, `location` = ?, `profession` = ?, `description` = ?, `worktype` = ?, `resume` = ? WHERE ID = ? ";

  const values  = [
    req.body.fullname,
    req.body.location,
    req.body.profession,
    req.body.description,
    req.body.worktype,
    req.body.resume
  ]
  const id = req.params.id;

  db.query(query, [...values,id], (err,data) =>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


//fshirja e punetorve
app.delete('/employees/:id', (req,res) =>{
  const query = "DELETE FROM employees WHERE id=?";
  const id = req.params.id;

  db.query(query, [id], (err,data) =>{
    if(err) return res.json("Error")
    return res.json(data)
  })
})



//selektimi i te gjithe punetoreve
app.get("/employees", (req,res)=>{
    const q = "SELECT * FROM employees"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//selektimi i te gjithe userave
app.get("/users", (req,res)=>{
  const q = "SELECT * FROM users"
  db.query(q,(err,data)=>{
      if(err) return res.json(err)
      return res.json(data)
  })
})


//Selektimi i puneve
app.get("/jobs",(req,res)=>{
  const q = "SELECT id, job_category, job_location, job_company_name, job_source, jobs_date_expired, DATE_FORMAT(job_date_created, '%y-%m-%d') AS formatted_date FROM jobs"
  db.query(q,(err,data)=>{
    if(err)return res.json(err)
    return res.json(data)
  })
})
  


app.listen(8800, ()=>{
    console.log("connected to backend")
})