import React from "react";
import { Mail, Instagram, Phone, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-slate-800 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">FA</div>
          <div>
            <h1 className="text-xl font-semibold">Focus Auto Customs</h1>
            <p className="text-sm text-slate-500">Starlight headliners • Roofliner restoration • Trim work</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#services" className="text-sm hover:underline">Services</a>
          <a href="#gallery" className="text-sm hover:underline">Gallery</a>
          <a href="#book" className="text-sm hover:underline">Book</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl text-sm">Contact</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl font-extrabold leading-tight">
            Make your car’s ceiling a showpiece.
          </motion.h2>
          <p className="mt-4 text-slate-600">Starlight fibre-optic headliners, expert roofliner restoration and trims. Quick turnaround, premium materials, no nonsense pricing.</p>

          <div className="mt-6 flex gap-4">
            <a href="#book" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-medium">Book a transformation</a>
            <a href="#gallery" className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-2xl">See before & after</a>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-2xl">
          <div className="h-72 rounded-xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 to-indigo-700 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">Starlight Luxe</h3>
              <p className="mt-2 text-sm text-white/80">Custom fibre density, star patterns, optional shooting stars and colour-changing LEDs. Perfect for show cars, restorations and unique interiors.</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/80">From</p>
                <p className="text-2xl font-bold">$650</p>
              </div>
              <div className="text-right text-xs text-white/80">Lead time: <span className="font-medium">1–2 weeks</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Contact</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border bg-white flex items-center gap-3">
            <Phone />
            <div>
              <p className="text-sm font-medium">Call</p>
              <p className="text-xs text-slate-500">(Insert phone)</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border bg-white flex items-center gap-3">
            <Mail />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-xs text-slate-500">focusautocustoms@gmail.com</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl border bg-white flex items-center gap-3">
            <Camera />
            <div>
              <p className="text-sm font-medium">Instagram</p>
              <p className="text-xs text-slate-500">@dosho_custom (replace with yours)</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Focus Auto Customs — Starlight headliners & roofliner restoration. Built for conversion.</p>
      </footer>
    </main>
  );
}
