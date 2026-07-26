import { ShoppingCart, Check, Star } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product }) => {
  let {setCartItems,cartItems,addToCart,setIsCartOpen}=useContext(MyStore)
  let navigate = useNavigate()
  const isAdded=cartItems.some((item)=>item.id===product.id)
  
  return (
    <div className="w-72 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Product Image */}
      <div onClick={()=>navigate(`/main/detail/${product.id}`)} className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-140 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-2">
        {/* Category */}
        <span className="inline-block bg-lime-400 text-black text-[11px] font-semibold px-2 py-1 rounded-full uppercase">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-base font-semibold text-black leading-5 line-clamp-2 min-h-10">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand: <span className="font-medium text-black">{product.brand}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={16} className="fill-lime-400 text-lime-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">
            ({product.reviews?.length || 0})
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-black">
              ${product.price}
            </p>
            <p className="text-xs text-green-600">
              {product.discountPercentage}% OFF
            </p>
          </div>

          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              product.stock > 0
                ? "bg-lime-100 text-lime-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        
        <button 
        disabled={isAdded} 
        onClick={()=>{addToCart(product),
          setIsCartOpen(true)}
          } 
        className={`w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-all duration-300 ${
          isAdded
            ? "bg-lime-300 text-black cursor-not-allowed"
            : "bg-lime-400 text-black hover:bg-lime-200"
        }`}>
          {isAdded?<Check/>:<ShoppingCart/>}
          {isAdded?"Added":"Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;