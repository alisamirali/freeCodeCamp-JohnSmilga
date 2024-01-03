const express = require("express");
const app = express();
const tasks = require("./routes/tasks.js");

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/api/v1/tasks", tasks);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server Is Running On Port: ${PORT}`);
});
