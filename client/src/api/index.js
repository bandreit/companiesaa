import axios from "axios";

const instance = axios.create({
  baseURL: "https://guarded-tundra-65894.herokuapp.com/api/"
});

export default instance;
