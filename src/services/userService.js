import http from "services/httpService";

export const createNewProfile = (user) => {
  return http.put(`/updateUser`, {
    firstName: user.firstName,
    lastName: user.lastName,
    phoneNumber: user.phoneNumber,
  });
};

export const getUserInfo = () => {
  return http.get("/user");
};

export const isFirstTimeLogin = async () => {
  const { data: gender } = await getUserInfo();
  return !gender;
};

const service = { createNewProfile, getUserInfo, isFirstTimeLogin };

export default service;
