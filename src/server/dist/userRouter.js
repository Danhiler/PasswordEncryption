"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./db");
exports.userRouter = express.Router();
const db1 = new db_1.db();
exports.userRouter.get('/', (req, res) => {
    const contacts = db1.getUsers();
    res.json(contacts);
});
exports.userRouter.post('/', (req, res) => {
    const { name, password } = req.body;
    db1.createUser(name, password).then((data) => {
        res.json(data);
    });
});
// // GET /users
// usersRouter.get('/',  (req, res) => {
//     db.getUsers().then((data)=>{
//         res.json(data);
//     });
// });
//
// // POST /users
// usersRouter.post('/',  (req, res) => {
//     db.createUser(req.body).then((data)=>{
//         res.json(data);
//     });
//
// });
//
// // POST /users
// usersRouter.delete('/:id',  (req, res) => {
//     const id =req.params.id;
//     db.deleteUser(id).then((data)=>{
//         res.json(data);
//     })
//
// })
//
// usersRouter.patch('/:id',  (req, res) => {
//
//     const id =req.params.id;
//     db.updateUser(id,req.body).then((data)=>{
//         res.json(data);
//     })
//
// })
// POST /users/7
/*usersRouter.post('/:id', async (req, res) => {
    const users = await db.createUsers();
    res.json(users);
});*/
//# sourceMappingURL=userRouter.js.map