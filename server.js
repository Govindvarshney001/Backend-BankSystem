require("dotenv").config();

console.log("DEBUG ENV:", process.env.MONGO_URI); // 👈 add this

const app = require("./src/app");
const connectToDB = require("./src/config/db");

const PORT = process.env.PORT || 3000;

connectToDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
