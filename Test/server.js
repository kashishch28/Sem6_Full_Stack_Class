const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request Received");
  next();
});

app.use((req, res, next) => {
  const hour = new Date().getHours();
  if (hour >= 22) {
    return res.send("Access Denied");
  }
  next();
});

app.get("/home", (req, res) => {
  res.send("Welcome Home");
});

app.post("/login", (req, res) => {
  res.send("Login Success");
});

app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

const authMiddleware = (req, res, next) => {
  if (req.query.token === "admin") {
    next();
  } else {
    res.send("Unauthorized");
  }
};

app.get("/admin", authMiddleware, (req, res) => {
  res.send("Welcome Admin");
});

app.get("/search", (req, res) => {
  res.send(`Search Query: ${req.query.q}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
