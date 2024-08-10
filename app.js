const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const app = express();
const postRoutes = require("./routes/post")
const {adminRoutes} = require("./routes/admin")

app.use(express.static(path.join(__dirname , "public")))
app.use(bodyParser.urlencoded({ extended : false }))

app.use("/post", (req, res, next) => {
    console.log("Im the first Middleware. which is at the post route");
    next();
})

app.use(postRoutes);
app.use("/admin",adminRoutes);

app.use((req, res, next) => {
    console.log("Im the second Middleware.");
    next();
})

app.use("/admin", (req, res, next) => {
    console.log("Im at the admin");
    next();
    
})


app.listen(9000);