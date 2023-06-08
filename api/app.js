import express, { response } from "express";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import moment from "moment";
import bcrypt from "bcrypt"; //criptim te passwordit
import bodyParser from "body-parser"; //for session login save
import cookieParser from "cookie-parser"; //for session login save
import session from "express-session"; //for session login save
import jwt from "jsonwebtoken";

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
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true, //ktu lejojm qe cookie me u kon true , lejojm cookie me u enable
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); //kjo vendoset qdoher by defualt per me funsionu.

app.use(
  session({
    key: "userId",
    secret: "labProjekt",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 6, //ne sajtin tone ka me u rujt cookie 6 ore ose 1 dite
    },
  })
);

//middleware for requests

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]; //ktu pe marrim tokenin

  if (!token) {
    res.send("There is no token , plz give it to us");
  } else {
    jwt.verify(token, "jwtUserLabOutwork", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authanticate" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  const userId = req.userId;
  res.json({ auth: true, userId: userId });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  const values = [email];

  db.query(query, values, (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          const id = result[0].id;
          const token = jwt.sign({ id }, "jwtUserLabOutwork", {
            expiresIn: 300, //sa minuta e kemi tokenin
          });
          req.session.user = result;

          res.json({
            auth: true,
            token: token,
            result: result,
          });
        } else {
          res.send({
            auth: false,
            message: "Wrong email/password combination!",
          });
        }
      });
    } else {
      res.json({
        auth: false,
        message: "no user exists",
      });
    }
  });
});

app.post("/apliko", (req, res) => {
  const { emri, email, mesazhi, userId, shpalljaId, numri } = req.body;

  const query =
    "INSERT INTO aplikuesit(`emri_aplikuesi`,`email_aplikuesi`,`mesazhi_aplikuesi`,`user_id`,`shpallja_id`,`numri`) VALUES(?,?,?,?,?,?)";

  const values = [emri, email, mesazhi, userId, shpalljaId, numri];

  db.query(query, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/aplikimet", (req, res) => {
  const { shpalljaId, userId } = req.body;

  const query = "INSERT INTO aplikimet(`shpallja_id`,`user_id`) VALUES(?,?)";

  const values = [shpalljaId, userId];

  db.query(query, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const { fullname, email, personalNumber, password, privilege } = req.body;

  // Generate a salt
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      // Handle error
      return res.json("Error");
    }

    // Hash the password with the generated salt
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) {
        return res.json("Error");
      }

      const query =
        "INSERT INTO users (`fullname`, `email`, `password`, `privilege`,`user_numri_personal`) VALUES (?, ?, ?, ?, ?)";
      const values = [fullname, email, personalNumber, hash, privilege];

      db.query(query, values, (err, data) => {
        if (err) {
          return res.json("Error");
        }
        return res.json(data);
      });
    });
  });
});

//update users
app.put("/update/:id", (req, res) => {
  const query =
    "UPDATE users SET `fullname` = ?, `email` = ?, `password` = ?,`privilege` = ? WHERE ID = ? ";

  const values = [
    req.body.fullname,
    req.body.email,
    req.body.password,
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
    if (err) return res.json(err);
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
    if (err) return res.json(err);
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

app.post("/fshiAplikimet/:userId/:shpalljaId", (req, res) => {
  const userId = req.params.userId;
  const shpalljaId = req.params.shpalljaId;

  console.log(shpalljaId, userId);

  const query = "DELETE FROM aplikimet where user_id = ? and shpallja_id = ?";
  db.query(query, [userId, shpalljaId], (err, data) => {
    if (err) {
      return res.json({ message: err });
    }
    return res.json(data);
  });
});

app.get("/merrAplikimet/:id", (req, res) => {
  const userId = req.params.id;
  const query =
    "SELECT * FROM aplikimet a INNER JOIN shpallje sh ON a.shpallja_id = sh.id WHERE a.user_id = ?";

  db.query(query, [userId], (err, data) => {
    if (err) {
      return res.json({ message: err });
    }
    if (data.length === 0) {
      return res
        .status(404)
        .json({ status: 404, message: "Asnje aplikim nuk u gjend" });
    }
    console.log(data); // Log the retrieved data
    return res.status(200).json({ status: 200, data: data[0] });
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

app.get("/merrUserData/:id", (req, res) => {
  const userId = req.params.id;

  const query = "SELECT * FROM users where id = ?";

  db.query(query, [userId], (err, data) => {
    if (err) {
      return res.status(500).json({ statis: 500, message: "Database Error" });
    }

    if (data.length === 0) {
      return res.json({ message: "Ky user nuk ka asnje te dhene" });
    }

    console.log(data);
    return res.json({ data: data[0] });
  });
});

app.listen(8800, () => {
  console.log("connected to backend");
});
