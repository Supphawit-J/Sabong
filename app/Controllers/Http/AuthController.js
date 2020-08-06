'use strict'

class AuthController {
login({view,request,response}){
    const name ="Jeng";
    const age = 20;
    const friends = ["Bam","Friend","Fern","x"]
    const address = { 
        postcode: "10101",
        country: "Th",
    };
    return view.render("login",{name,age,friends,address});
  };


  register({view,request,response}){
    return view.render("register")
  };



}

module.exports = AuthController
