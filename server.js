const app = require("./app");
const mongoose = require("mongoose");
const { URL, PORT = 3000 } = process.env;
mongoose.set("strictQuery", false);

async function startServer() {
  try {
    await mongoose.connect(URL);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
}

startServer();
