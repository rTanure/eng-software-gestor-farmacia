# ✚ MedMais: Sistema de Gerenciamento de Farmácia

## Descrição

Este projeto tem como objetivo desenvolver um software de gerenciamento de uma farmácia, com o intuito de facilitar a gestão de estoque, como entrada e saída de medicações, vendas, prescrições médicas, controle de validade de medicamentos e facilitar a comunicação com clientes.

Sistema criado durante a disciplina de Engenharia de Software, ministrada pelo Prof. Euler Horta Marinho, na Universidade Federal de Ouro Preto (UFOP).

## Sumário

1. [Funcionalidades do Produto](#funcionalidades-do-produto)
2. [Backlog do Produto](#backlog-do-produto)
3. [Backlog da Sprint](#backlog-do-produto)
4. [Membros e Funções](#membros-e-funções)
5. [Dependências](#dependências)

## Funcionalidades do Produto

- *Gestão de Estoque*

  **História:** Como usuário, eu desejo gerenciar as movimentações do estoque da famárcia no sistema , para que eu possa cadastrar, atualizar e deletar os medicamentos e produtos farmacêuticos.
**Operações CRUD:** Criar, Ler, Atualizar, Excluir os medicamentos.
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar medicamentos e produtos farmacêuticos novos (medicamento, quantidade, lote, vencimento, tipo).
2. O farmacêutico deve atualizar a situação dos medicamentos e produtos farmacêuticos no estoque ().
3. O farmacêutico deve excluir medicamentos e produtos farmacêuticos.
4. O farmacêutico deve visualizar o controle de estoque da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Cadastro de Clientes*

**História:** Como usuário, eu desejo gerenciar os clientes da famárcia no sistema, para que eu possa cadastrar, atualizar, deletar dados dos clientes.
**Operações CRUD:** Cadastrar, Ler, Atualiza, Deletar dados de clientes.
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar novos clientes (nome, endereço, idade, cpf, celular).
2. O farmacêutico deve atualizar os dados do cliente(nome, endereço, idade, cpf, celular).
3. O farmacêutico deve excluir cliente da farmácia.
4. O farmacêutico deve visualizar os dados do cliente da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Histórico de Receitas*

**História:** Como usuário, eu desejo acessar o histórico de receitas dos clientes, para que o atendimento seja mais ágil.
**Operações CRUD:** Ler os dados da receita.
**Critérios de Aceitação:**
1. O farmacêutico deve visualizar o histórico de receitas dos clientes.
2. O farmacêutico deve baixar todas as receitas em pdf.
3. O sistema deve garantir que todas as receitas sejam armazenadas e organizadas de forma segura.

- *Gestão de Vendas*
  
**História:** Como usuário, eu desejo monitorar as vendas da farmácia, conseguindo acompanhar os lucros.
**Operações CRUD:** Criar, Ler, Atualizar, Excluir as vendas da farmácia.
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar uma nova venda(produto, medicamento, quantidade, preço, data).
2. O farmacêutico deve excluir uma venda do sistema.
3. O farmacêutico deve visualizar as vendas anteriores.
4. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Alertas de vencimento:*
  
**História:** Como usuário, eu gostaria de ser notificado sobre medicamentos que estão próximos ao vencimento.
**Operações CRUD:** Criar alertas automáticos, Ler alertas de medicamentos que estão próximos ao vencimento, Deletar alertas de medicamentos que já foram descartados ou vendidos.

**Crtérios de Aceitação:**
1. O farmacêutico deve visualizar uma lista de produtos vencidos em um documento que pode ser baixado.
2. 

- **
1. 

- *
## Backlog do Produto

## Backlog Sprint

## Membros e Funções
1. Richardy Rodrigues Tanure - Backend, Banco de Dados
2. Pedro Alves de Paula - Backend, Banco de Dados
3. Vitor Angelo dos Santos - Frontend
4. Danielly Mariana Martins Fragoso - Frontend
5. Kemelly Steisse da Silva - Frontend
6. Lucas Amaral Leme - Backend

## Tecnologias
- Docker e Docker Compose 
- Node
- Maven
- Java Development Kit (JDK 21)
- JavaScript
- CSS
- HTML
- React
- FIGMA

## Como Rodar o Projeto

## Clonando o Repositório

``` bash
git clone https://github.com/rTanure/eng-software-gestor-farmacia.git
```

## Preparando o Ambiente
### 1. Back-end
- Iniciar container docker com o banco de dados
```
# No diretório pai
docker-compose up -d
```
- Criar conta na JetBrains com o email institucional da UFOP
- Instalar o IntelliJ IDEA
- Abrir o diretório ./api como projeto no IntelliJ
- Instalar as dependências
  
![Instalação de dependências](docs/prints/maven-install.png)

- Iniciar a aplicação
  
![Rodando serviço](docs/prints/run-services.png)

  - Caso não apareça o serviço, clique no "+" logo abaixo de "Services" e clique em: Run Configuration Type -> Spring Boot.
