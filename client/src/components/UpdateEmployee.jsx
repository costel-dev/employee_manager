import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Card,
} from "reactstrap";

import { connect } from "react-redux";
import { updateEmployee } from "../redux/actions/employeeActions";
import { withRouter } from "react-router-dom";

class UpdateEmployee extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state.employee;
  }

  state = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    salary: "",
  };

  handleChange = (e) => {
    if ([e.target.value]) {
      this.setState({ [e.target.name]: e.target.value });
    } else this.setState({ [e.target.name]: e.target.defaultValue });
  };

  handleUpdate = (event) => {
    event.preventDefault();
    // caching user.id into a variable and send it to redux
    const employeeID = this.state._id;
    console.log(employeeID);
    // destructuring inputs from our form
    const { first_name, last_name, email, address, salary } = this.state;
    // caching input values into an object
    const updated = {
      first_name,
      last_name,
      email,
      address,
      salary,
      employeeID,
    };
    // Update Employee via update action
    this.props.updateEmployee(updated);
    this.props.history.push("/");
  };

  render() {
    const user = this.state;
    return (
      <Row className="justify-content-center">
        <Col xl="6" lg="6" md="6">
          <Card className="m-3 p-5 shadow">
            <Form role="form" onSubmit={this.handleUpdate}>
              <FormGroup>
                <Label for="first_name">First name</Label>
                <Input
                  defaultValue={user.first_name}
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Add a new employee"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                  defaultValue={user.last_name}
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Add a new employee"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  defaultValue={user.email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Add a new employee"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  defaultValue={user.address}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Add a new employee"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Salary</Label>
                <Row>
                  <Col>
                    <Input
                      defaultValue={user.salary}
                      type="text"
                      name="salary"
                      id="salary"
                      placeholder="€"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Row className="justify-content-between">
                <Button type="submit" className="mt-3">
                  Update
                </Button>
                <Button
                  onClick={() => this.props.history.push("/")}
                  className="mt-3"
                >
                  Cancel
                </Button>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default withRouter(connect(mapStateToProps, { updateEmployee })(UpdateEmployee));
