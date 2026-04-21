'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Play, Film } from 'lucide-react';
import { useEffect } from 'react';

interface MovieDetails {
  title: string;
  poster: string;
  duration: string;
  genre: string;
  synopsis?: string;
  isComingSoon?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieDetails | null;
}

export default function Modal({ isOpen, onClose, movie }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!movie) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        /* Fragmento <> removido daqui! O motion.div agora é filho direto */
        <motion.div
          key="modal-backdrop" // O key ajuda o Framer Motion a rastrear o elemento
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-50 w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-800"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-950/50 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 md:bg-gradient-to-r md:from-transparent md:to-slate-900" />
            </div>

            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
              {movie.isComingSoon && (
                <span className="w-fit bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md mb-4">
                  Em Breve
                </span>
              )}
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {movie.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300 mb-6">
                <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <Film className="w-4 h-4 text-amber-400" />
                  {movie.genre}
                </div>
                <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {movie.duration}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-2">Sinopse</h3>
                <p className="text-slate-400 leading-relaxed">
                  {movie.synopsis || "A sinopse deste filme ainda não está disponível. Fique ligado para mais atualizações!"}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <button className="flex items-center justify-center gap-2 w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  Assistir Trailer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
