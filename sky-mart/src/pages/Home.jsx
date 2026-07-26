import React from 'react'
import { Zap, Shield, Tag } from "lucide-react";

import DashboardHero from '../components/DashboardHero'
const features = [
    {
      icon: <Zap className="w-7 h-7 text-lime-400" />,
      title: "Fast Delivery",
      subtitle: "Same-day on select items",
    },
    {
      icon: <Shield className="w-7 h-7 text-blue-500" />,
      title: "Secure Payments",
      subtitle: "100% encrypted checkout",
    },
    {
      icon: <Tag className="w-7 h-7 text-emerald-400" />,
      title: "Best Prices",
      subtitle: "Price-match guarantee",
    },
  ];


const Home = () => {
    
  return (
    <div>
      <DashboardHero/>
      <footer className="bg-[#0b0b0b] text-white">
      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-3xl border border-gray-700 bg-[#111111] px-8 py-8 hover:border-gray-500 transition"
            >
              {item.icon}

              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-lg mt-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Footer */}
      <div className="py-12 text-center">
        <h2 className="text-5xl font-bold text-lime-400">SkyMart</h2>

        <p className="mt-5 text-gray-500 text-lg">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </div>
    </footer>
    </div>   
  )
}

export default Home
