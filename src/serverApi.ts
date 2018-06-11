import {delay} from "./helpers";
//const baseUrl="https://localhost:3000";

export function getAllContacts(): Promise<any> {
    return fetch("http://localhost:3001/users").then((res)=> res.json())
}

export async function updateContact(contact: Contact) {
    await delay(2500);

    updateUserInServer(contact).then((data)=>{
        console.log(data)
    })

    // throw new Error(`Contact ${contact.id} does not exist`);
}
export function updateUserInServer(user) {
    return fetch("http://localhost:3001/users")
        .then(res => console.log(res.json()));


}

export function createUserInServer() {
    return fetch("http://localhost:3001/users",
        {
        method: 'POST',
            body: JSON.stringify({name:'asd',password:'asd'}),
        headers: {'Content-Type': 'application/json'}})
        .then(res => res.json());
}

export interface Contact {
    id: number;
    name: string;
    password:string;
}
