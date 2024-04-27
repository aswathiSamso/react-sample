import axios from "axios";

const API_URL = "https://66238ead3e17a3ac846f861d.mockapi.io/crud";

//axios header setup
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Accept"] = "application/json, text/plain, */*";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

//get employee list from api
export const getEmployeeList = () => {
  return axios.get();
};


export const saveEmployee = (emp)=>{
  return axios.post("",emp);
}

export const getEmployee = (id) => {
  return axios.get("/"+id);
};

export const updateEmployee = ({id, emp})=>{
  return axios.put("/"+id,emp);
}

export const deleteEmployee = (id)=>{
  return axios.delete("/"+id);
}