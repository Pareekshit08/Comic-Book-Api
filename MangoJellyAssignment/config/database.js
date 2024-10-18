const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/comicBookStore"
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
