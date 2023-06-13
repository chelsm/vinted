import express from "express";
var router = express.Router();
import {
  searchUsers,
  searchUserById,
  createNewUser,
  modifyUser,
} from "../../services/users/user-service";

router.get("/", async function (req, res, next) {
  const users = await searchUsers();
  res.send(users);
});

router.get("/:id", async function (req, res, next) {
  const user = await searchUserById(parseInt(req.params.id));
  res.send(user);
});

router.post("/", async function (req, res, next) {
  const user = createNewUser(req.body);
  res.json(user);
});

router.put("/:id", async function (req, res, next) {
  const user = modifyUser(parseInt(req.params.id), req.body);
  res.json(user);
});

export default router;
