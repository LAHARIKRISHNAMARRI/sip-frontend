import API from "./api";

export const createSIP = async (data) => {
  const response = await API.post("/sips", data);
  return response.data;
};

export const getSIPById = async (sipId) => {
  const response = await API.get(`/sips/${sipId}`);
  return response.data;
};

export const processSIP = async (sipId) => {
  const response = await API.post(
    `/sips/${sipId}/process`
  );

  return response.data;
};

export const getSIPTransactions = async (sipId) => {
  const response = await API.get(
    `/sips/${sipId}/transactions`
  );

  return response.data;
};