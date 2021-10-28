import jwtDecode from "jwt-decode";
import http from "./httpService";

const userEndpoint = "/user";
const tokenKey = "token";

export const register = (user) => {
  return http.post("/register", {
    email: user.email,
    password: user.password,
    confirm_password: user.confirmPassword,
  });
};

export const verifyMail = (email, token) => {
  return http.put(`${userEndpoint}/verify`, {
    email: email,
    token: token,
  });
};

export const resendOTP = (email) =>
  http.put(`${userEndpoint}/resendCode`, {
    email: email,
  });

export const login = async (email, password) =>
  await http.post("/login", { email, password });

export const loginWithJwt = (jwt) => localStorage.setItem(tokenKey, jwt);

export const logout = () => localStorage.removeItem(tokenKey);

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};

export const getJwt = () => localStorage.getItem(tokenKey);

http.setJwt(getJwt());
const currentUser = getCurrentUser();

const service = {
  login,
  loginWithJwt,
  logout,
  currentUser,
  getCurrentUser,
  getJwt,
  register,
  verifyMail,
  resendOTP,
};

export default service;
