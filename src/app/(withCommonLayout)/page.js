import ProductCard from "@/components/Products/ProductCard";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products",{
    next:{
      revalidate:30,
    }
  });
  const products = await res.json();
  // console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-4xl text-center">
        Data Fetching,catching and Revalidating
      </h1>

      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto mt-10">
        {products.slice(0,3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>z
    </div>
  );
};

export default HomePage;
