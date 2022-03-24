const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const app = express();
const allowedOrigins = [
    'capacitor://localhost',
    'ionic://localhost',
    'http://localhost',
    'http://localhost:8080',
    'https://localhost:8100'
];
var corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || origin) {
            callback(null, true);
        }
    }
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
// simple route 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bleDor application." });
});
require("./routes/product.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});