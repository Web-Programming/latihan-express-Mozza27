let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/si5c";

mongoose.connect(dbURI, {
    // useNewUrlParsen: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoD8");
});
mongoose.connection.on("error", (error) => {
    console. log("Connection Error: " + error);
});
mongoose.connection.on("disconnected", () => {
    console. log("Disconnected from MongoDB");
});