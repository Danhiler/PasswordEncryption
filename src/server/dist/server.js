"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const userRouter_1 = require("./userRouter");
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send("Hello World"));
app.use('/users', userRouter_1.userRouter);
// app.use('/users',function (req, res) {
//     res.send('Got a PUT request at /user')
// } );
app.listen(3001, () => console.log('Example app listening on port 3001!'));
//# sourceMappingURL=server.js.map