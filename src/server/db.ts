import * as fs from 'fs'
import * as bcrypt from 'bcrypt'

export class db {
    data: any

    constructor() {
        this.data = this.readFromJson()
    }

    getUsers() {
        return this.data
    }
    readFromJson(){
        const data = fs.readFileSync(__dirname + '/data.json');
        return JSON.parse(data.toString());
    }
    writeToFile(){
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(this.data));
    }

    createUser(name, password) {
        return new Promise((resolve) => {
            const saltRounds = 10;
            const myPlaintextPassword = password;

            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
                    this.data.users.push({name: name, password: hash})

                    this.writeToFile()
                    console.log(this.data)
                    resolve(this.data)
                });
            });

        })



    }
}