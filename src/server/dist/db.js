"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const bcrypt = require("bcrypt");
class db {
    constructor() {
        this.data = this.readFromJson();
    }
    getUsers() {
        return this.data;
    }
    readFromJson() {
        const data = fs.readFileSync(__dirname + '/data.json');
        return JSON.parse(data.toString());
    }
    writeToFile() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(this.data));
    }
    createUser(name, password) {
        return new Promise((resolve) => {
            const saltRounds = 10;
            const myPlaintextPassword = password;
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
                    this.data.users.push({ name: name, password: hash });
                    this.writeToFile();
                    console.log(this.data);
                    resolve(this.data);
                });
            });
        });
    }
}
exports.db = db;
//# sourceMappingURL=db.js.map