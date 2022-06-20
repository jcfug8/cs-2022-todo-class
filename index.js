// initiate express server
const express = require("express");
const app = express();

app.use(express.json());

// pull in db
const persist = require("./persist");

// put in command line flags
const flags = require("flags");
flags.defineNumber("port", 3000, "Ports for the http servier to listen on");
flags.parse();

// put in env vars
const dotenv = require("dotenv");

// set up port number
const port = flags.get("port") || process.env.PORT || 3000;

// set up server paths and handlers
app.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const todo = persist.getTodo(id);
  res.json(todo);
});

app.get("/todos", (req, res) => {
  res.json(persist.getTodos());
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  const todo = persist.addTodo(req.body);
  res.json(todo);
});

app.delete("/todo", (req, res) => {
  const id = req.body.id;
  const todo = persist.deleteTodo(id);
  res.json(todo);
});

app.put("/todo", (req, res) => {
  const id = req.body.id;
  const todo = persist.setTodo(id, req.body);
  res.json(todo);
});

app.patch("/todo", (req, res) => {
  const id = req.body.id;
  const todo = persist.patchTodo(id, req.body);
  res.json(todo);
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
