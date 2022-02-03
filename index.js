const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://admin:<password>@comp3123.wun54.mongodb.net/db_s6_full_stack_dev2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('DB connected')
  })
  .catch(e => {
    console.log(e);
  })

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });
