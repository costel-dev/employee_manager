import React from "react";
import { ListGroupItem, Button, Col, Row } from "reactstrap";

const Employee = ({ employee, viewDetails }) => {
  return (
    <ListGroupItem className="m-1 shadow">
      <Row>
        <Col>
          <span>
            {employee.first_name} {employee.last_name}{" "}
          </span>
        </Col>
        <Col>
          <Button
            className="mr-4"
            color="default"
            size="sm"
            onClick={() => viewDetails(employee)}
          >
            View Employee
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default Employee;
