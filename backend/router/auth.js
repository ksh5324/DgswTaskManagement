import express from "express";

const login = (req, res) => {
  console.log(req);
  return res.send("sdf");
};

express.Router("/login", login);
