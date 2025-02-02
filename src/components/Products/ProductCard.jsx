const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-4 w-80">
      <img
        src={product.image}
        alt={product.productName}
        width={1500}
        height={800}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {product.productName}
        </h2>
        <p className="text-gray-600 mt-1">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
