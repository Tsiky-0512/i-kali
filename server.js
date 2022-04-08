const express = require("express");
const cookieSession = require("cookie-session");



const app = express();

// Middleware ------------------------------------------------------------
app.use(express.json());

app.use(
    cookieSession({
      name: "bezkoder-session",
      secret: "COOKIE_SECRET", // should use as secret environment variable
      httpOnly: true,
      sameSite: 'strict'
    })
);

//routes
require("./app/routes/auth.routes")(app); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
