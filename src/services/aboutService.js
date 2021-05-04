import { aboutApiService } from "./apiService";

const api_key = "88e836ce";

export const aboutService = {
  getAbout(params) {
    return aboutApiService.get(`?apikey=${api_key}`, { params });
  },
};
