
import React from 'react';

interface IconSymbolProps {
  symbol: string;
  size?: number; 
  color?: string; 
  name: string; 
  style?: React.CSSProperties; 
}

const IconSymbol: React.FC<IconSymbolProps> = ({ symbol, size = 24, color = 'black', name, style = {} }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={style}
    >
      <use href={`#${symbol}`} />
    </svg>
  );
};

export default IconSymbol;
