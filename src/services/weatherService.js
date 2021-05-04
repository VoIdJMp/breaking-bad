import { watherApiService } from "./apiService";

const city_id = "2352824";

export const weatherService = {
  getWeather(params) {
    return watherApiService.get(
      `/${city_id}/${params.year}/${params.mounth}/${params.day}`
    );
  },
};
