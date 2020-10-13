import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const SearchEmployee = ({ handleSearch }) => {
  return (
    <div>
      <Form role="form">
        <FormGroup>
          <Input
            className="form-control-alternative"
            id="input-search"
            placeholder="Search..."
            type="text"
            name="search"
            onChange={handleSearch}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchEmployee;
