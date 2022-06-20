// initiate express server
const express = require("express");
const app = express();

// put in command line flags
const flags = require("flags");
flags.defineNumber("port", 3000, "Ports for the http servier to listen on");
flags.parse();

// put in env vars
const dotenv = require("dotenv");

// set up port number
const port = flags.get("port") || process.env.PORT || 3000;

// set up server paths and handlers
app.get("/todo", (req, res) => {
  res.send("get todo");
});

app.get("/todos", (req, res) => {
  res.send("get todos");
});

app.post("/todo", (req, res) => {
  res.send("post todo");
});

app.delete("/todo", (req, res) => {
  res.send("delete todo");
});

app.put("/todo", (req, res) => {
  res.send("put todo");
});

app.patch("/todo", (req, res) => {
  res.send("patch todo");
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
