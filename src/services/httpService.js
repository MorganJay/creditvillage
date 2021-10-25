import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL + "/v1";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export const expectedError = (error, statusCode) =>
  error.response && error.response.status === statusCode;

export const apiError = (status, message) => status !== "success";

export const setJwt = (jwt) =>
  (axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`);

const service = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
  expectedError,
  apiError,
};

export default service;
