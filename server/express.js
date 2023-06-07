const express = require("express");
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(cors());
const db = require("./models");

const userdetailsRouter=require('./routes/userdetails')
const test_descriptionRouter=require('./routes/test_description')
const diseases=require('./routes/Diseases')
const Credentials=require('./routes/Credentials')


app.use("/userdetails",userdetailsRouter);
app.use('/diseases',diseases);
app.use('/test_description',test_descriptionRouter);
app.use('/Credentials',Credentials);


db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("server runs");
  });
});
