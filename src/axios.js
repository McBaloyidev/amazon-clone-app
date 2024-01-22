import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/clone-72220/us-central1/api", //The API (Cloud function URL)
});

export default instance;
