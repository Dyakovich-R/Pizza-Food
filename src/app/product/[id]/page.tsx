export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h2>product{id}</h2>;
}
