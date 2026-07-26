import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import { Auth } from "../context/Auth";

const Navbar = () => {
  let {cartItems,setIsCartOpen}=useContext(MyStore)
  let navigate =useNavigate()
  let{loggedUser,setLoggedUser}=useContext(Auth)
  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-md border-b border-zinc-800/50 px-8 py-3.5 tracking-tight">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center bg-lime-400 h-9 w-9 rounded-xl shadow-[0_0_20px_rgba(163,230,53,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(163,230,53,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-black"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Sky<span className="text-lime-400 font-extrabold">Mart</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/40">
          <NavLink
          end
            to={"/main"}
            className={({ isActive }) =>
              `px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isActive
                  ? "text-black bg-lime-400 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/main/shop"}
            className={({isActive})=>`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${isActive ?"text-black bg-lime-400 font-semibold":"text-zinc-400 hover:text-white"}`}
          >
            Shop
          </NavLink>

          <NavLink
            to={"/main/about"}
            className="px-5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all duration-200"
            className={({isActive})=>`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${isActive ?"text-black bg-lime-400 font-semibold":"text-zinc-400 hover:text-white"}`}
          >
            About
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button
          onClick={()=>setIsCartOpen(true)}
            className="relative p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50 transition-all duration-200"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[10px] font-bold text-black ring-2 ring-[#09090b]">
              {cartItems.length}
            </span>
          </button>

          <div className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 cursor-pointer group">
            <div className="flex items-center justify-center font-bold text-xs rounded-full bg-zinc-800 text-lime-400 border border-zinc-700 h-7 w-7 group-hover:bg-lime-400 group-hover:text-black transition-all duration-200">
              {loggedUser?.name?.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors">
              {loggedUser?.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 text-zinc-500 group-hover:text-zinc-300 transition-colors ml-0.5"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>

          <div className="h-5 w-px bg-zinc-800"></div>

          <button onClick={()=>{setLoggedUser(null)}}
            className="p-2 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-950/20 border border-transparent hover:border-red-900/30 transition-all duration-200"
            aria-label="Logout"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;