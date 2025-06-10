'use client';

import { useState, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card = ({ children, className = '', style = {} }: CardProps) => {
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
  
  const toggleBackgroundColor = () => {
    setBackgroundColor(prev => prev === '#f0f0f0' ? '#4ade80' : '#f0f0f0');
  };

  return (
    <div 
      className={`card ${className}`}
      style={{
        backgroundColor,
        border: '2px solid #ddd',
        borderRadius: '12px',
        padding: '20px',
        margin: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: 'scale(1)',
        ...style
      }}
      onClick={toggleBackgroundColor}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      {children}
    </div>
  );
};
