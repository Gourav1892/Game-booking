'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden flex items-center justify-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Tech Badge */}
            <div className="inline-flex items-center gap-3 bg-[#0F1219]/80 backdrop-blur-sm px-6 py-2 border border-blue-500/20 clip-chamfer mb-8">
              <span className="w-2 h-2 bg-green-500 rotate-45 animate-pulse"></span>
              <span className="text-xs font-mono tracking-[0.2em] text-blue-300 uppercase">System Online // Premium Gaming Lounge</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white tracking-tight drop-shadow-2xl">
                ENTER THE
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-glow-blue">
                PLAYBOX
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-200/60 mb-12 max-w-2xl mx-auto font-mono leading-relaxed">
              &gt; ACCESS_LEVEL: GRANTED<br />
              &gt; High-Performance Gaming PCs & Next-Gen Consoles available for booking. Reserve your station now.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 items-center">
              <Link href="/book">
                <Button size="lg">
                  Book A Station
                </Button>
              </Link>
              <Link href="/games">
                <Button size="lg" variant="outline">
                  View Games List
                </Button>
              </Link>
            </div>

            {/* HUD Stats - Single Store Hardware */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-blue-500/10 pt-10">
              <div className="group">
                <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-purple-400 transition-colors">20+</div>
                <div className="text-blue-400/50 text-[10px] uppercase tracking-[0.2em]">RTX 4090 PCs</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-cyan-400 transition-colors">10+</div>
                <div className="text-blue-400/50 text-[10px] uppercase tracking-[0.2em]">PS5 Consoles</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-white mb-2 font-mono group-hover:text-green-400 transition-colors">50+</div>
                <div className="text-blue-400/50 text-[10px] uppercase tracking-[0.2em]">AAA Titles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Protocol Sequence */}
      <section id="how-it-works" className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-4">
              booking_sequence.exe
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works</h2>
            <p className="text-blue-200/60 max-w-2xl mx-auto">Reserve your rigorous gaming session in three steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🖥️', title: 'SELECT DEVICE', desc: 'Choose between high-end PC or Console stations' },
              { icon: '🎮', title: 'PICK GAME', desc: 'Select from our library of pre-installed titles' },
              { icon: '⏰', title: 'BOOK SLOT', desc: 'Secure your hourly timeslot instantly' }
            ].map((step, i) => (
              <div key={i} className="bg-[#0B101B] border border-white/5 p-8 relative group overflow-hidden hover:border-blue-500/30 transition-colors duration-300 rounded-xl">
                {/* Large Background Number */}
                <div className="absolute top-4 right-6 text-8xl font-black text-[#131B2C] select-none group-hover:text-blue-900/20 transition-colors duration-300">
                  0{i + 1}
                </div>

                {/* Icon Container */}
                <div className="relative w-14 h-14 bg-[#131B2C] rounded-lg border border-blue-500/20 flex items-center justify-center mb-8 text-2xl group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-300 shadow-lg shadow-black/50">
                  <span className="group-hover:scale-110 transition-transform duration-300">{step.icon}</span>
                </div>

                <h3 className="relative text-xl font-bold mb-3 text-white tracking-wide uppercase">{step.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed max-w-[80%]">{step.desc}</p>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
