// Express App
const express = require("express");
const app = express();
const session = require("express-session");
const db = require("./models");
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Session secret
app.use(session({
    secret: "anything",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000
    }
}))

// Controllers
const indexController = require("./controllers/indexController");
const authController = require("./controllers/authController");
const podController = require("./controllers/podController");
app.use(indexController);
app.use(authController);
app.use(podController);
 
// Start App
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
    });
});
