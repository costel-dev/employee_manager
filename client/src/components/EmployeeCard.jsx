
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

const EmployeeCard = ({ employee, handleDelete }) => {

  // calculating total salary using reduce method
  const totalSalary = employee.salary.reduce((prev, curr) => prev + curr, 0);
  //calculating average salary
  const arrayLength = employee.salary.length;
  const avgSalary = totalSalary / arrayLength;

  return (
    <>
      <Card className="card-profile shadow mt-5">
        <CardHeader className="text-center border-0 4">
          <div className="text-center">
            <h1>
              {employee.first_name} {employee.last_name}
            </h1>
            <hr className="my-4" />
          </div>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xl="12" lg="12" md="12" sm="12" xs="12">
              <h2>Email</h2>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-envelope" />
                  </InputGroupText>
                </InputGroupAddon>
                <h3 className="mx-auto mt-1 text-muted">{employee.email}</h3>
              </InputGroup>
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" xs="12">
              <h2 className="mt-5">Address</h2>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-map-marker"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <h3 className="mx-auto mt-1 text-muted">{employee.address}</h3>
              </InputGroup>
            </Col>

            <Col xl="12" lg="12" md="12" sm="12" xs="12">
             <Row>
               <Col>
                <h2 className="mt-5">Salary</h2>
                {employee.salary.map((value, i) => (<ul><li key={i} className="mx-auto mt-1 text-muted">€ {value}</li></ul>))}
               </Col>
               <Col>
               <h2 className="mt-5">Avg Salary</h2>
               € {avgSalary}
               </Col>
               <Col>
               <h2 className="mt-5">Total Salary</h2>
                € {totalSalary}
               </Col>
             </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-between">
            <Button
              className="float-right"
              color="info"
              tag={Link}
              to={{
                pathname: `/employees/update/${employee._id}`,
                state: { employee },
              }}
              size="sm"
            >
              Edit Employee
            </Button>
            <Button
              color="danger"
              onClick={(e) => handleDelete(employee._id, e)}
              size="sm"
            >
              Delete Employee
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default EmployeeCard;
