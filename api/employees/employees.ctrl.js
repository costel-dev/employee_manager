// Employee Model
const Employee = require("../../models/Employee");

const employeesCtrl = {};

// display all the employees
employeesCtrl.loadEmployees = async (req, res) => {
  try {
    const findEmployees = await Employee.find().sort({ register_date: -1 });
    res.json({ employees: findEmployees });
  } catch (error) {
    res.status(404).json({ msgError: "Employees Not Found!" });
  }
};

// create a new employee entry
employeesCtrl.createEmployee = async (req, res) => {
  // destructuring the values from our form inputs
  const { first_name, last_name, email, address, salary } = await req.body;
  try {
    const newEmployee = new Employee({
      first_name,
      last_name,
      email,
      address,
      salary,
    });
    const saveEmployee = await newEmployee.save();
    res.json({
      employees: saveEmployee,
    });
  } catch (error) {
    res.status(400).json({ msgError: "Register New Employee Failed!" });
  }
};

// delete an existing employee
employeesCtrl.deleteEmployee = async (req, res) => {
  const { id } = await req.params;
  try {
    const findEmployee = await Employee.findById(id);
    const deletedEmployee = await findEmployee.remove();
    /* console.log(deletedEmployee); */
    res.json({ msgSuccess: "Employee Succesfully Deleted!" });
  } catch (error) {
    res.status(404).json({ msgError: "Employee Not Found!" });
  }
};

// update an existing employee
employeesCtrl.updateEmployee = async (req, res) => {
  
  const { first_name, last_name, email, address} = await req.body;
  // converting strings into Array using 'split' method
  const salaryArray = req.body.salary.split(",");
  // converting strings value in number values
  const salary = salaryArray.map(Number);
  console.log(salary);
  const { id } = await req.params;
  try {
    const updated = await Employee.findByIdAndUpdate(id, {
      $set: {
        first_name,
        last_name,
        email,
        address,
        salary,
      },
    });
    res.json({
      msgSuccess: "Succesfully Updated!",
      employees: updated,
    });
  } catch (error) {
    res.status(404).json({ msgError: "Employee Not Found!" });
  }
};

module.exports = employeesCtrl;
