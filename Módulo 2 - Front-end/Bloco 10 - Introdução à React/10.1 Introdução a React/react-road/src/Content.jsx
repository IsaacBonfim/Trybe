import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <ul>{ conteudos.map((content) => {
        return <li>
        <p>O conteúdo é: {content.conteudo}</p>
        <p>Status: {content.status}</p>
        <p>Bloco: {content.bloco}</p>
        </li>
      }) }</ul>
    )
  }
}

export  default Content;
