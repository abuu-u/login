import axios from "axios";

export const createAPI = (onPermissionDenied) => {
  const api = axios.create({
    baseURL: `http://134.209.202.19/api`,
    timeout: 1000 * 5,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};