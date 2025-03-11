const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// initialize Express.js server and save as a variable
// so it can be referred to as `app`
const app = express();

app.use(bodyParser.json());

// allow all origins
app.use(cors());

/**
 * To-do app endpoints
 */

let todos = [
  {
    id: 1,
    title: "Test todo!",
    completed: false,
  },
]; // In-memory storage for todos

// GET endpoint to fetch all todo items
app.get("/todos", (req, res) => {
  res.json(todos);
});
// POST endpoint to create a new todo item
// provide `title` and optionally `completed` in the request body as JSON
app.post("/todos", (req, res) => {
  const todo = {
    id: crypto.randomUUID(),
    title: req.body.title,
    completed: req.body.completed || false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT endpiont to update an existing todo item with the specified `id`
// provide updated `title` and/or `completed` in the request body as JSON
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.title = req.body.title === undefined ? todo.title : req.body.title;
  todo.completed =
    req.body.completed === undefined ? todo.completed : req.body.completed;
  res.json(todo);
});
// DELETE endpoint to remove an existing todo item with the specified `id`
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

/**
 * Wishlist app endpoints
 */
let wishes = [
  {
    id: 1,
    description: "description",
    title: "Test wishes!",
    link: "link",
    category: "",
  },
];

app.get("/wishes", (req, res) => {
  res.json(wishes);
});

app.post("/wishes", (req, res) => {
  const wish = {
    id: crypto.randomUUID(),
    title: req.body.title,
    description: req.body.description,
    link: req.body.link,
    category: req.body.category,
  };
  wishes.push(wish);
  res.status(201).json(wish);
});

app.delete("/wishes/:id", (req, res) => {
  const id = req.params.id;
  const index = wishes.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Wish not found" });
  }
  wishes.splice(index, 1);
  res.status(204).send();
});
let chat = [
  {
    id: 1,
    text: "text",
    title: "NAme",
    side: "side",
    time: "time",
  },
];
app.get("/chat", (req, res) => {
  res.json(chat);
});

app.post("/chat", (req, res) => {
  const message = {
    id: crypto.randomUUID(),
    text: req.body.text,
    title: req.body.title,
    side: req.body.side,
    time: req.body.time,
  };
  chat.push(message);
  res.status(201).json(chat);
});

app.delete("/chat/:id", (req, res) => {
  const id = req.params.id;
  const index = chat.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Chat not found" });
  }
  chat.splice(index, 1);
  res.status(204).send();
});
// run the server on port 3000
// for example the app can run locally at this URL: http://localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
