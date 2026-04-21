'use client';
import { useState, useEffect } from 'react';
import { Search, Popcorn, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/*logo*/}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
          <Popcorn className="w-8 h-8 text-amber-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">
            CineSol
          </span>
        </Link>

        {/* menu*/}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-300">
          <Link href="#cartaz" className="hover:text-amber-400 transition-colors">Filmes</Link>
          <Link href="#precos-combos" className="hover:text-amber-400 transition-colors">Combos</Link>
          <Link href="#precos" className="hover:text-amber-400 transition-colors">Preços</Link>
          <Link href="#contato" className="hover:text-amber-400 transition-colors">Contato</Link>
        </nav>

        {/* barra de pesquisa */}
        <div className="relative flex items-center">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 220, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar filmes..."
                className="absolute right-10 bg-slate-800/80 text-white text-sm border border-slate-700/50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              />
            )}
          </AnimatePresence>
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 bg-slate-800/50 sm:bg-transparent rounded-full hover:bg-slate-800 transition-colors text-white"
          >
            <Search className="w-5 h-5 text-amber-400" />
          </button>
        </div>

        <div id="login" className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-300 ">
          <Link href="/login" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
            <User size={20} /> 
            <span className="hidden sm:block">Entrar</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
