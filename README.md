# ✚ MedMais: Sistema de Gerenciamento de Farmácia

## Descrição

Este projeto tem como objetivo desenvolver um software de gerenciamento de uma farmácia, com o intuito de facilitar a gestão de estoque, como entrada e saída de medicações, vendas, prescrições médicas, controle de validade de medicamentos e facilitar a comunicação com clientes.

Sistema criado durante a disciplina de Engenharia de Software, ministrada pelo Prof. Euler Horta Marinho, na Universidade Federal de Ouro Preto (UFOP).

## Sumário

1. [Funcionalidades do Produto](#funcionalidades-do-produto)
2. [Backlog do Produto](#backlog-do-produto)
3. [Backlog da Sprint](#backlog-da-sprint)
4. [Membros e Funções](#membros-e-funções)
5. [Tecnologias](#tecnologias)

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

- [ ] () -Escolher o sistema de gerenciamento de banco de dados.
- [ ] () -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] () -Definir o esquema do banco de dados para medicamentos e produtos farmacêuticos.
- [ ] () -Implementar migrações.
- [ ] () -Testar a conexão entre backend e banco de dados.

**Cadastrar Medicamentos e Produtos Farmacêuticos**

- [ ] (Kemelly) -Criar formulário de entrada de novos produtos.
- [ ] () -Implementar validação do formulário (campos obrigatórios: medicamento, quantidade, lote, vencimento, tipo).
- [ ] () -Desenvolver API de criação.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] (Kemelly) -Testar cadastro de medicamentos e produtos.

**Visualizar Controle de Estoque**

- [ ] () -Criar página de listagem de medicamentos e produtos no estoque.
- [ ] () -Desenvolver API de listagem de estoque.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Implementar paginação e filtros (por nome, categoria, lote, vencimento).
- [ ] () -Testar visualização do estoque.

**Atualizar Estoque**

- [ ] () -Criar formulário de atualização de medicamentos e produtos farmacêuticos.
- [ ] () -Implementar validação do formulário.
- [ ] () -Desenvolver API de atualização de estoque.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Testar atualização de medicamentos e produtos no estoque.

**Excluir Medicamentos e Produtos Farmacêuticos**

- [ ] () -Desenvolver API de deleção de medicamentos.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Implementar confirmação de deleção para evitar exclusões acidentais.
- [ ] () -Testar remoção de medicamentos e produtos do estoque.
- [ ] () -Implementar notificações para exclusões bem-sucedidas.

2. _Cadastro de Clientes_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] () -Escolher o sistema de gerenciamento de banco de dados.
- [ ] () -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] () -Definir o esquema do banco de dados para armazenar informações dos clientes.
- [ ] () -Implementar migrações.
- [ ] () -Testar a conexão entre backend e banco de dados.

**Criar Cliente**

- [ ] () -Criar formulário de entrada para cadastro de clientes.
- [ ] () -Implementar validação do formulário (campos obrigatórios: nome, CPF, telefone, e-mail).
- [ ] () -Desenvolver API de criação de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Testar criação de cliente e validação de dados.

**Visualizar Clientes**

- [ ] () -Criar página de listagem de clientes.
- [ ] () -Desenvolver API de listagem de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Implementar paginação e filtros (por nome, CPF, telefone).
- [ ] () -Testar visualização de clientes.

**Atualizar Cliente**

- [ ] () -Criar formulário de edição de clientes.
- [ ] () -Implementar validação do formulário para atualização de dados.
- [ ] () -Desenvolver API de atualização de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Testar atualização de clientes.

**Excluir Cliente**

- [ ] () -Desenvolver API de deleção de clientes.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Implementar confirmação de deleção para evitar exclusões acidentais.
- [ ] () -Testar remoção de clientes.
- [ ] () -Implementar notificações para exclusões bem-sucedidas.

3. _Histórico de Receitas_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] () -Escolher o sistema de gerenciamento de banco de dados.
- [ ] () -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] () -Definir o esquema do banco de dados para armazenar receitas médicas associadas aos clientes.
- [ ] () -Implementar migrações.
- [ ] () -Testar a conexão entre backend e banco de dados.

**Cadastrar Receita Médica**

- [ ] () -Criar formulário para upload de receitas médicas.
- [ ] () -Implementar validação do formulário (formatos suportados: PDF, JPG, PNG).
- [ ] () -Desenvolver API para armazenamento de receitas médicas associadas ao cliente.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Testar cadastro de receitas médicas.

