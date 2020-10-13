import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "reactstrap";

// REDUX
import store from "./redux/store";
import { getEmployees } from "./redux/actions/employeeActions";


import AppNavBar from "./components/AppNavBar";
import EmployeesList from "./components/EmployeesList"
import UpdateEmployee from "./components/UpdateEmployee";
import CreateEmployee from "./components/CreateEmployee";

class App extends React.Component {
  componentDidMount() {
    // load data when app renders
    store.dispatch(getEmployees());
  }

  render() {
    return (
      <Router>
        <div className="app">
          <AppNavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={EmployeesList} />
              <Route path="/create-employee" component={CreateEmployee} />
              <Route
                path="/employees/update/:id"
                render={(props) => <UpdateEmployee {...props} />}
              />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
