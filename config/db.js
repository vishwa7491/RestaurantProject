const mongoose = require("mongoose");

// db connection
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to database: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`DB Error`, error);
  }
};

module.exports = connectdb;
