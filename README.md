# MedMais: Sistema de Gerenciamento de Farmácia

# Descrição

Este projeto tem como objetivo desenvolver um software de gerenciamento de uma farmácia, com o intuito de facilitar a gestão de estoque, como entrada e saída de medicações, vendas, prescrições médicas, controle de validade de medicamentos e facilitar a comunicação com clientes.

Sistema criado durante a disciplina de Engenharia de Software, ministrada pelo Prof. Euler Horta Marinho, na Universidade Federal de Ouro Preto (UFOP).

### Membros e Funções
1. Richardy Rodrigues Tanure - Backend, Banco de Dados
2. Pedro Alves de Paula - Backend, Banco de Dados
3. Vitor Angelo dos Santos - Frontend
4. Danielly Mariana Martins Fragoso - Frontend
5. Kemelly Steisse da Silva - Frontend
6. Lucas Amaral Leme - Backend

## Dependências
- Docker e Docker Compose 
- Node
- Maven
- Java Development Kit (JDK 21)

## Como Rodar o Projeto

## Clonando o Repositório

``` bash
git clone 
``

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
