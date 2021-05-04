import { apiService } from "./apiService";

export const episodesService = {
  getAllEpisodes(params) {
    return apiService.get("/episodes", { params });
  },

  getEpisode(id) {
    return apiService.get(`/episodes/${id}`);
  },
};
