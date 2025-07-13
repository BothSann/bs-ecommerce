export default function Product({ params }: { params: { productId: string } }) {
  console.log(params);
  return <div>Product {params.productId}</div>;
}
