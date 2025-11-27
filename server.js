import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Received a request at /");
  res.json({message : "Hello, World!"});
});

app.post("/register", (req, res) => {
  // Add user to database, return jwt if successful

  // Bcrypt password before storing
  res.json({data : "IN PROGRESS"})
})

app.post("/login", (req, res) => {
  // Authenticate user, return jwt if successful

  res.json({data : "IN PROGRESS"})
})

app.get("/community", (req, res) => {
  // Get up to 15 community posts from database
  res.json({data : "IN PROGRESS"})
})

app.post("/community", (req, res) => {
  // Check if jwt is valid, return error if not (pass in middleware in param later)

  // Add a new community post to database

  res.json({data : "IN PROGRESS"})
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});