'use client'; 

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieCarousel from '@/components/MovieCarousel';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import Prices from '@/components/Prices';
import Combos from '@/components/Combos';

interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: string;
  poster: string;
  synopsis?: string;
}

// Mocks simulando o banco de dados
const MOVIES_NOW_PLAYING = [
  { id: '1', title: 'Duna: Parte 2', genre: 'Ficção', duration: '2h 46m', poster: 'https://sl.bing.net/cXRIySS4N1o' },
  { id: '2', title: 'O Voo Final', genre: 'Ação', duration: '2h 10m', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000&auto=format&fit=crop' },
  { id: '3', title: 'Cidade de Sombras', genre: 'Suspense', duration: '1h 55m', poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2000&auto=format&fit=crop' },
  { id: '4', title: 'Aventura Espacial', genre: 'Aventura', duration: '2h 20m', poster: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop' },
];

const MOVIES_COMING_SOON = [
  { id: '5', title: 'Eco: O Início', genre: 'Sci-Fi', duration: 'TBA', poster: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2000&auto=format&fit=crop' },
  { id: '6', title: 'Riso na Noite', genre: 'Comédia', duration: 'TBA', poster: 'https://images.unsplash.com/photo-1514306191717-452ab28c6908?q=80&w=2000&auto=format&fit=crop' },
  { id: '7', title: 'Amnésia Escarlate', genre: 'Terror', duration: 'TBA', poster: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=2000&auto=format&fit=crop' },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      <Header />
      <Hero />
      
      <div className="relative -mt-20 z-30 space-y-8 pb-20">
        <div id="cartaz">
          <MovieCarousel 
            title="Em Cartaz" 
            movies={MOVIES_NOW_PLAYING} 
            onMovieClick={handleOpenModal} 
          />
        </div>
        
        <div id="breve">
          <MovieCarousel 
            title="Em Breve" 
            movies={MOVIES_COMING_SOON} 
            isComingSoon 
            onMovieClick={handleOpenModal} 
          />
        </div>

        <div id="precos-combos">
          <Combos />
        </div>

        <div id="precos">
          <Prices />
        </div>
      </div>

      <Footer />

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        movie={selectedMovie} 
      />
    </main>
  );
}
