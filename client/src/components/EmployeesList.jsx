import React from "react";
import { ListGroup, Row, Col } from "reactstrap";

// REDUX
import { connect } from "react-redux";
import { deleteEmployee } from "../redux/actions/employeeActions";
import PropTypes from "prop-types";
import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import SearchEmployee from "./SearchEmployee";

class EmployeesList extends React.Component {
  state = {
    viewEmployee: "",
    search: "",
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleViewDetails = (employee) => {
    this.setState({ viewEmployee: employee });
  };

  handleDelete = (id) => {
    // delete the employee with thi id
    this.props.deleteEmployee(id);
    // unmount deleted card
    this.setState({ viewEmployee: null});
  };

  render() {
    const { employees } = this.props.data;

    const { viewEmployee, search } = this.state;
    /* console.log(viewEmployee); */
    let filteredEmployees = employees;
    // dinamically filter our employees based on the keyword
    if (search !== "") {
      let regexp = new RegExp(search, "i");
      filteredEmployees = employees.filter((employee) => {
        return Object.values(employee).reduce(
          (p, value) => p || regexp.test(value),
          false
        );
      });
    }
    return (
      <>
        <Row className="mt-5">
          <Col xl="4" lg="4" md="6">
            <h2 className="text-white mb-3">Search Employee</h2>
            <SearchEmployee handleSearch={this.handleSearch} />
            <ListGroup>
              {filteredEmployees.map((employee) => (
                <Employee
                  key={employee._id}
                  employee={employee}
                  viewDetails={this.handleViewDetails}
                />
              ))}
            </ListGroup>
          </Col>

          <Col>
            {viewEmployee ? (
            <EmployeeCard
              key={viewEmployee.id}
              employee={viewEmployee}
              handleDelete={this.handleDelete}
            />
              ) : null}
          </Col>
        </Row>
      </>
    );
  }
}

EmployeesList.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.employee,
});

export default connect(mapStateToProps, { deleteEmployee })(EmployeesList);
