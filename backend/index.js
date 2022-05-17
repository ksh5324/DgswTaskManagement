import chalk from "chalk";
import Express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = Express();
const port = 3080;

app.use(cors());

const auth = require("./router/auth");
app.use("/auth", auth);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(chalk.magenta("project") + " - todolist");
  console.log(
    chalk.green("ready") +
      " - started server on 127.0.0.1:3080 url: http://localhost:3080"
  );
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql5324",
  port: 3306,
  database: "task",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
