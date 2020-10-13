const mongoose = require("mongoose");

//Create your Employee schema
const EmployeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  salary: {
    type: Array,
    default: Number,
  },

  register_date: {
    type: Date,
    default: Date.now,
  },
});

// child Schema
/* const addressSchema = new mongoose.Schema({
  type: String,
  street: {
    type: String,
  },
  zip: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
}); */

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
