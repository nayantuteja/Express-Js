const express = require('express')  //require statement is express come to the variable called express(variable can be named any)
const app = express()   // in this line we have run the variable express and all the power of express varible have vome to app

 //middleware sare route se sabe phele chalta and and also uske andar likha code phele execute hota hai
// app.use(function(req,res,next){           //app.use humesha ek function mangta hai
//                                      //in req is the data of user given to server and in res the code is given from server to the user
//        next();   //next is used to send the control to next route or middleware is there is no next the request will be stucked in middleware only

// });  
app.set("view engine","ejs");

app.use(express.static('./public'))  // here when we setup express.static then jitni bhi static file hai voh public folder me define ho jati hai


// app.get('/', function (req, res) {   // using app we have created a get route which is '/' and is route ke andar function ko chalaya hai and responsze send kara hai
//   res.send('Hello World')
// })

// app.get('/Profile', function (req, res) {  //creating another route which is /Profile
//     res.send('Hello From Profile Page')
//   })

   app.get('/Profile/:username', function (req, res) {  // here dynamic routing is being created by putting : 
   res.send(`hello from  ${req.params.username}`)     // here the username is taken from the params, `` is used for dynamic change and here req is writien as the data that we need is given by the user which can be accessed by the req
   })

app.get('/', function (req, res) {  
     res.render("index")    // when you are using render make sure you use file which is inside views folder(the folder we created) and in reder function do not metion .ejs
     })

     app.get('/error', function (req, res,next) {  
       throw Error("something went wrong") 
        })

     app.get('/contact', function (req, res) {  
        res.render("contact", {name:"harshh"})   // when we use render first thing it to define the page from views and in second place we can give data in this jaha bhi contact page pe name likha hoga vaha vaha harsh likha aa jaega if in contact file we have write name like <%= name %>
        })
   
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3000) //this is to give the port