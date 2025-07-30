import React, { useState } from 'react';//dando erro no import do useState
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function ContadorSimples() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contador
        </h1>
        
        {/* Carrinho com valor */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <ShoppingCart className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-700">
            {count} {count === 1 ? 'item' : 'itens'}
          </span>
          {count > 0 && (
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              {count}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={decrementar}
            disabled={count === 0}
            className="w-12 h-12 rounded-full bg-red-100 hover:bg-red-200 disabled:bg-gray-100 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          >
            <Minus className="w-5 h-5 text-red-600" />
          </button>
          
          <div className="text-4xl font-bold text-gray-800 w-16 text-center">
            {count}
          </div>
          
          <button
            onClick={incrementar}
            className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-colors"
          >
            <Plus className="w-5 h-5 text-green-600" />
          </button>
        </div>
      </div>
    </div>
  );
}