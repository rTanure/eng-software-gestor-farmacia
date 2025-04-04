# ✚ MedMais: Sistema de Gerenciamento de Farmácia

## Descrição

Este projeto tem como objetivo desenvolver um software de gerenciamento de uma farmácia, com o intuito de facilitar a gestão de estoque, como entrada e saída de medicações, vendas, prescrições médicas, controle de validade de medicamentos e facilitar a comunicação com clientes.

Sistema criado durante a disciplina de Engenharia de Software, ministrada pelo Prof. Euler Horta Marinho, na Universidade Federal de Ouro Preto (UFOP).

## Sumário


1. [Protótipo de Telas.](#protótipo-de-telas)
2. [Funcionalidades do Produto](#funcionalidades-do-produto)
3. [Diagramas](#diagramas)
4. [Backlog do Produto](#backlog-do-produto)
5. [Backlog da Sprint](#backlog-da-sprint)
6. [Membros e Funções](#membros-e-funções)
7. [Tecnologias](#tecnologias)

## Protótipo de Telas

### Painel Principal
![Painel Principal](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal.jpg)

### Login
![Login](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Login.jpg)

### Painel Principal - Estoque
![Painel Principal - Estoque](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal%20-%20Estoque.jpg)

### Gestão de Estoque - Adicionar e Editar
![Gestão de Estoque - Adicionar e Editar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Gest%C3%A3o%20de%20Estoque%20-%20Adicionar%20e%20Editar.jpg)

### Gestão de Estoque - Visualizar
![Gestão de Estoque - Visualizar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Gest%C3%A3o%20de%20Estoque%20-%20Visualizar.jpg)

### Painel Principal - Fornecedores
![Painel Principal - Fornecedores](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal%20-%20Fornecedores.jpg)

### Fornecedores - Adicionar e Editar
![Fornecedores - Adicionar e Editar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Fornecedores%20-%20Adicionar%2C%20Editar.jpg)

### Fornecedores - Visualizar
![Fornecedores - Visualizar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Fornecedores%20-%20Visualizar.png)

### Painel Principal - Vendas
![Painel Principal - Vendas](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal%20-%20Vendas.jpg)

### Vendas - Adicionar e Editar
![Vendas - Adicionar e Editar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Vendas%20-%20Adicionar%20e%20Editar.jpg)

### Vendas - Visualizar
![Vendas - Visualizar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Vendas%20-%20Visualizar.jpg)

### Painel Principal - Receitas
![Painel Principal - Receitas](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal%20-%20Receitas.jpg)

### Receitas - Visualizar
![Receitas - Visualizar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Receitas%20-%20Visualizar.jpg)

### Painel Principal - Clientes
![Painel Principal - Clientes](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Painel%20Principal%20-%20Clientes.jpg)

### Clientes - Adicionar e Editar
![Clientes - Adicionar e Editar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Clientes%20-%20Adicionar%20e%20Editar.jpg)

### Clientes - Visualizar
![Clientes - Visualizar](https://github.com/rTanure/eng-software-gestor-farmacia/blob/main/docs/readmeAssets/Clientes%20-%20Visualizar.jpg)

## Diagramas

### Diagramas de casos de uso
![Diagram casos de uso](https://github.com/user-attachments/assets/8d899cc5-03b9-4eed-b72c-a70f1020f567)

### Diagramas de atividades para o cliente
![diagram atividades cliente](https://github.com/user-attachments/assets/c91b86cc-65d7-4c99-acde-6d68fb89c9af)

### Diagramas de atividades para o fornecedor
![diagram atividades fornecedor](https://github.com/user-attachments/assets/41ce20ab-fb64-4835-9567-02b1395dd497)

### Diagramas de atividades para a receita
![diagram atividades receitas](https://github.com/user-attachments/assets/a969a0d1-9000-4a3c-9a40-0c38d3bde2ca)

### Diagramas de atividades para o estoque
![diagram atividades stock](https://github.com/user-attachments/assets/b3d3030c-f939-465e-8755-1aba3382af7c)

### Diagramas de atividades para vendas
![diagram atividades vendas](https://github.com/user-attachments/assets/5367c01d-049e-4561-a790-5d7dececf2a1)

### Diagrama de classes
![diagram classe](https://github.com/user-attachments/assets/e39c55ad-2876-413e-8cfc-84f2c4b1c3c9)

## Funcionalidades do Produto

- _Gestão de Estoque_

**História:** Como usuário, eu desejo gerenciar as movimentações do estoque da famárcia no sistema , para que eu possa cadastrar, atualizar e deletar os medicamentos e produtos farmacêuticos.<br>
**Operações CRUD:** Criar, Ler, Atualizar, Excluir os medicamentos.<br>
**Critérios de Aceitação:**

1. O farmacêutico deve cadastrar medicamentos e produtos farmacêuticos novos (medicamento, quantidade, lote, vencimento, tipo).
2. O farmacêutico deve atualizar a situação dos medicamentos e produtos farmacêuticos no estoque.
3. O farmacêutico deve excluir medicamentos e produtos farmacêuticos.
4. O farmacêutico deve visualizar o controle de estoque da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- _Cadastro de Clientes_

**História:** Como usuário, eu desejo gerenciar os clientes da famárcia no sistema, para que eu possa cadastrar, atualizar, deletar dados dos clientes.<br>
**Operações CRUD:** Cadastrar, Ler, Atualiza, Deletar dados de clientes.<br>
**Critérios de Aceitação:**

1. O farmacêutico deve cadastrar novos clientes (nome, endereço, idade, cpf, celular).
2. O farmacêutico deve atualizar os dados do cliente(nome, endereço, idade, cpf, celular).
3. O farmacêutico deve excluir cliente da farmácia.
4. O farmacêutico deve visualizar os dados do cliente da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- _Histórico de Receitas_

**História:** Como usuário, eu desejo acessar o histórico de receitas dos clientes, para que o atendimento seja mais ágil.<br>
**Operações CRUD:** Ler os dados da receita.<br>
**Critérios de Aceitação:**

1. O farmacêutico deve visualizar o histórico de receitas dos clientes.
2. O farmacêutico deve baixar todas as receitas em pdf.
3. O sistema deve garantir que todas as receitas sejam armazenadas e organizadas de forma segura.

- _Gestão de Vendas_

**História:** Como usuário, eu desejo monitorar as vendas da farmácia, conseguindo acompanhar os lucros.<br>
**Operações CRUD:** Criar, Ler, Atualizar, Excluir as vendas da farmácia.<br>
**Critérios de Aceitação:**

1. O farmacêutico deve cadastrar uma nova venda(produto, medicamento, quantidade, preço, data).
2. O farmacêutico deve excluir uma venda do sistema.
3. O farmacêutico deve visualizar as vendas anteriores.
4. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- _Alertas de Vencimento_

**História:** Como usuário, eu gostaria de ser notificado sobre medicamentos que estão próximos ao vencimento.<br>
**Operações CRUD:** Criar alertas automáticos, Ler alertas de medicamentos que estão próximos ao vencimento, Deletar alertas de medicamentos que já foram descartados ou vendidos.<br>
**Critérios de Aceitação:**

1. O farmacêutico deve visualizar uma lista de produtos vencidos em um documento que pode ser baixado.
2. O sistema deve gerar alertas automáticos para medicamentos com vencimento.
3. O sistema deve permitir configurar o período de alerta conforme a necessidade da farmácia.
4. Os alertas devem ser removidos automaticamente quando o medicamento for vendido ou descartado.

- _Marketing_

**História:** Como usuário, eu gostaria de enviar promoções para clientes via e-mail ou WhatsApp.<br>
**Operações CRUD:** N/A.<br>
**Critérios de Aceitação:**

1. O sistema deve permitir o envio de promoções via e-mail e WhatsApp.
2. O sistema deve permitir segmentar clientes com base no histórico de compras.
3. O sistema deve garantir que promoções duplicadas não sejam enviadas para o mesmo cliente em um curto período.

- _Autorização de Vendas de Medicamentos Controlados_

**História:** Como usuário, eu desejo verificar se um medicamento controlado pode ser vendido ao cliente, para garantir conformidade com a legislação.<br>
**Operações CRUD:** Criar registro de validação de receita para medicamentos controlados, Ler informações sobre restrições de venda, Atualizar status de receita aprovada ou recusada.<br>
**Critérios de Aceitação:**

1. O sistema deve verificar automaticamente se o medicamento exige receita controlada.
2. O farmacêutico deve poder escanear ou anexar a receita no sistema.
3. O sistema deve armazenar a receita por um período definido pela legislação.
4. O sistema deve impedir a venda de medicamentos controlados sem a documentação necessária.

- _Relatórios Financeiros_

**História:** Como farmacêutico, eu desejo acessar relatórios financeiros detalhados, para acompanhar o faturamento da farmácia.<br>
**Operações CRUD:** Criar registros de vendas no sistema financeiro, Ler relatórios de faturamento por período, Atualizar filtros para visualização personalizada dos dados, Deletar registros financeiros obsoletos.<br>
**Critérios de Aceitação:**

1. O sistema deve gerar relatórios diários, semanais e mensais de faturamento.
2. O farmacêutico deve poder visualizar gráficos de vendas e tendências.
3. O relatório deve incluir categorias como medicamentos mais vendidos e formas de pagamento utilizadas.
4. O sistema deve permitir exportar os relatórios em PDF e Excel.

- _Agendamento de retirada de medicamentos e produtos_

**História:** Como cliente, eu desejo agendar a retirada de medicamentos na farmácia, para evitar filas e agilizar meu atendimento.<br>
**Operações CRUD:** Criar, Ler, Atualizar e Deletar agendamentos.<br>
**Critérios de Aceitação**:

1. O cliente deve poder selecionar data e horário para retirada do pedido.
2. O sistema deve exibir os horários disponíveis conforme a demanda da farmácia.
3. O farmacêutico deve receber uma notificação de novos agendamentos.
4. O cliente deve poder cancelar ou reagendar a retirada.

- _Cadastro de Fornecedores_

**História:** Como farmacêutico da farmácia, eu desejo cadastrar fornecedores no sistema, para facilitar a gestão de compras e reposição de estoque.<br>
**Operações CRUD:** Criar, Ler, Atualizar e Deletar os fornecedores da farmácia.<br>
**Critérios de Aceitação:**

1. O sistema deve permitir o cadastro de fornecedores (nome, CNPJ, telefone e e-mail).
2. O farmaêutico deve poder visualizar a lista de fornecedores e os produtos que cada um fornece.
3. O sistema deve permitir a edição e exclusão de fornecedores.
4. O sistema deve permitir associar medicamentos a fornecedores específicos.

## Backlog do Produto

1. Gestão de Estoque
2. Cadastro de Clientes
3. Histórico de Receitas
4. Gestão de Vendas
5. Alertas de Vencimento
6. Marketing
7. Autorização de Vendas de Medicamentos Controlados
8. Relatórios Financeiros
9. Agendamento de retirada de medicamentos e produtos
10. Cadastro de Fornecedores

## Backlog da Sprint

1. _Gestão de Estoque_<br><br>
   **Tarefas:**<br>
   **Configurar Banco de Dados**

- [ ] (Richardy) -Escolher o sistema de gerenciamento de banco de dados.
- [ ] (Richardy) -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] (Richardy) -Definir o esquema do banco de dados para medicamentos e produtos farmacêuticos.
- [ ] (Richardy) -Implementar migrações.
- [ ] (Richardy) -Testar a conexão entre backend e banco de dados.

**Cadastrar Medicamentos e Produtos Farmacêuticos**

- [ ] (Kemelly) -Criar formulário de entrada de novos produtos.
- [ ] (Danielly) -Implementar validação do formulário (campos obrigatórios: medicamento, quantidade, lote, vencimento, tipo).
- [ ] (Pedro) -Desenvolver API de criação.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Kemelly) -Testar cadastro de medicamentos e produtos.

**Visualizar Controle de Estoque**

- [ ] (Danielly) -Criar página de listagem de medicamentos e produtos no estoque.
- [ ] (Lucas) -Desenvolver API de listagem de estoque.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Danielly) -Implementar paginação e filtros (por nome, categoria, lote, vencimento).
- [ ] (Lucas) -Testar visualização do estoque.

**Atualizar Estoque**

- [ ] (Vitor) -Criar formulário de atualização de medicamentos e produtos farmacêuticos.
- [ ] (Vitor) -Implementar validação do formulário.
- [ ] (Pedro) -Desenvolver API de atualização de estoque.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Pedro) -Testar atualização de medicamentos e produtos no estoque.

**Excluir Medicamentos e Produtos Farmacêuticos**

- [ ] (Lucas) -Desenvolver API de deleção de medicamentos.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Vitor) -Implementar confirmação de deleção para evitar exclusões acidentais.
- [ ] (Pedro) -Testar remoção de medicamentos e produtos do estoque.
- [ ] (Vitor) -Implementar notificações para exclusões bem-sucedidas.

2. _Cadastro de Clientes_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] (Richardy) -Escolher o sistema de gerenciamento de banco de dados.
- [ ] (Richardy) -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] (Richardy) -Definir o esquema do banco de dados para armazenar informações dos clientes.
- [ ] (Richardy) -Implementar migrações.
- [ ] (Richardy) -Testar a conexão entre backend e banco de dados.

**Criar Cliente**

- [ ] (Vitor) -Criar formulário de entrada para cadastro de clientes.
- [ ] (Kemelly) -Implementar validação do formulário (campos obrigatórios: nome, CPF, telefone, e-mail).
- [ ] (Pedro) -Desenvolver API de criação de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Lucas) -Testar criação de cliente e validação de dados.

**Visualizar Clientes**

- [ ] (Kemelly) -Criar página de listagem de clientes.
- [ ] (Lucas) -Desenvolver API de listagem de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Kemelly) -Implementar paginação e filtros (por nome, CPF, telefone).
- [ ] (Pedro) -Testar visualização de clientes.

**Atualizar Cliente**

- [ ] (Kemelly) -Criar formulário de edição de clientes.
- [ ] (Kemelly) -Implementar validação do formulário para atualização de dados.
- [ ] (Pedro) -Desenvolver API de atualização de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Lucas) -Testar atualização de clientes.

**Excluir Cliente**

- [ ] (Lucas) -Desenvolver API de deleção de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Vitor) -Implementar confirmação de deleção para evitar exclusões acidentais.
- [ ] (Pedro) -Testar remoção de clientes.
- [ ] (Vitor) -Implementar notificações para exclusões bem-sucedidas.

3. _Histórico de Receitas_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] (Richardy) -Escolher o sistema de gerenciamento de banco de dados.
- [ ] (Richardy) -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] (Richardy) -Definir o esquema do banco de dados para armazenar receitas médicas associadas aos clientes.
- [ ] (Richardy) -Implementar migrações.
- [ ] (Richardy) -Testar a conexão entre backend e banco de dados.

**Cadastrar Receita Médica**

- [ ] (Vitor) -Criar formulário para upload de receitas médicas.
- [ ] (Vitor) -Implementar validação do formulário (formatos suportados: PDF, JPG, PNG).
- [ ] (Pedro) -Desenvolver API para armazenamento de receitas médicas associadas ao cliente.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Lucas) -Testar cadastro de receitas médicas.

**Visualizar Histórico de Receitas**

- [ ] (Danielly) -Criar página de listagem de receitas médicas associadas a um cliente.
- [ ] (Pedro) -Desenvolver API de listagem de receitas.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Danielly) -Implementar filtros por data, médico prescritor e medicamento.
- [ ] (Lucas) -Testar visualização do histórico de receitas.

