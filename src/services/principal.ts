import api from "./api";

export const findPlace = async (): Promise<any> => {
  const params = { placeId: "ChIJxY3hZHTPyJQRB9vnN9srPIM" };
  const response = await api.get("/profile-business-dev/locations/basic/info", {
    params,
  });

  return response.data.content;
};
