import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.31.135.159:3333'
})