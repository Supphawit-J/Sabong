'use strict'

const DB = use("Database")
let arr;
let pro;
let bag =[,,,];

    class AuthController {

    



      async login({ view, request, response }) {
        return view.render("login");
      }

      async loginUser({ view, request, response }) {

        const { username, password } = request.body
        // console.log(profile)
        const users = await DB.select("*").from("users").
        where({ username: username, password: password });
        arr = users;

        if (arr.lenght==0){
          return view.render("login")
        }else{
          return view.render("home",{arr})
          return response.redirect("/home")
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




      
      renderHome({ view }) {
        return view.render("home", { arr })
      }
      
      async renderStore({ view }) {
        
        const productList = await DB.select("*").from("products");
        pro = productList;

        if(pro.lenght!=0){
          return view.render("store", { arr, pro ,bag })
        }else{
          return view.render("home",{arr})
        }

        return view.render("store", { arr ,pro})
      }



      async ajaxStore({ request, response }) {
          const {test} = request.body;
          console.log("test");


        return response.redirect("/cart",{test});
      }








      renderProfile({view}) {
        return view.render("profile",{arr})
      }

      renderCart({view}) {
        
        return view.render("cart",{arr,bag})
      }

      renderCheckout({view}) {
        return view.render("checkout",{arr})
      }





       async renderAdmin({view,request,response}) {
        const {nameproduct ,price,quantity,detail}=request.body
        await DB.table("products").insert({nameproduct,price,quantity,detail}) 
        return view.render("/admin",{arr})
      }
      Admin({ view}) {
        return view.render("admin");
      }




      renderContact({view}) {
        return view.render("contact",{arr})
      }

      renderLayout({view}) {
        return view.render("main_layout",{arr})
      }


    }
//async= *
//await=yield


module.exports = AuthController;
