import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DEL_EMPLOYEE,
  EMPLOYEES_LOADING,
  UPDATE_SUCCES,
} from "../actions/types";

const initialState = {
  employees: [],
  loading: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case DEL_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload
        ),
      };
    case ADD_EMPLOYEE:
    case UPDATE_SUCCES:
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    case EMPLOYEES_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
