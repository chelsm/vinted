import express from "express";
var router = express.Router();
import {searchUsers, searchUserById, createNewUser} from "../../services/users/user-service";

router.get('/', async function (req, res, next) {
    const users = await searchUsers();
    res.send(users);
});

router.get('/:id', async function (req, res, next) {
    const user= await searchUserById(parseInt(req.params.id));
    res.send(user);
});

router.post('/', async function (req, res, next) {
    // res.json(req.body);
    const user = createNewUser(req.body);
    res.send(user);
});

export default router;
