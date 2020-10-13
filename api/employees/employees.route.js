const express = require("express");
const router = express.Router();

const employeesCtrl = require("./employees.ctrl");

// @route GET api/employees
// @desc Get all Employees
// @access Public
router.get("/", employeesCtrl.loadEmployees);

// @route POST api/employees
// @desc Create an Employee
// @access Public
router.post("/", employeesCtrl.createEmployee);

// @route DELETE api/employees/:id
// @desc Delete an Employee
// @access Public
router.delete("/:id", employeesCtrl.deleteEmployee);

// @route UPDATE api/employees/:id
// @desc Update an Employee
// @access Public
router.put("/update/:id", employeesCtrl.updateEmployee);

module.exports = router;
