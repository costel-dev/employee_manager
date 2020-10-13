import axios from "axios";
import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DEL_EMPLOYEE,
  EMPLOYEES_LOADING,
  UPDATE_SUCCES,
  UPDATE_FAIL,
} from "./types";

// ### LOAD ###
export const getEmployees = () => (dispatch) => {
  dispatch(setEmployeesLoading());
  axios.get("/api/employees").then((res) =>
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data,
    })
  );
};

// ### ADD ###
export const addEmployee = (employee) => (dispatch) => {
  axios.post("/api/employees", employee).then((res) =>
    dispatch({
      type: ADD_EMPLOYEE,
      payload: res.data.employees,
    })
  );
};

// ### DELETE ###
export const deleteEmployee = (id) => (dispatch) => {
  axios.delete(`/api/employees/${id}`).then((res) =>
    dispatch({
      type: DEL_EMPLOYEE,
      payload: id,
    })
  );
};

// ### UPDATE ###
export const updateEmployee = ({
  // destructuring our inputs 
  first_name,
  last_name,
  email,
  address,
  salary,
  employeeID,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  // create an object and stringify it to send it the back end 
  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    address,
    salary,
  });

  // send updated data to the backend
  axios
    .put(`/api/employees/update/${employeeID}`, body, config)
    .then((res) =>
      dispatch({
        type: UPDATE_SUCCES,
        payload: res.data.employees,
      })
    )
    .catch((err) => {
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

export const setEmployeesLoading = () => (dispatch) => {
  return {
    type: EMPLOYEES_LOADING,
  };
};
