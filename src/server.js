const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const routes = require("./server/routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride("_method"));

app.use(session({
  name: "session_id",
  secret: "shhhhhhhhh",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
