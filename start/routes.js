'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.on('/login').render("login")

Route.get("/login", "AuthController.login");//ย้านไปอยู่ใน AuthController และเรียกใช้มัน

Route.post("/login", "AuthController.loginUser");


Route.get("/register", "AuthController.register");
Route.post("/register", "AuthController.registerUser");

Route.post("/api/register", "AuthController.registerUser");

Route.get("/home", (context) => {
    const { view, request, response } = context;
    return view.render("home")
});

Route.get("/contact", (context) => {
    const { view, request, response } = context;
    return view.render("contact")
});


Route.get("/store", (context) => {
    const { view, request, response } = context;
    return view.render("store")
});


Route.get("/profile", (context) => {
    const { view, request, response } = context;
    return view.render("profile")});
Route.get("/cart", (context) => {
    const { view, request, response } = context;
    return view.render("cart")
});