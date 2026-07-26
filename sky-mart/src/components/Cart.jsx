import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

export default function Cart() {
  let { cartItems, setCartItems,totalPrice,setIsCartOpen } = useContext(MyStore);
  const removeProduct = (id) => {
    let items = cartItems.filter((item) => item.id !== id);
    setCartItems(items);
    localStorage.setItem("cartitems", JSON.stringify(items));
  };

  return (
    <div className="w-100 h-screen bg-[#0f0f0f] border-l border-zinc-800 text-white flex flex-col font-sans select-none overflow-hidden z-999">
      {/* Header */}
      <div className="p-5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-lime-400" />
          <h2 className="text-xl font-bold tracking-tight">Cart</h2>
          <span className="ml-2 bg-lime-950/60 text-lime-400 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-lime-500/20">
            {cartItems.length} items
          </span>
        </div>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
        {cartItems.map((cartsProduct) => {
          return (
            <div className="w-full max-w-95 bg-[#0f0f0f] border border-zinc-800 rounded-2xl p-4 flex gap-4 items-center font-sans select-none">
              {/* Product Image Wrapper */}
              <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shrink-0">
                <img
                  src={cartsProduct.thumbnail || cartsProduct.images?.[0]}
                  alt={cartsProduct.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Product Details & Info */}
              <div className="flex-1 flex flex-col justify-between h-20">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200 tracking-tight">
                    {cartsProduct.title}
                  </h3>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-base font-bold text-lime-400">
                      ${cartsProduct.price}
                    </span>
                    <span className="text-xs text-zinc-600 font-medium">
                      ${cartsProduct.price} each
                    </span>
                  </div>
                </div>

                {/* Action Bottom Controls */}
                <div className="flex items-center justify-between w-full">
                  {/* Quantity Controls Border Wrapper */}
                  <div className="flex items-center gap-3 bg-[#0a0a0a]/40 border border-zinc-800/80 rounded-xl p-1">
                    <button className="w-6 h-6 rounded-lg border border-zinc-800/60 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-semibold text-zinc-100 w-4 text-center">
                      1
                    </span>
                    <button className="w-6 h-6 rounded-lg border border-zinc-800/60 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Delete Icon */}
                  <button
                    onClick={() => removeProduct(cartsProduct.id)}
                    className="text-red-500/80 hover:text-red-400 cursor-pointer transition-colors p-1 mr-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer / Summary */}
      <div className="p-5 border-t border-zinc-800 bg-[#0f0f0f] space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-500">Total</span>
          <span className="text-2xl font-bold tracking-tight text-white">
            $
            {totalPrice()}
          </span>
        </div>

        <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg shadow-lime-500/10">
          <span>Checkout</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            setCartItems([]);
            localStorage.removeItem("cartitems");
          }}
          className="w-full text-center text-xs font-medium text-zinc-600 hover:text-zinc-400 transition-colors pt-1"
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}