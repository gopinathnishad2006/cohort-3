import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate()
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 px-6 py-20 tracking-tight selection:bg-lime-400 selection:text-black">
      <div className="max-w-6xl mx-auto space-y-24">

        <section className="text-center space-y-6 max-w-3xl mx-auto relative">
          <div className="absolute inset-0 -top-12 bg-lime-400/10 blur-[120px] rounded-full h-40 w-40 mx-auto"></div>
          
          <div className="inline-flex items-center justify-center bg-lime-400 h-12 w-12 rounded-2xl shadow-[0_0_30px_rgba(163,230,53,0.25)] mx-auto mb-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5 text-black"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          
          <h1 className="text-5xl font-extrabold text-white tracking-tighter sm:text-6xl">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-400 to-lime-200">SkyMart</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            SkyMart is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2 transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/60">
            <div className="inline-flex p-2 bg-zinc-800/50 rounded-xl border border-zinc-700/40 text-lime-400 mb-1">
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
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l-7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">20K+</div>
            <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Products</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2 transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/60">
            <div className="inline-flex p-2 bg-zinc-800/50 rounded-xl border border-zinc-700/40 text-lime-400 mb-1">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">50K+</div>
            <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Happy Customers</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2 transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/60">
            <div className="inline-flex p-2 bg-zinc-800/50 rounded-xl border border-zinc-700/40 text-lime-400 mb-1">
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
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">4.9</div>
            <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">Avg. Rating</div>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2 transition-all duration-300 hover:border-zinc-700/60 hover:bg-zinc-900/60">
            <div className="inline-flex p-2 bg-zinc-800/50 rounded-xl border border-zinc-700/40 text-lime-400 mb-1">
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
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="text-3xl font-extrabold text-white tracking-tight">99%</div>
            <div className="text-xs font-medium text-zinc-500 tracking-wide uppercase">On-time Delivery</div>
          </div>
        </section>

        <section className="bg-linear-to-br from-zinc-900/50 to-zinc-950/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 h-48 w-48 bg-lime-400/5 blur-[80px] rounded-full"></div>
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-1.5 h-7 bg-lime-400 rounded-full inline-block"></span>
              Our Story
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              <p>
                SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <em className="text-white not-italic font-semibold underline decoration-lime-400/60">enjoyable</em>?
              </p>
              <p>
                Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
              </p>
              <p>
                We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center tracking-tight">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl items-start hover:border-zinc-700/50 transition-colors">
              <div className="p-2.5 bg-zinc-800/80 border border-zinc-700/50 rounded-xl text-lime-400 shrink-0">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Trust</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Every product is verified for quality and authenticity before listing.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl items-start hover:border-zinc-700/50 transition-colors">
              <div className="p-2.5 bg-zinc-800/80 border border-zinc-700/50 rounded-xl text-lime-400 shrink-0">
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
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Speed</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">We obsess over delivery times so your orders arrive when promised.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center tracking-tight">Meet Our Team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 text-center space-y-3 hover:border-zinc-700/60 transition-colors">
              <div className="h-14 w-14 rounded-full bg-lime-400 text-black font-extrabold text-xl flex items-center justify-center mx-auto shadow-md">A</div>
              <div>
                <h4 className="text-sm font-bold text-white">Aryan Shah</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Founder & CEO</p>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 text-center space-y-3 hover:border-zinc-700/60 transition-colors">
              <div className="h-14 w-14 rounded-full bg-blue-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-md">P</div>
              <div>
                <h4 className="text-sm font-bold text-white">Priya Mehta</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Head of Product</p>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 text-center space-y-3 hover:border-zinc-700/60 transition-colors">
              <div className="h-14 w-14 rounded-full bg-purple-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-md">R</div>
              <div>
                <h4 className="text-sm font-bold text-white">Rohan Verma</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Lead Engineer</p>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 text-center space-y-3 hover:border-zinc-700/60 transition-colors">
              <div className="h-14 w-14 rounded-full bg-pink-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-md">S</div>
              <div>
                <h4 className="text-sm font-bold text-white">Sneha Kapoor</h4>
                <p className="text-xs text-zinc-500 mt-0.5">Design Director</p>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-linear-to-r from-zinc-900/80 via-zinc-900/40 to-zinc-950/80 border border-zinc-800/80 rounded-3xl p-10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 bg-lime-400/5 blur-[100px] rounded-full"></div>
          <div className="relative space-y-3 max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Ready to shop?</h2>
            <p className="text-sm text-zinc-400">Explore thousands of products at unbeatable prices.</p>
          </div>
          <button onClick={()=>navigate("/main/shop")} className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime-400 text-black font-semibold text-sm shadow-[0_4px_20px_rgba(163,230,53,0.15)] hover:bg-lime-500 transition-all active:scale-98 group">
            Browse Products
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-4 w-4 transform transition-transform group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 17"></polyline>
            </svg>
          </button>
        </section>

        <footer className="border-t border-zinc-900 pt-8 text-center space-y-2">
          <div className="text-base font-bold text-lime-400 tracking-tight">SkyMart</div>
          <div className="text-xs text-zinc-600 font-medium">© 2026 SkyMart • Built with React + Redux + TanStack Query</div>
        </footer>

      </div>
    </main>
  )
}

export default About