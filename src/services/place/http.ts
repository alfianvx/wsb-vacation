import { Place } from "@/types/place";
import { http } from "@/lib/http";

async function getPlaces(
  limit: number = 20,
  page: number = 1
): Promise<Place[]> {
  return await http.get(`?p=${page}&l=${limit}`).then((res) => res.data);
}

async function getPlaceById(id: string): Promise<Place> {
  return await http.get(`/${id}`).then((res) => res.data);
}

async function getPlaceByName(name: string): Promise<Place[]> {
  return await http
    .get(`?nama=${name}`)
    .then((res) => res.data)
    .catch(() => []);
}

async function getRecommendedPlaces(): Promise<Place[]> {
  return await http.get("?nama=gunung").then((res) => res.data);
}

export { getPlaces, getPlaceById, getPlaceByName, getRecommendedPlaces };