**Atualizar Receita Médica**

- [ ] (Danielly) -Criar funcionalidade para adicionar observações às receitas.
- [ ] (Pedro) -Implementar API para atualizar informações associadas à receita.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Lucas) -Testar atualização de receitas médicas.

**Excluir Receita Médica**

- [ ] (Pedro) -Desenvolver API de deleção de receitas.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] (Danielly) -Implementar confirmação de deleção para evitar remoção acidental.
- [ ] (Richardy) -Testar remoção de receitas médicas.
- [ ] (Danielly) -Implementar notificações para exclusões bem-sucedidas.

4. _Gestão de Vendas_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] (Richardy) -Escolher o sistema de gerenciamento de banco de dados.
- [ ] (Richardy) -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] (Richardy) -Definir o esquema do banco de dados para armazenar informações de vendas.
- [ ] (Richardy) -Implementar migrações.
- [ ] (Richardy) -Testar a conexão entre backend e banco de dados.

**Registrar Venda**

- [ ] (Danielly) -Criar formulário para registrar vendas.
- [ ] (Danielly) -Implementar validação do formulário (campos obrigatórios: cliente, produtos, quantidade, método de pagamento).
- [ ] (Lucas) -Desenvolver API para registrar vendas no sistema.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Pedro) -Testar registro de venda e validação de dados.

