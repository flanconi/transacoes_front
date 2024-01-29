# Projeto IBM FrontEnd

## Iniciando o projeto

Execute no terminal node o comando 'npm start' para que o projeto funcione localmente em sua máquina.

**Para que o projeto funcione por completo é necessário ter em sua máquina o projeto [TRANSAÇÕES API](https://github.com/flanconi/transacoes_api)**

## Projeto

O aplicativo em questão tem uma proposta bem simples com apenas uma unica rota ('/) com as seguintes funcionalidades:

- Buscar todas as transações feitas pelo usuário e ordená-las ou não por data;
- Deletar uma transação à partir de seu id;
- Alterar informações da tabela;
- Adicionar novas transações á tabela, onde temos as seguintes regras:
  - Para adicionar apenas uma transação basta preencher o formulário e clicar em **salvar**;
  - Para adicionar um bloco de transações basta preencher o formulário e clicar em **adiconar nova transação**, esta funcionalidade vai salvar os dados que você digitou e limpar o form para que novos dados sejam inseridos;
- Buscar o valor gasto por categoria, onde é necessário escrever o nome da categoria desejada;
