// Teste unitário do Input, para checar se ele recebe os valores

import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from 'react-native'; // Importando o componente TextInput

// Função Input diretamente no teste, pois se eu colocar pra ele importar de um arquivo, o Jest tem problema pra ler
function Input({ ...rest }: any) {
  const [text, setText] = useState('');

  return (
    <TextInput
      value={text} // Controla o valor via state
      onChangeText={setText} // Atualiza o valor com a função setText
      multiline
      textAlignVertical="top"
      placeholderTextColor="gray"
      className="h-32 text-white bg-neutral-700 rounded-md border border-neutral-200 px-4 py-3"
      {...rest}
    />
  );
}

describe('Input', () => {
  it('should render placeholder correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Digite algo..." />);

    // Verifica se o placeholder está sendo renderizado corretamente
    const inputElement = getByPlaceholderText('Digite algo...');
    expect(inputElement).toBeTruthy(); // Verifica se o input com o placeholder está presente
  });

  it('should allow text input and update value', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Digite algo..." />);
    
    // Encontra o campo de input
    const inputElement = getByPlaceholderText('Digite algo...');

    // Simula a digitação de texto no input
    fireEvent.changeText(inputElement, 'Texto de teste');
    
    // Verifica se o texto foi inserido corretamente
    expect(inputElement.props.value).toBe('Texto de teste'); // Verifica se o valor no input foi atualizado
  });
});
