import CardSlider from "@/components/templates/card-slider";
import { getRecommendedPlaces } from "@/services/place/http";

export default async function Recommend() {
  const recommendedPlaces = await getRecommendedPlaces();
  return (
    <div className="mb-5">
      <h1 className="text-xl font-semibold mb-2">Rekomendasi</h1>
      <CardSlider places={recommendedPlaces} />
    </div>
  );
}
