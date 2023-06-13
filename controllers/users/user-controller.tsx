import express from "express";
var router = express.Router();
import {searchUsers, searchUserById} from "../../services/users/user-service";

router.get('/', async function (req, res, next) {
    console.log('controller users');
    const users = await searchUsers();
    res.send(users);
    next();
});

router.get('/:id', async function (req, res, next) {
    const user= await searchUserById(parseInt(req.params.id));
    res.send(user);
    next();

});

export default router;
