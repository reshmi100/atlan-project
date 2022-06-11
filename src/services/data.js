// just to show a rough implementation of

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/backend";

export const getData = async () => {
  let response = await axios.get("/load");
  return response.data.dataLoaded; //initial data brought from backend
};

export const addCustomer = async (dataLoaded) => {
  let data = "code=" + dataLoaded.code + "&cust_number=" + dataLoaded.cust_number;
  let response = await axios.get("/add?" + data);
  return response.data.Status; // "added"
};

export const deleteCustomer = async (value) => {
  let data = "";
  if (value.length === 1) data = "sl_no=" + value[0];
  else {
    for (let i = 0; i < value.length - 1; i++) {
      data = data + "sl_no=" + value[i] + "&";
    }
    data += "val=" + value[value.length - 1];
  }

  let response = await axios.get("/delete?" + data);
  return response.data.Status; //["delete"]
};

export const editCustomer = async (val, company) => {
  let data = "sl_no=" + val + "&currency=" + company.currency;
  let response = await axios.get("/edit?" + data);
  return response.data.Status;
};

export const advanceSearch = async (company) => {
  let data = "xyz=" + company.xyz + "&abc" + company.abc + "&abc=" + company.abc + "&year=" + company.year;
  let response = await axios.get("/advanceSearch?" + data);
  return response.data;
};

export const search = async (company) => {
  let data = "id=" + company.id;
  let response = await axios.get("/search?" + data);
  return response.data;
};
