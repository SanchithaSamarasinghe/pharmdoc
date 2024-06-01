//export packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
const presRoutes = require("./routes/registration");
const regRoutes = require("./routes/docreg");
app.use(regRoutes);
app.use(presRoutes);

//connecting to DB
const PORT = 3005;
const URL = "mongodb+srv://sanchithasamarasinghe2000:pharmDoc123@cluster1.uxkudru.mongodb.net/pharmDoc?retryWrites=true&w=majority&appName=Cluster1"
mongoose.connect(URL)
    .then(() => {
        console.log("Connected")
})
    .catch((err) => console.log('DB error',err))
app.listen(PORT, () => {
    console.log("app is running on ")
});