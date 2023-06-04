import express from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import moment from "moment";

const app = express();
app.use("/uploads", express.static("./uploads"));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "outwork",
});

app.use(express.json());
app.use(cors());

//insertimi i nje useri prej backend ne databaz
app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO users (fullname, email, password, confirmPassword)VALUES ('Filan Fisteku', 'filan@gmail.com','filan123','filan123')";

  db.query(sqlInsert, (err, result) => {
    console.log("error", err);
    console.log("result", result);
    res.json("hello this is backend");
  });
});

//create users
app.post("/create", (req, res) => {
  const query =
    "INSERT INTO users (`fullname`, `email`, `password`, `confirmPassword`,`privilege`)   VALUES(?)";

  const values = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.confirmPassword,
    req.body.privilege,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//login user
app.post("/login", (req, res) => {
  const query =
    "Select email,password from users where email=? and password=? ";
  const values = [req.body.email, req.body.password];

  db.query(query, values, (err, data) => {
    if (err) {
      res.send({ err: err });
    }

    if (data.length > 0) {
      res.send("Login Successfully");
      console.log(data);
    } else {
      res.send({ message: "Wrong email/password combination!" });
    }
  });
});

//update users
app.put("/update/:id", (req, res) => {
  const query =
    "UPDATE users SET `fullname` = ?, `email` = ?, `password` = ?, `confirmPassword` = ?, `privilege` = ? WHERE ID = ? ";

  const values = [
    req.body.fullname,
    req.body.email,
    req.body.password,
    req.body.confirmPassword,
    req.body.privilege,
  ];
  const id = req.params.id;

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//fshirja e userave
app.delete("/users/:id", (req, res) => {
  const query = "DELETE FROM users WHERE id=?";
  const id = req.params.id;

  db.query(query, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//shtimi i punetoreve

app.post("/addEmployees", (req, res) => {
  const query =
    "INSERT INTO employees (`fullname`, `location`, `profession`, `description`,`worktype`,`resume`)   VALUES(?)";

  const values = [
    req.body.fullname,
    req.body.location,
    req.body.profession,
    req.body.description,
    req.body.worktype,
    req.body.resume,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//update i punetoreve

app.put("/updateEmployees/:id", (req, res) => {
  const query =
    "UPDATE employees SET `fullname` = ?, `location` = ?, `profession` = ?, `description` = ?, `worktype` = ?, `resume` = ? WHERE ID = ? ";

  const values = [
    req.body.fullname,
    req.body.location,
    req.body.profession,
    req.body.description,
    req.body.worktype,
    req.body.resume,
  ];
  const id = req.params.id;

  db.query(query, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//fshirja e punetorve
app.delete("/employees/:id", (req, res) => {
  const query = "DELETE FROM employees WHERE id=?";
  const id = req.params.id;

  db.query(query, [id], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//selektimi i te gjithe punetoreve
app.get("/employees", (req, res) => {
  const q = "SELECT * FROM employees";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//selektimi i te gjithe userave
app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//Selektimi i puneve
app.get("/jobs", (req, res) => {
  const q = "SELECT * FROM shpallje";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//img storage konfigurimi
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

//check nese eshte foto apo qkadoqofte
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only image files are allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).single("photo"); // Use the same field name as in your frontend form

// Define the route handler
app.post("/krijoPune", (req, res) => {
  // Call the multer middleware to handle file upload
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A multer error occurred
      return res.status(422).json({ status: 422, message: err.message });
    } else if (err) {
      // An unknown error occurred
      return res
        .status(500)
        .json({ status: 500, message: "Internal Server Error" });
    }

    // File upload is successful, continue processing the request
    const {
      titulli,
      emriKompanise,
      kategoria,
      lloji,
      rroga,
      email,
      shteti,
      telefoni,
      pershkrimi,
    } = req.body;
    const logoKompanise = req.file;

    let dataSkadimit = req.body.dataSkadimit;

    console.log("Type of dataSkadimit:", typeof dataSkadimit);
    console.log("Value of dataSkadimit:", dataSkadimit);
    console.log("Value of dataSkadimit:", req.body);

    if (moment(dataSkadimit, "YYYY-MM-DD", true).isValid()) {
      dataSkadimit = moment(dataSkadimit, "YYYY-MM-DD").format("YYYY-MM-DD");
    } else {
      return res
        .status(422)
        .json({ status: 422, message: "Invalid date format" });
    }

    if (
      !titulli ||
      !emriKompanise ||
      !kategoria ||
      !lloji ||
      !dataSkadimit ||
      !rroga ||
      !email ||
      !telefoni ||
      !logoKompanise ||
      !shteti ||
      !pershkrimi
    ) {
      return res
        .status(422)
        .json({ status: 422, message: "Fill in all the details" });
    }

    try {
      const query =
        "INSERT INTO shpallje (`shpallje_titulli`, `shpallje_emri_kompanisë`, `shpallje_kategoria`, `shpallje_lloji`, `shpallje_data_skadimit`, `shpallje_rroga`, `shpallje_email`, `shpallje_shteti`, `shpallje_telefoni`, `shpallje_logo_kompanise`,`shpallje_pershkrimi`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      const values = [
        titulli,
        emriKompanise,
        kategoria,
        lloji,
        dataSkadimit,
        rroga,
        email,
        shteti,
        telefoni,
        logoKompanise.filename,
        pershkrimi,
      ];

      db.query(query, values, (err, data) => {
        if (err) {
          return res
            .status(500)
            .json({ status: 500, message: "Database Error" });
        }

        // Insert successful
        return res
          .status(200)
          .json({ status: 200, message: "Job created successfully" });
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: 500, message: "Internal Server Error" });
    }
  });
});

app.get("/job/:id", (req, res) => {
  const jobId = req.params.id;
  const query = "SELECT * FROM shpallje WHERE id = ?";
  db.query(query, [jobId], (err, data) => {
    if (err) {
      return res.status(500).json({ status: 500, message: "Database Error" });
    }
    if (data.length === 0) {
      return res.status(404).json({ status: 404, message: "Job not found" });
    }

    console.log(data); // Log the retrieved data
    return res.status(200).json({ status: 200, data: data[0] });
  });
});





app.listen(8800, () => {
  console.log("connected to backend");
});
