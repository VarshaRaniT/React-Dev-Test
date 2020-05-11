import axios from 'axios';
export const fetchDataList = (callback: any) => {
  let config = {
    headers: {
      "content-type": "application/json",
    }
  };
  return axios.get("http://localhost:3000/employees", config)
    .then((response: any) => {
      callback(response.data);
    })
    .catch(error => console.log("error"));
};
