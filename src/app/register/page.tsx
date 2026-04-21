import Link from 'next/link';
import { Popcorn, Mail, Lock, User } from 'lucide-react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-300">
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-slate-900 items-center justify-center p-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
          <Popcorn className="w-24 h-24 text-amber-400 mb-8 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" />
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Faça parte do clube CineSol.
          </h1>
          <p className="text-lg text-slate-400">
            Crie sua conta e tenha acesso a benefícios exclusivos, ingressos antecipados e promoções especiais da bomboniere.
          </p>
        </div>
        
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none lg:hidden"></div>

        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10 animate-fade-in-up">
          
          <div className="flex items-center gap-3 text-2xl font-bold text-white mb-8 lg:hidden justify-center">
            <Popcorn className="w-8 h-8 text-amber-400" />
            CineSol
          </div>

          <h2 className="text-4xl font-black text-white mb-8 text-center lg:text-left">Cadastrar</h2>

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Nome completo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-slate-500 group-focus-within:text-amber-400 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-amber-400 transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Senha</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-slate-500 group-focus-within:text-amber-400 transition-colors" />
                </div>
                <input 
                  type="password" 
                  placeholder="Crie uma senha forte" 
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <button type="button" className="w-full mt-6 py-4 px-4 bg-amber-400 text-slate-950 text-lg font-bold rounded-xl hover:bg-amber-300 hover:-translate-y-0.5 shadow-[0_0_20px_-5px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_-5px_rgba(251,191,36,0.5)] transition-all duration-300">
              Criar conta
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px bg-slate-800 flex-1"></div>
            <span className="text-sm text-slate-500 font-medium">OU</span>
            <div className="h-px bg-slate-800 flex-1"></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 hover:-translate-y-0.5 transition-all">
              <FaGoogle className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Google</span>
            </button>
            <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-600 hover:-translate-y-0.5 transition-all">
              <FaFacebook className="w-5 h-5 text-white" />
              <span className="text-sm font-medium text-white">Facebook</span>
            </button>
          </div>
          
          <p className="mt-6 text-center text-xs text-slate-500 leading-relaxed">
            Ao se cadastrar, você concorda com nossos <br/>
            <Link href="#" className="text-amber-400 hover:underline transition-colors">Termos de Serviço</Link> e <Link href="#" className="text-amber-400 hover:underline transition-colors">Política de Privacidade</Link>.
          </p>

          <p className="mt-8 text-center text-sm text-slate-400">
            Já tem conta?{' '}
            <Link href="/login" className="text-amber-400 font-bold hover:text-amber-300 hover:underline transition-colors">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
