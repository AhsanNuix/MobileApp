import { Departments, SubDepartments ,Category } from "./config";
import axios from "axios";

export default class API {
  async fetchDepartments() {
   return axios.get(Departments).then(({ data }) => {
      return data.data
    })
    .catch((e) => {
      console.error(e);
      
    });
  }
  async fetchSubDepartments(){
    return axios.get(SubDepartments).then(({ data }) => {
      return data.data
    })
    .catch((e) => {
      console.error(e);
      
    });
  }
  async fetchCategories(){
    return axios.get(Category).then(({ data }) => {
      return data.data
    })
    .catch((e) => {
      console.error(e);
      
    });
  }
}
