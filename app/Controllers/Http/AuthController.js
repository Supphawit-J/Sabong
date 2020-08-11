'use strict'

const DB = use("Database")
let arr;

class AuthController {
  async login({ view, request, response }) {
     return view.render("login");
   }

  async loginUser({ view, request, response }) {

    const userlogin = { username, password } = request.body
    // console.log(profile)
    const users = await DB.select("*").from("user").
    where(userlogin);
    arr == users;

    if (arr.lenght==0){
      
    }


    return view.render("login")
    return response.redirect("/login")
  }


  register({ view, }) {
    return view.render("register")
  };

   async registerUser({ request, response }) {
    const { username, email, password }=request.body
     await DB.table("users").insert({username,email,password})
    //  await DB.inser({username,email,password}).into("user")ไดเเหมือนกัน
    return response.redirect("/login")
  }
}
//async= *
//await=yield


module.exports = AuthController;
