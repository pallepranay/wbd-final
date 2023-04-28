const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index"); // assuming the server code is in app.js
const should = chai.should();
const expect = require('chai').expect;
const mongoose = require('mongoose')

chai.use(chaiHttp);

describe("Registration API", () => {
  // test for successful user registration
  before(function(done){
    mongoose
    .connect("mongodb+srv://rupendrashata:1020@cluster0.yw31qht.mongodb.net/WBD?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected successfully")
      done()
    })
    
  })
  before(function(done){
    done();
  })
  it("should register a new user", (done) => {
    const user = {
      password: "arpranay",
      name: "Palle Pranay Reddy",
      email: "ppranayreddy5454@gmail.com",
      phone: "9959458697",
      country: "India",
      address: "Hyderabad"
    };
    chai
      .request(app)
      .post("/register")
      .send(user)
      .then(function (err,res) {
        console.log(err.body)
        expect(err).to.have.status(200);
        //res.body.should.have.property("message").eql("user saved");
        done();
      }).catch(function(err) {
          console.log(err)
      })
  });

 // test for invalid user registration
    // it("should not register a new user with missing information", (done) => {
    //   const user = {
    //     password: "arpranay",
    //     name: "Palle Pranay Reddy",
    //     email: "ppranayreddy5454@gmail.com",
    //     phone: "9959458697",
    //     country: "India",
    //     address: "Hyderabad"
    //   };
    //   chai
        // .request(app)
        // .post("/register")
        // .send(user)
        // .end((err, res) => {
        //   res.should.have.status(500);
        //   res.body.should.be.a("object");
        //   res.body.should.have.property("msg").eql("some error incurred");
        //   done();
        // });
    // });
    // afterEach(function (done) {
    //   done();
    // })
});

// npm i mocha
// npm i chai
// npm i chai-http
// npx mocha student.test.js -t 5000000
