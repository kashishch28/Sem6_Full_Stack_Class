# Express Server (Q1–Q8)

## Step 1: Install Dependencies

```bash
npm init -y
npm install express
```

## Complete Solution

```js
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
```

## How to Run

```bash
node server.js
```

## Example Requests

```text
GET  http://localhost:3000/home
POST http://localhost:3000/login
GET  http://localhost:3000/user/101
GET  http://localhost:3000/search?q=express
GET  http://localhost:3000/admin?token=admin
```
