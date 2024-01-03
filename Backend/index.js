const express = require("express")
const bodyParser = require('body-parser');
const authRoutes = require('./Routes/Router');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://ps1535146:kCIyjHkz6Pn8o5Hx@cluster0.tip3llj.mongodb.net/');
  console.log("Database connected successfully")

}
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the cors middleware
app.use(cors());

// Routes
app.use('/api', authRoutes);

app.listen(8000,'0.0.0.0', () => {
    console.log(`Listening on port 8000`);
  });