import React, { useContext, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  let { productsData,setProductsData } = useContext(MyStore);
  const [searchText, setSearchText] = useState("");
  const getAllProducts = async () => {
    try {
      const res = await axios("https://dummyjson.com/products");
      console.log(res.data.products);
      
      setProductsData(res.data.products);
      localStorage.setItem("products",JSON.stringify(res.data.products))
    } catch (error) {
      console.log("Error in dummyjson ", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return  <div className="bg-black">
    <div className="w-full bg-[#0a0a0a] text-white p-8 font-sans">
      {/* Title and Product Count */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
          All Products
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
         {filteredProducts.length} products found
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div className="flex flex-col md:flex-row items-center gap-3 p-3 bg-transparent border border-zinc-800 rounded-2xl">
        
        {/* Search Input Box */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-xl pl-11 pr-4 py-2.5 text-sm text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
          />
        </div>

        {/* Dropdowns Container */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* All Categories Dropdown */}
          <div className="relative flex-1 md:flex-initial">
            <select className="w-full md:w-auto appearance-none bg-zinc-900/40 border border-zinc-800/60 rounded-xl pl-4 pr-10 py-2.5 text-sm text-zinc-300 font-medium focus:outline-none focus:border-zinc-700 transition-colors cursor-pointer">
              <option>All Categories</option>
              <option>Beauty</option>
              <option>Fragrances</option>
              <option>Furniture</option>
              <option>Groceries</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
          </div>

          {/* Featured Dropdown */}
          <div className="relative flex-1 md:flex-initial">
            <select className="w-full md:w-auto appearance-none bg-zinc-900/40 border border-zinc-800/60 rounded-xl pl-4 pr-10 py-2.5 text-sm text-zinc-300 font-medium focus:outline-none focus:border-zinc-700 transition-colors cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
   <div className="grid grid-cols-4 gap-5 p-5 bg-black">
    {
        filteredProducts.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
        })
    }
    </div>
  </div>;
};

export default Shop;