**Visualizar Histórico de Receitas**

- [ ] () -Criar página de listagem de receitas médicas associadas a um cliente.
- [ ] () -Desenvolver API de listagem de receitas.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Implementar filtros por data, médico prescritor e medicamento.
- [ ] () -Testar visualização do histórico de receitas.

**Atualizar Receita Médica**

- [ ] () -Criar funcionalidade para adicionar observações às receitas.
- [ ] () -Implementar API para atualizar informações associadas à receita.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Testar atualização de receitas médicas.

**Excluir Receita Médica**

- [ ] () -Desenvolver API de deleção de receitas.
- [ ] (Vitor) -Integrar frontend com API.
- [ ] () -Implementar confirmação de deleção para evitar remoção acidental.
- [ ] () -Testar remoção de receitas médicas.
- [ ] () -Implementar notificações para exclusões bem-sucedidas.

4. _Gestão de Vendas_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] () -Escolher o sistema de gerenciamento de banco de dados.
- [ ] () -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] () -Definir o esquema do banco de dados para armazenar informações de vendas.
- [ ] () -Implementar migrações.
- [ ] () -Testar a conexão entre backend e banco de dados.

**Registrar Venda**

- [ ] () -Criar formulário para registrar vendas.
- [ ] () -Implementar validação do formulário (campos obrigatórios: cliente, produtos, quantidade, método de pagamento).
- [ ] () -Desenvolver API para registrar vendas no sistema.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Testar registro de venda e validação de dados.

**Visualizar Histórico de Vendas**

- [ ] () -Criar página de listagem de vendas realizadas.
- [ ] () -Desenvolver API de listagem de vendas.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Implementar filtros por data, cliente e método de pagamento.
- [ ] () -Testar visualização do histórico de vendas.

**Atualizar Informações de Venda**

- [ ] () -Criar funcionalidade para edição de vendas realizadas (exemplo: ajuste na quantidade de um produto).
- [ ] () -Desenvolver API para atualizar informações de uma venda.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Testar atualização de vendas.

**Cancelar Venda**

- [ ] () -Desenvolver API para cancelamento de vendas.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Implementar confirmação antes de cancelar uma venda.
- [ ] () -Testar funcionalidade de cancelamento de vendas.
- [ ] () -Implementar notificações para cancelamentos bem-sucedidos.

5. _Cadastro de Fornecedores_<br><br>
   **Tarefas:**<br>

**Configurar Banco de Dados**

- [ ] () -Escolher o sistema de gerenciamento de banco de dados.
- [ ] () -Configurar o banco de dados no servidor de desenvolvimento.
- [ ] () -Definir o esquema do banco de dados para armazenar informações dos fornecedores.
- [ ] () -Implementar migrações.
- [ ] () -Testar a conexão entre backend e banco de dados.

**Cadastrar Fornecedor**

- [ ] () -Criar formulário para cadastro de fornecedores.
- [ ] () -Implementar validação do formulário (campos obrigatórios: nome, CNPJ, telefone, e-mail, produtos fornecidos).
- [ ] () -Desenvolver API para armazenar fornecedores no banco de dados.
- [ ] (Kemelly) -Integrar frontend com API.
- [ ] () -Testar cadastro de fornecedores e validação de dados.

**Visualizar Lista de Fornecedores**

- [ ] () -Criar página de listagem de fornecedores cadastrados.
- [ ] () -Desenvolver API de listagem de fornecedores.
- [ ] () -Integrar frontend com API.
- [ ] () -Implementar filtros por nome, CNPJ e categoria de produtos fornecidos.
- [ ] () -Testar visualização da lista de fornecedores.

**Atualizar Informações do Fornecedor**

- [ ] () -Criar funcionalidade para editar informações do fornecedor.
- [ ] () -Desenvolver API para atualização dos dados do fornecedor.
- [ ] (Danielly) -Integrar frontend com API.
- [ ] () -Testar atualização dos fornecedores.

**Excluir Fornecedor**

- [ ] () -Desenvolver API para deletar fornecedores.
- [ ] () -Integrar frontend com API.
- [ ] () -Implementar confirmação antes da exclusão para evitar remoção acidental.
- [ ] () -Testar funcionalidade de remoção de fornecedores.
- [ ] () -Implementar notificações para exclusões bem-sucedidas.

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
