'use strict'

const DB = use("Database")

class AuthController {
  async login({ view, request, response }) {

    return view.render("login");
  }

  loginUser({ view, request, response }) {

    const { username, password } = request.body
    // console.log(profile)


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
    return response.redirect("/register")
  }
}
//async= *
//await=yield


module.exports = AuthController;
