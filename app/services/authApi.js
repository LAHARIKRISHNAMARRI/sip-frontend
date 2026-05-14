import API from "./api";

export const loginInvestor = async (data) => {
  const response = await API.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const logoutInvestor = async () => {
  const response = await API.post("/auth/logout");
  return response.data;
};