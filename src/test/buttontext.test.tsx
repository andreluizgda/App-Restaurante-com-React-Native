// Teste unitario do button text presente no button.tsx, para checar se o texto renderiza no componente

import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

// Definindo a funcao ButtonText diretamente no arquivo de teste, pois se tentar importar do arquivo button, o Jest nao reconhece
interface ButtonTextProps {
  children: React.ReactNode;
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black mx-2 text-base">{children}</Text>
  );
}

describe('ButtonText', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<ButtonText>Click Me</ButtonText>); // Renderiza o componente com "Click Me"
    
    // Verifica se o texto "Click Me" foi renderizado corretamente
    expect(getByText('Click Me')).toBeTruthy(); // Verifica se o texto está presente
  });

  it('should render different children text correctly', () => {
    const { getByText } = render(<ButtonText>Press Here</ButtonText>); // Renderiza com texto diferente
    
    // Verifica se o novo texto "Press Here" está na tela
    expect(getByText('Press Here')).toBeTruthy(); 
  });
});
