const faker = require("faker")

const express = require("express");
const app = express()

// User contructor created
// each user will have a firstname, lastname, phoneNumber, etc,
class User  {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber =  faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};
// const that makes a new User and console.logs it
const showUser = console.log(new User())

class Company {
    constructor(){
        this.companyName = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode()
    }
}
// const that makes a new company
const showCompany = console.log(new Company())

// --------- Routes --------------

// when the "/api/users/new" route is inputed we need to spit out a new User
app.get("/api/users/new", (req,res) => {
    res.send(showUser)
})

// "/api/companies/new" route console.logs the company
app.get("/api/companies/new", (req,res) => {
    res.send(showCompany)
})

// logs a new User and company
const allTogether = () => {
    console.log(new User())
    console.log(new Company())
    console.log("a new user and company is made if you see this message")
}
// 
app.get("/api/user/company", (req,res) => {
    res.send(allTogether())
})


// app is on PORT 8000
const server = app.listen(8000, () => {
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
})