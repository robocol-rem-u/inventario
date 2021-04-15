const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dbUser:dbUserPass@cluster0.ar4g6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).
then((db) => console.log("DB is connected")).
catch((err) => console.error(err))
