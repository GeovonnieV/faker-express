const faker = require("faker")

const express = require("express");
const app = express()

// User contructor created
class User  {
    constructor() {
        this.firstName = faker.name.firstName
    }
};

const greet = console.log(new User())
// "/api/users/new"
// when this url is inputed we need to spit out a new User
app.get("/api/users/new", (req,res) => {
    res.send(greet)
})

class Company {
    constructor(){

    }
}

// app is on PORT 8000
const server = app.listen(8000, () => {
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
})