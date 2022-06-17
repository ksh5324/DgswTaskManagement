import chalk from "chalk";
import Express from "express";
import cors from "cors";
import mysql from "mysql2";
import authRouter from "./router/auth";
import bodyParser from "body-parser";

const app = Express();
const port = 3080;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(chalk.magenta("project") + " - taskManagement");
  console.log(
    chalk.green("ready") +
      " - started server on 127.0.0.1:3080 url: http://localhost:3080"
  );
});

export const connection = mysql.createConnection({
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
