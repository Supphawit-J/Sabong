
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

Route.get("/home", "AuthController.renderHome");

Route.get("/contact","AuthController.renderContact");

Route.get("/store", "AuthController.renderStore");

Route.get("/profile","AuthController.renderProfile") ;

Route.get("/cart","AuthController.renderCart");

Route.get("/checkout","AuthController.renderCheckout");


Route.post("/admin","AuthController.renderAdmin");
Route.get("/admin","AuthController.Admin");


Route.get("/main_layout","AuthController.renderLayout");
