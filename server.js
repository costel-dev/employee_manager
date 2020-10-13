const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

const employees = require("./api/employees/employees.route");

// Initiliaze express app
const app = express();

//Configuring the Environment Variables
dotenv.config({ path: "./config/config.env" });

//Db connection
connectDB();

// express
app.use(express.urlencoded({ extended: false }));
// bodyparser middleware
app.use(express.json());

// Defining my routes
app.use("/api/employees", employees);

// Serve static assets if in production
if(process.env.NODE_ENV === "production"){
    // Set static folder
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

//Configure the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}...`));
