const express = require("express");
const cookieSession = require("cookie-session");
const cors = require('cors');



const app = express();

// Middleware ------------------------------------------------------------
app.use(cors())
app.use(express.json());

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true,
      sameSite: 'strict'
    })
);

app.get('/',(req,res)=>{
  res.send("hello world");
})

//routes
require("./app/routes/auth.routes")(app); 
require("./app/routes/user.routes")(app); 
require("./app/routes/plat.routes")(app); 
require("./app/routes/commande.routes")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
