import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">
        Data Fetching,catching and Revalidating
      </h1>

      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href="/items"
        className="bg-blue-600 text-center text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        See More
      </Link>
    </div>
  );
};

export default HomePage;
