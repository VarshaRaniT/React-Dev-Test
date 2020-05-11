import axios from 'axios';
export const fetchDepartmentList = (callback: any) => {
  let config = {
    headers: {
      "content-type": "application/json",
    }
  };
  return axios.get("http://localhost:3000/departments", config)
    .then((response: any) => {
      callback(response.data);
    })
    .catch(error => console.log("error"));
};
