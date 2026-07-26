import { ArrowRight, Package, TrendingUp, Star, Tag, Zap, Shield } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { Auth } from "../context/Auth";
import { useNavigate } from "react-router";

export default function DashboardHero() {
    let {cartItems,productsData,totalPrice}=useContext(MyStore)
    let navigate =useNavigate()
    let {loggedUser}=useContext(Auth)
  return (
    <div className="w-full bg-[#0a0a0a] text-white p-6 font-sans space-y-4">
      
      {/* Upper Main Hero Card */}
      <div className="relative overflow-hidden w-full bg-[#0d0d0d] border border-zinc-800/80 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Subtle Grid Background Effect */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Left Content Area */}
        <div className="relative z-10 max-w-xl space-y-4">
          {/* Greeting Badge */}
          <div className="text-lime-400 text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase">
            <span>Good Morning</span>
            <span>👋</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Welcome back, <br />
            <span className="text-lime-400">{loggedUser?.name}!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Discover today's picks — hand-curated products across electronics, fashion, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-3 rounded-2xl flex items-center gap-2 text-sm transition-all shadow-lg shadow-lime-400/10">
              <span onClick={()=>{
                navigate("/main/shop")
              }}>Shop Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button onClick={()=>{
                navigate("/main/shop")
              }} className="bg-transparent hover:bg-zinc-900 text-zinc-300 font-medium px-6 py-3 rounded-2xl border border-zinc-800 text-sm transition-colors">
              View All Products
            </button>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
          {/* Products Count Card */}
          <div className="bg-[#141811] border border-lime-500/20 rounded-2xl p-5 w-full sm:w-48 text-center sm:text-left flex flex-col justify-center">
            <span className="text-3xl font-extrabold text-lime-400 tracking-tight">{productsData.length}+</span>
            <span className="text-xs font-medium text-zinc-400 mt-1">Products Available</span>
          </div>

          {/* Delivery Tag Card */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 w-full sm:w-48 text-center sm:text-left flex flex-col justify-center">
            <span className="text-2xl font-bold text-white tracking-tight">Free</span>
            <span className="text-xs font-medium text-zinc-400 mt-1">Delivery on ₹999+</span>
          </div>
        </div>

      </div>

      {/* Bottom Grid Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Cart Items */}
        <div className="bg-[#0d0d0d] border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-lime-950/40 border border-lime-500/20 flex items-center justify-center text-lime-400">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{cartItems.length}</div>
            <div className="text-xs font-medium text-zinc-300">Cart Items</div>
            <div className="text-[11px] text-zinc-500">In your bag</div>
          </div>
        </div>

        {/* Card 2: Cart Value */}
        <div className="bg-[#0d0d0d] border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">${totalPrice()}</div>
            <div className="text-xs font-medium text-zinc-300">Cart Value</div>
            <div className="text-[11px] text-zinc-500">Ready to checkout</div>
          </div>
        </div>

        {/* Card 3: Top Products */}
        <div className="bg-[#0d0d0d] border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-xs font-medium text-zinc-300">Top Products</div>
            <div className="text-[11px] text-zinc-500">Highly rated</div>
          </div>
        </div>

        {/* Card 4: Categories */}
        <div className="bg-[#0d0d0d] border border-zinc-800/80 rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">6</div>
            <div className="text-xs font-medium text-zinc-300">Categories</div>
            <div className="text-[11px] text-zinc-500">To explore</div>
          </div>
        </div>

      </div>

    </div>
  );
}