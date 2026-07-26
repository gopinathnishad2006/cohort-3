import axios from "axios";
import { Star, ShoppingCart, Truck,Check, ShieldCheck, RotateCcw } from "lucide-react";
import { useEffect,useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";
import { useContext } from "react";


const ProductDetail = () => {

  let {setCartItems,cartItems,addToCart,setIsCartOpen}=useContext(MyStore)
   


  const [singleProductData, setSingleProductData] = useState([])
  let {id} =useParams()
   const isAdded=cartItems.some((item)=>item.id===singleProductData.id)

  const getSingleProduct = async()=>{
    try{
      let res = await axios(`https://dummyjson.com/products/${id}`)
      console.log(res.data);
      setSingleProductData(res.data)
      
    }
    catch(error){
      console.log('error in detail',error);
      
    }
  }
  useEffect(()=>{
    getSingleProduct()
  },[])
    
  return (
    <div className=" text-white  bg-black mt-15 max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8 items-start">
  {/* Image */}
  <div className="bg-gray-100 rounded-xl flex justify-center items-center p-4">
    <img
      src={singleProductData.thumbnail}
      alt={singleProductData.title}
      className="w-72 h-72 object-contain"
    />
  </div>

  {/* Details */}
  <div className="space-y-3">
    <p className="text-lime-400 text-sm font-semibold uppercase">
      {singleProductData.brand}
    </p>

    <h1 className="text-2xl font-bold">
      {singleProductData.title}
    </h1>

    <div className="flex items-center gap-2">
      <Star className="fill-yellow-400 text-yellow-400" size={18} />
      <span>{singleProductData.rating}</span>
      <span className="text-gray-500 text-sm">
        ({singleProductData.reviews?.length} Reviews)
      </span>
    </div>

    <h2 className="text-3xl font-bold text-lime-400">
      ${singleProductData.price}
    </h2>

    <p className="text-gray-600 text-sm leading-6">
      {singleProductData.description}
    </p>

    <div className="grid grid-cols-2 gap-y-2 text-sm">
      <p><b>Category:</b> {singleProductData.category}</p>
      <p><b>Stock:</b> {singleProductData.stock}</p>
      <p><b>SKU:</b> {singleProductData.sku}</p>
      <p><b>Weight:</b> {singleProductData.weight} g</p>
      <p><b>Status:</b> {singleProductData.availabilityStatus}</p>
      <p><b>MOQ:</b> {singleProductData.minimumOrderQuantity}</p>
    </div>

  

    <button 
        disabled={isAdded} 
        onClick={()=>{addToCart(singleProductData),setIsCartOpen(true)}
          } 
        className={`w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-all duration-300 ${
          isAdded
            ? "bg-lime-300 text-black cursor-not-allowed"
            : "bg-lime-400 text-black hover:bg-lime-200"
        }`}>
          {isAdded?<Check/>:<ShoppingCart/>}
          {isAdded?"Added":"Add to Cart"}
        </button>
  </div>
  
  
</div>
  )
};

export default ProductDetail;