const mongoose = require("mongoose");

const dbconnect = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log("Database connected successfully"))
        .catch((err) => console.log(`Error while connecting to database, ${err}`));
};
module.exports = dbconnect