**Visualizar Histórico de Vendas**

- [ ] (Vitor) -Criar página de listagem de vendas realizadas.
- [ ] (Pedro) -Desenvolver API de listagem de vendas.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Vitor) -Implementar filtros por data, cliente e método de pagamento.
- [ ] (Lucas) -Testar visualização do histórico de vendas.

**Atualizar Informações de Venda**

- [ ] (Vitor) -Criar funcionalidade para edição de vendas realizadas (exemplo: ajuste na quantidade de um produto).
- [ ] (Pedro) -Desenvolver API para atualizar informações de uma venda.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Pedro) -Testar atualização de vendas.

**Cancelar Venda**

- [ ] (Lucas) -Desenvolver API para cancelamento de vendas.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Vitor) -Implementar confirmação antes de cancelar uma venda.
- [ ] (Lucas) -Testar funcionalidade de cancelamento de vendas.
- [ ] (Vitor) -Implementar notificações para cancelamentos bem-sucedidos.

5. _Cadastro de Fornecedores_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] (Richardy) -Escolher o sistema de gerenciamento de banco de dados.
- [ ] (Richardy) -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] (Richardy) -Definir o esquema do banco de dados para armazenar informações dos fornecedores.
- [ ] (Richardy) -Implementar migrações.
- [ ] (Richardy) -Testar a conexão entre backend e banco de dados.

