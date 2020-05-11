import Axios from "axios";
// import { getHeaderParams, handleApiError, apiPath } from "../../helper";
export const addLanguage = (values: any, dispatch: any, successCallback: any) => {
  //dispatch: any, callback: any
  const employees = {
    name: values.name,
    password: values.password,
    department_id:values.department_id,
    address:values.address
  };
  let config = {
    headers: {
      "content-type": "application/json",
    }
  };

  return Axios.post(
  "localhost:3000/employees",
    JSON.stringify(employees),
    config
  )
    .then(() => {
      successCallback();
    })
    .catch(function(error: any) {
        alert("hello")
    });
};
