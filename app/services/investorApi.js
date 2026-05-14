import API from "./api";

export const getInvestor = async (investorId) => {
  const response = await API.get(`/investors/${investorId}`);
  return response.data;
};

export const getInvestorHoldings = async (investorId) => {
  const response = await API.get(
    `/investors/${investorId}/holdings`
  );

  return response.data;
};

export const getInvestorNetworth = async (investorId) => {
  const response = await API.get(
    `/investors/${investorId}/networth`
  );

  return response.data;
};