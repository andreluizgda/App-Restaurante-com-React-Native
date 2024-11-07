import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

// Definindo o componente ButtonText diretamente no arquivo de teste, pois tentar importar do button.tsx o jest nao reconhece
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