**Cadastrar Fornecedor**

- [ ] (Danielly) -Criar formulário para cadastro de fornecedores.
- [ ] (Danielly) -Implementar validação do formulário (campos obrigatórios: nome, CNPJ, telefone, e-mail, produtos fornecidos).
- [ ] (Pedro) -Desenvolver API para armazenar fornecedores no banco de dados.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Pedro) -Testar cadastro de fornecedores e validação de dados.

**Visualizar Lista de Fornecedores**

- [ ] (Danielly) -Criar página de listagem de fornecedores cadastrados.
- [ ] (Pedro) -Desenvolver API de listagem de fornecedores.
- [ ] (Richardy) -Integrar frontend com API.
- [ ] (Danielly) -Implementar filtros por nome, CNPJ e categoria de produtos fornecidos.
- [ ] (Lucas) -Testar visualização da lista de fornecedores.

**Atualizar Informações do Fornecedor**

- [ ] (Danielly) -Criar funcionalidade para editar informações do fornecedor.
- [ ] (Pedro) -Desenvolver API para atualização dos dados do fornecedor.
- [ ] (Danielly) -Integrar frontend com API.
- [ ] (Lucas) -Testar atualização dos fornecedores.

**Excluir Fornecedor**

- [ ] (Pedro) -Desenvolver API para deletar fornecedores.
- [ ] (Richardy) -Integrar frontend com API.
- [ ] (Danielly) -Implementar confirmação antes da exclusão para evitar remoção acidental.
- [ ] (Pedro) -Testar funcionalidade de remoção de fornecedores.
- [ ] (Danielly) -Implementar notificações para exclusões bem-sucedidas.

## Protótipo de Telas



## Membros e Funções

1. Richardy Rodrigues Tanure - Full-Stack, Banco de Dados
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

```bash
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
