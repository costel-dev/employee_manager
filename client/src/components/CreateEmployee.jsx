import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Modal, 
  InputGroup,
} from "reactstrap";

import { connect } from "react-redux";
import { addEmployee } from "../redux/actions/employeeActions";
import { withRouter } from "react-router-dom";

class CreateEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      salary: [],
    }
  }

  state = {
    modal: false,
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    salaryValue: null,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSalary = (e) => {
    this.setState({ salaryValue: e.target.value });
  };

  addSalary = () => {
    // converting from string to number to be able to make ccalculation on it
    let salaryNumber = parseInt(this.state.salaryValue);
    let myArray = [...this.state.salary, salaryNumber];
    this.setState({ salary: myArray });
    this.toggle();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // destructuring form inputs
    const { first_name, last_name, email, address, salary } = this.state;
    // caching input values into an object
    const newEntry = {
      first_name,
      last_name,
      email,
      address,
      salary,
    };
   /*  console.log(newEntry); */
    // Add Employee via addEmployee action
    this.props.addEmployee(newEntry);
    this.props.history.push("/");
  };
  render() {
    return (
      <Row className="justify-content-center">
        <Col xl="6" lg="6" md="6">
        <Card className="mt-5 mb-5 shadow">
          <CardHeader>Create a New Entry</CardHeader>
          <CardBody>
            <Form role="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="first_name">First name</Label>
                <Input
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
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Add a new employee"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Button className="mb-3" onClick={this.toggle}>Add Salary</Button>
                    {/* MODAL */}
                    <Modal
              className="modal-dialog-centered"
              size="sm"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-transparent text-center">
                    Enter Employee Salary
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                        <InputGroup className="input-group-alternative">
                          <Input placeholder="€" type="number" name="salaryValue" id="salaryValue" onChange={this.handleSalary} />
                        </InputGroup>
                      <div className="text-center">
                        <Button
                          className="mt-3"
                          color="default"
                          onClick={this.addSalary}
                        >
                          Add Salary
                        </Button>
                      </div>
              
                  </CardBody>
                </Card>
              </div>
            </Modal>
                  </Col>
                </Row>
                <Row>
                  {this.state.salary
                    ? this.state.salary.map((value, i) => (
                      <Button size="sm" key={i}>{value}</Button>
                    ))
                    : console.log("Not working")}
                </Row>
              </FormGroup>
              <Button type="submit" className="mt-3">
                Save
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  employee: state.employee,
});

export default withRouter(connect(mapStateToProps, { addEmployee })(CreateEmployee));
