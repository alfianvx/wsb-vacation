import DetailPlace from "@/components/pages/DetailPlace";

export default function Page({ params }: { params: { slug: string } }) {
  return <DetailPlace slug={params.slug} />;
}
