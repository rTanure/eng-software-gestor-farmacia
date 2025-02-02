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

- *Gestão de Estoque*

**História:** Como usuário, eu desejo gerenciar as movimentações do estoque da famárcia no sistema , para que eu possa cadastrar, atualizar e deletar os medicamentos e produtos farmacêuticos.<br>
**Operações CRUD:** Criar, Ler, Atualizar, Excluir os medicamentos.<br>
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar medicamentos e produtos farmacêuticos novos (medicamento, quantidade, lote, vencimento, tipo).
2. O farmacêutico deve atualizar a situação dos medicamentos e produtos farmacêuticos no estoque.
3. O farmacêutico deve excluir medicamentos e produtos farmacêuticos.
4. O farmacêutico deve visualizar o controle de estoque da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Cadastro de Clientes*

**História:** Como usuário, eu desejo gerenciar os clientes da famárcia no sistema, para que eu possa cadastrar, atualizar, deletar dados dos clientes.<br>
**Operações CRUD:** Cadastrar, Ler, Atualiza, Deletar dados de clientes.<br>
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar novos clientes (nome, endereço, idade, cpf, celular).
2. O farmacêutico deve atualizar os dados do cliente(nome, endereço, idade, cpf, celular).
3. O farmacêutico deve excluir cliente da farmácia.
4. O farmacêutico deve visualizar os dados do cliente da farmácia.
5. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Histórico de Receitas*

**História:** Como usuário, eu desejo acessar o histórico de receitas dos clientes, para que o atendimento seja mais ágil.<br>
**Operações CRUD:** Ler os dados da receita.<br>
**Critérios de Aceitação:**
1. O farmacêutico deve visualizar o histórico de receitas dos clientes.
2. O farmacêutico deve baixar todas as receitas em pdf.
3. O sistema deve garantir que todas as receitas sejam armazenadas e organizadas de forma segura.

- *Gestão de Vendas*
  
**História:** Como usuário, eu desejo monitorar as vendas da farmácia, conseguindo acompanhar os lucros.<br>
**Operações CRUD:** Criar, Ler, Atualizar, Excluir as vendas da farmácia.<br>
**Critérios de Aceitação:**
1. O farmacêutico deve cadastrar uma nova venda(produto, medicamento, quantidade, preço, data).
2. O farmacêutico deve excluir uma venda do sistema.
3. O farmacêutico deve visualizar as vendas anteriores.
4. O sistema deve garantir que todos os dados sejam gerenciados de forma restrita, exigindo autenticação por senha.

- *Alertas de Vencimento*
  
**História:** Como usuário, eu gostaria de ser notificado sobre medicamentos que estão próximos ao vencimento.<br>
**Operações CRUD:** Criar alertas automáticos, Ler alertas de medicamentos que estão próximos ao vencimento, Deletar alertas de medicamentos que já foram descartados ou vendidos.<br>
**Critérios de Aceitação:**
1. O farmacêutico deve visualizar uma lista de produtos vencidos em um documento que pode ser baixado.
2. O sistema deve gerar alertas automáticos para medicamentos com vencimento.
3. O sistema deve permitir configurar o período de alerta conforme a necessidade da farmácia.
4. Os alertas devem ser removidos automaticamente quando o medicamento for vendido ou descartado.

- *Marketing*
  
**História:** Como usuário, eu gostaria de enviar promoções para clientes via e-mail ou WhatsApp.<br>
**Operações CRUD:** N/A.<br>
**Critérios de Aceitação:**
1. O sistema deve permitir o envio de promoções via e-mail e WhatsApp.
2. O sistema deve permitir segmentar clientes com base no histórico de compras.
3. O sistema deve garantir que promoções duplicadas não sejam enviadas para o mesmo cliente em um curto período.

- *Autorização de Vendas de Medicamentos Controlados*
  
**História:** Como usuário, eu desejo verificar se um medicamento controlado pode ser vendido ao cliente, para garantir conformidade com a legislação.<br>
**Operações CRUD:** Criar registro de validação de receita para medicamentos controlados, Ler informações sobre restrições de venda, Atualizar status de receita aprovada ou recusada.<br>
**Critérios de Aceitação:**
1. O sistema deve verificar automaticamente se o medicamento exige receita controlada.
2. O farmacêutico deve poder escanear ou anexar a receita no sistema.
3. O sistema deve armazenar a receita por um período definido pela legislação.
4. O sistema deve impedir a venda de medicamentos controlados sem a documentação necessária.

- *Relatórios Financeiros*

**História:** Como farmacêutico, eu desejo acessar relatórios financeiros detalhados, para acompanhar o faturamento da farmácia.<br>
**Operações CRUD:** Criar registros de vendas no sistema financeiro, Ler relatórios de faturamento por período, Atualizar filtros para visualização personalizada dos dados, Deletar registros financeiros obsoletos.<br>
**Critérios de Aceitação:**
1. O sistema deve gerar relatórios diários, semanais e mensais de faturamento.
2. O farmacêutico deve poder visualizar gráficos de vendas e tendências.
3. O relatório deve incluir categorias como medicamentos mais vendidos e formas de pagamento utilizadas.
4. O sistema deve permitir exportar os relatórios em PDF e Excel.

- *Agendamento de retirada de medicamentos e produtos*

**História:** Como cliente, eu desejo agendar a retirada de medicamentos na farmácia, para evitar filas e agilizar meu atendimento.<br>
**Operações CRUD:** Criar, Ler, Atualizar e Deletar agendamentos.<br>
**Critérios de Aceitação**:
1. O cliente deve poder selecionar data e horário para retirada do pedido.
2. O sistema deve exibir os horários disponíveis conforme a demanda da farmácia.
3. O farmacêutico deve receber uma notificação de novos agendamentos.
4. O cliente deve poder cancelar ou reagendar a retirada.

-  *Cadastro de Fornecedores*

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

1. *Gestão de Estoque*
**Tarefas:**
**Configurar Banco de Dados**
- Escolher o sistema de gerenciamento de banco de dados.
- Configurar o banco de dados no servidor de desenvolvimento.
- Definir o esquema do banco de dados para medicamentos e produtos farmacêuticos.
- Implementar migrações.
- Testar a conexão entre backend e banco de dados.

**Cadastrar Medicamentos e Produtos Farmacêuticos**
- Criar formulário de entrada de novos produtos.
- Implementar validação do formulário (campos obrigatórios: medicamento, quantidade, lote, vencimento, tipo).
- Desenvolver API de criação.
- Integrar frontend com API.
- Testar cadastro de medicamentos e produtos.

**Visualizar Controle de Estoque**
- Criar página de listagem de medicamentos e produtos no estoque.
- Desenvolver API de listagem de estoque.
- Integrar frontend com API.
- Implementar paginação e filtros (por nome, categoria, lote, vencimento).
- Testar visualização do estoque.

**Atualizar Estoque**
- Criar formulário de atualização de medicamentos e produtos farmacêuticos.
- Implementar validação do formulário.
- Desenvolver API de atualização de estoque.
- Integrar frontend com API.
- Testar atualização de medicamentos e produtos no estoque.

**Excluir Medicamentos e Produtos Farmacêuticos**
- Desenvolver API de deleção de medicamentos. 
- Integrar frontend com API.
- Implementar confirmação de deleção para evitar exclusões acidentais.
- Testar remoção de medicamentos e produtos do estoque.
- Implementar notificações para exclusões bem-sucedidas.

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
