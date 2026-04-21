# CineSol Cinema

> "A Magia do Cinema na sua Tela."

O **CineSol Cinema** é um moderno sistema web de bilheteria e bomboniere projetado com a arquitetura e o design visual encontrados em grandes plataformas de streaming (como Netflix e Prime Video). 

O projeto foca em alta conversão e performance, utilizando animações suaves, gerenciamento inteligente de estado assíncrono, validação consistente e escalabilidade total por meio de *Server Components*.

---

## Tecnologias e Arquitetura

Este projeto foi construído com ferramentas focadas em performance global, tipagem segura e *Developer Experience (DX)*.

- **[Next.js (App Router)](https://nextjs.org)**: Server-Side Rendering (SSR), Static Site Generation (SSG) e rotas avançadas.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem robusta e escalável, evitando erros silenciosos no código.
- **[Tailwind CSS](https://tailwindcss.com)**: Estilização utilitária de ponta a ponta.
- **[Framer Motion](https://www.framer.com/motion/)**: Animações fluidas em elementos da interface (Hero, Navbar Glassmorphism, Zoom Hover dos filmes).
- **[Lucide & React Icons](https://react-icons.github.io/react-icons/)**: Iconografia leve e escalável.

*(Bibliotecas Estruturais Planejadas para os próximos fluxos de dados)*:
- **[TanStack Query (React Query)](https://tanstack.com/query/latest)**: Gerenciamento inteligente de *Server State* (cache de ocupação de assentos, cartaz).
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)**: Validações precisas e assíncronas no frontend de login/pagamento.
- **[Axios](https://axios-http.com/)**: Camada de requisições centralizada com *Interceptors*.
- **[Zustand](https://github.com/pmndrs/zustand)**: Estado global leve (Carrinho de Combos e checkout).

---

## Funcionalidades

O escopo do sistema de Frontend cobrirá todo o fluxo do consumidor:

**Fase 1 (Implementada):**
- Layout Base com navegação de UI moderna (Dark mode temático).
- **Header animado** com pesquisa retrátil e Glassmorphism.
- **Hero Section Premium** gerando impacto imediato.
- **Carrosséis de Filmes** contendo badgets customizáveis e efeitos de Zoom suave de visualização em cartaz.
- **Footer Institucional** com links e contatos sociais.

**Próximas Fases (Em Desenvolvimento):**
- Tela de detalhes enriquecida com Sinopse, Rating e Trailer imersivo do Filme.
- Seleção visual do **Mapa de Assentos** (Sistema grid assíncrono para garantir integridade anti-concorrência).
- Escolha da **Bomboniere** (Página com carrinho animado de pipoca e refrigerantes).
- Sistema de **Login e Cadastro**.
- Fluxo de Checkout em Modais fáceis e intuitivos.

---

## Rodando o Projeto Localmente

Para clonar e testar esse projeto na sua máquina de forma local:

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (Versão LTS, ex: v18 ou v20+).
- Gerenciador de dependências (recomendado: `npm`).

### Passos
1. Abra um terminal e clone o repositório ou navegue até a pasta extraída.
2. Acesse a pasta central do software:
   ```bash
   cd cinesol-next
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Rode as tarefas de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra no seu navegador o local informado pelo Next.js: `http://localhost:3000`.

---

## Estrutura e Clean Code

O projeto preza pelo isolamento de regras. O padrão utilizado será:
- **`app/`**: Reflete a estrutura de URLs do sistema usando Pages do App Router de forma limpa.
- **`components/ui/`**: Componentes puramente focados em exibição e design system (Modais, Botões).
- **`components/features/`**: Entidades complexas (como Seletores de Assento e Cards Especiais).
- As requisições HTTP e "Query Hooks" nunca acontecerão diretamente em componentes visuais para melhor testabilidade.

&copy; **CineSol Cinema** - Transformando espectadores em fãs.
