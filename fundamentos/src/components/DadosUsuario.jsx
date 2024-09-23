import React from 'react';

const DadosUsuario = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>

      {idade >= 18 ? (
        <p>Você pode tirar habilitação.</p>
      ) : (
        <p>Você não pode tirar habilitação.</p>
      )}
    </div>
  );
};

export default DadosUsuario;