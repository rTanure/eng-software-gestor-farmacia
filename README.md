# Sistema de gerenciamento de farmácia.

Sistema criado durante a disciplina de Engenharia de Software, ministrada pelo Prof. Euler Horta Marinho, na Universidade Federal de Ouro Preto (UFOP).

### Alunos
1. Richardy Rodrigues Tanure
2. Pedro Alves de Paula
3. Vitor Angelo dos Santos
4. Danielly Mariana Martins Fragoso
5. Kemelly Steisse da Silva
6. Lucas Amaral Leme

## Dependências
- Docker e Docker Compose 
- Node
- Maven
- Java Development Kit (JDK 21)

## Preparando o ambiente
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

  - Caso não apareça o serviço, clique no "+" logo abaixo de "Services" e clique em: Run Configuration Type -> Spring Boot
