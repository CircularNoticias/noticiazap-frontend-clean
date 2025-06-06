import React, { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/news';

export default function App() {
  const [noticias, setNoticias] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setNoticias)
      .catch(() => setErro("Erro ao carregar notícias."));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">📰 NotíciaZap</h1>
      {erro && <p className="text-red-600">{erro}</p>}
      {noticias.map((item, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow mb-4">
          <img src={item.imagem} alt={item.titulo} className="w-full rounded-md mb-2" />
          <h2 className="text-xl font-semibold">{item.titulo}</h2>
          <p className="text-sm text-gray-600">{item.resumo}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline block mt-2">
            Ler mais na {item.fonte}
          </a>
        </div>
      ))}
    </div>
  );
}