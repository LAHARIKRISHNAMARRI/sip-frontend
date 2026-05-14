import API from "./api";

export const getFunds = async () => {
  const response = await API.get("/funds");
  return response.data;
};

export const updateFundNAV = async (fundId, nav) => {
  const response = await API.put(
    `/funds/${fundId}/nav`,
    {
      nav,
    }
  );

  return response.data;
};