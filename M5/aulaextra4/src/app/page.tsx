'use client';

import { useState } from 'react';
import { Card } from '../app/components/cards';

interface CardData {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [cardValues, setCardValues] = useState<CardData[]>([
    { id: 1, title: 'Card 1', content: 'Primeiro card com conteúdo inicial' },
    { id: 2, title: 'Card 2', content: 'Segundo card com informações diferentes' },
    { id: 3, title: 'Card 3', content: 'Terceiro card com mais detalhes' },
    { id: 4, title: 'Card 4', content: 'Quarto card com conteúdo único' }
  ]);

  const updateCardValue = (id: number, newContent: string) => {
    setCardValues(prev => 
      prev.map(card => 
        card.id === id 
          ? { ...card, content: newContent }
          : card
      )
    );
  };

  return (
    <div style={{ 
      padding: '20px', 
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        color: '#1f2937',
        fontSize: '2rem'
      }}>
        Componente Card Genérico
      </h1>
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        color: '#6b7280',
        fontSize: '1.1rem'
      }}>
        Clique nos cards para alterar a cor de fundo para verde!
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {cardValues.map((card) => (
          <Card key={card.id}>
            <h3 style={{ 
              color: '#1f2937', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              {card.title}
            </h3>
            
            <p style={{ 
              color: '#4b5563', 
              marginBottom: '15px',
              lineHeight: '1.5'
            }}>
              {card.content}
            </p>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newContent = prompt('Digite o novo conteúdo:', card.content);
                if (newContent !== null) {
                  updateCardValue(card.id, newContent);
                }
              }}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#3b82f6';
              }}
            >
              Editar Conteúdo
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}