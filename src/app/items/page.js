import ProductCard from "@/components/Products/ProductCard";

const Items = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  //   console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-center text-4xl">This is All Items page</h1>
      <div className="grid grid-cols-4 gap-4 w-[90%] mx-auto my-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Items;
