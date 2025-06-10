
"use client";

import { useEffect } from "react";

export default function Efeito() {
  useEffect(() => {
    console.log("Componente Montado");
  }, []); // Array de dependências, quando vazio, ele executa o callback do useEffect apenas 1 vez, quando o componente renderiza

  return <div>Conteúdo do Componente</div>;
}
// O useEffect é um hook que permite executar efeitos colaterais em componentes funcionais do React.
// Ele é chamado após a renderização do componente e pode ser usado para manipular o DOM, fazer requisições assíncronas, entre outros efeitos.