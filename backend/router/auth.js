import express from "express";
import { connection } from "../index";

const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  const { id, password } = req.body;
  try {
    connection.query(
      `SELECT pass FROM login WHERE id LIKE "${id}"`,
      (err, rows, fields) => {
        if (err) {
          return res.status(200).json({
            login: false,
          });
        } else {
          console.log(rows);
          if (rows[0]?.pass === password) {
            return res.status(200).json({ login: true });
          }
          return res.status(200).json({ login: false });
        }
      }
    );
  } catch (e) {
    return res.status(500).json({
      messege: "로그인 정보를 불러오지 못했습니다",
    });
  }
});

export default authRouter;
