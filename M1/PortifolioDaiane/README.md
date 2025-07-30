# PortifolioDaiane
//exemplo:
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  const texts = ["WEB DEVELOPER", "SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    if (!deleting && charIndex <= currentText.length) {
      setDisplayText(currentText.slice(0, charIndex));
      setCharIndex((prev) => prev + 1);
    } else if (deleting && charIndex >= 0) {
      setDisplayText(currentText.slice(0, charIndex));
      setCharIndex((prev) => prev - 1);
    }

    const timeout = setTimeout(() => {
      if (!deleting && charIndex === currentText.length + 1) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <nav className="p-4 flex justify-between items-center bg-gray-800 shadow">
        <h1 className="text-xl font-bold">Daiane <span className="text-purple-400">Barbosa</span></h1>
        <div className="space-x-4 hidden md:flex">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">Sobre</a>
          <a href="#tech" className="hover:text-purple-400">Habilidades</a>
          <a href="#projects" className="hover:text-purple-400">Projetos</a>
          <a href="#contact" className="hover:text-purple-400">Contato</a>
        </div>
      </nav>
      <section id="home" className="flex flex-col md:flex-row items-center justify-center px-4 py-16 gap-8">
        <img src="/profile.png" alt="Perfil" className="w-64 h-64 rounded-full shadow-lg" />
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hey, I'm <span className="text-purple-400">Daiane</span></h2>
          <div className="text-lg md:text-xl h-10">I'm a <span className="text-purple-300 font-mono">{displayText}</span><span className="animate-pulse">|</span></div>
          <p className="mt-4 text-gray-300">
            Sou desenvolvedora FullStack e estudo Engenharia de Software. Trabalho com tecnologias como HTML, CSS, JavaScript, Java, Python, Linux, banco de dados SQL/NoSQL e Cloud AWS e Azure.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://github.com/DaihSeven" target="_blank" className="hover:text-purple-400"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/daianebarbosak/" target="_blank" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
          </div>
          <a href="/DaianeCV.pdf" download className="mt-6 inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Download CV</a>
        </div>
      </section>
    </div>
  );
}


// EXEMPLO 2:
```bash
# 1. Criar projeto React com Vite + TypeScript
npm create vite@latest portfolio-daiane -- --template react-ts
cd portfolio-daiane

# 2. Instalar dependências
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Configurar Tailwind (tailwind.config.js)
```

```ts
tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

```tsx
// src/App.tsx
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <main className="space-y-20 p-4">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
```

---
### 🧩 Estrutura de Pastas
```
src/
├── components/
│   └── Navbar.tsx
├── sections/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── index.css
├── main.tsx
└── App.tsx
```

---
### Exemplo de Componente
```tsx
// src/components/Navbar.tsx
const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md sticky top-0 bg-white z-10">
    <h1 className="text-xl font-bold">Daiane <span className="text-indigo-600">Barbosa</span></h1>
    <div className="space-x-4">
      <a href="#home" className="hover:text-indigo-600">Home</a>
      <a href="#about" className="hover:text-indigo-600">Sobre</a>
      <a href="#projects" className="hover:text-indigo-600">Projetos</a>
      <a href="#contact" className="hover:text-indigo-600">Contato</a>
    </div>
  </nav>
);

export default Navbar;
```

```tsx
// src/sections/Home.tsx
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const roles = ["WEB DEVELOPER", "SOFTWARE ENGINEER", "FULLSTACK DEVELOPER"];

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section id="home" className="flex flex-col items-center text-center py-10">
      <h2 className="text-4xl font-bold">Olá, sou <span className="text-indigo-600">Daiane</span></h2>
      <h3 className="mt-2 text-xl text-gray-600">{roles[index].substring(0, subIndex)}<span className="text-indigo-600">|</span></h3>
      <p className="mt-4 max-w-xl text-gray-700">
        Sou desenvolvedora FullStack e estudo Engenharia de Software. Trabalho com tecnologias como JavaScript, Java, Python, Linux, bancos SQL e NoSQL e Cloud's AWS e Azure.
      </p>
      <div className="mt-4 flex gap-6 text-2xl">
        <a href="https://github.com/DaihSeven" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daianebarbosak/" target="_blank"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">
        Download CV
      </button>
    </section>
  );
};

export default Home;
```

Posso gerar os outros componentes também. Deseja que eu continue com os arquivos `About.tsx`, `Projects.tsx`, `Contact.tsx`?
