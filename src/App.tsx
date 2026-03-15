import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import { cardData } from './data/cards';

export default function App() {
  const [selectedCard, setSelectedCard] = useState<typeof cardData[0] | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="py-12 px-6 text-center border-b border-emerald-900/30 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-900 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          INWO Archive
        </h1>
        <p className="mt-4 text-zinc-400 font-mono text-sm uppercase tracking-widest">
          Illuminati: New World Order // Classified Database
        </p>
      </header>

      {/* Grid Layout */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCard(card)}
              className="relative group cursor-pointer rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors duration-300 shadow-lg hover:shadow-emerald-500/20"
            >
              <div className="aspect-[2/3] relative overflow-hidden bg-zinc-950">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] text-emerald-500 font-mono uppercase tracking-wider mb-1">
                  {card.type}
                </p>
                <h3 className="text-sm md:text-base font-bold text-emerald-50 leading-tight group-hover:text-emerald-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: #{card.id.toString().padStart(3, '0')}
                </p>
              </div>
              
              {/* Cyberpunk corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-zinc-900 border border-emerald-900/50 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-emerald-900/50 text-zinc-400 hover:text-emerald-400 rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-2/5 aspect-[2/3] md:aspect-auto md:h-[700px] relative shrink-0 bg-zinc-950">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none"></div>
              </div>

              <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col relative overflow-y-auto">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <div className="w-32 h-32 border border-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-emerald-500 rotate-45"></div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-1 bg-emerald-950 text-emerald-400 text-xs font-mono uppercase tracking-widest border border-emerald-900/50 rounded">
                      {selectedCard.type}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs">
                      FILE #{selectedCard.id.toString().padStart(4, '0')}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-black mb-6 text-zinc-100 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {selectedCard.title}
                  </h2>
                  
                  <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-8"></div>
                  
                  <div className="space-y-8 flex-grow">
                    {/* English Description */}
                    <div>
                      <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Original Text
                      </h4>
                      <p className="text-lg text-zinc-300 leading-relaxed font-serif italic border-l-2 border-zinc-800 pl-4">
                        "{selectedCard.en_desc}"
                      </p>
                    </div>

                    {/* Chinese Description */}
                    <div>
                      <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Translated Data
                      </h4>
                      <p className="text-lg text-zinc-300 leading-relaxed border-l-2 border-emerald-900/50 pl-4">
                        {selectedCard.zh_desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/50 grid grid-cols-2 gap-4">
                    <div className="bg-zinc-950/50 p-4 rounded-lg border border-zinc-800/50">
                      <p className="text-xs text-zinc-500 font-mono uppercase mb-1">Threat Level</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`h-2 w-full rounded-full ${i <= (selectedCard.id % 5) + 1 ? 'bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-zinc-800'}`}></div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-zinc-950/50 p-4 rounded-lg border border-zinc-800/50">
                      <p className="text-xs text-zinc-500 font-mono uppercase mb-1">Status</p>
                      <p className="text-sm text-emerald-400 font-mono uppercase">Active Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
