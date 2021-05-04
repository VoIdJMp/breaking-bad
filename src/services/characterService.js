import { apiService } from "./apiService";

export const characterService = {
  getAllCharacter(params) {
    return apiService.get("/characters", { params });
  },

  getCharacter(char_id) {
    return apiService.get(`/characters/${char_id}`);
  },

  getAllDeath() {
    return apiService.get("/deaths");
  },

  getDeath(params) {
    return apiService.get("/death", { params });
  },

  getDeathCount(params) {
    return apiService.get("/death-count", { params });
  },

  getQuotes() {
    return apiService.get("/quotes");
  },

  getQuote(params) {
    return apiService.get("/quote", { params });
  },
};
