# Atividade Pratica - Modal MUI

Este é um aplicativo de **gerenciamento de tarefas** construído com **React** e **Redux**. Ele permite que os usuários se registrem, façam login, criem tarefas e gerenciem suas atividades. As tarefas são armazenadas no `localStorage` para garantir que, ao recarregar a página, elas sejam preservadas. Além disso, é necessário estar logado para criar novas tarefas.

## Funcionalidades

- **Cadastro de usuário**: Registre-se com email e senha.
- **Login de usuário**: Faça login para acessar o Gerenciador de Tarefas.
- **Persistência de sessão**: Mantém o usuário logado ao recarregar a página.
- **Criação de tarefas**: Adicione novas tarefas que são salvas no `localStorage`.
- **Validação de login**: Usuários não logados não podem criar tarefas.
- **Exibição de tarefas**: As tarefas são renderizadas automaticamente ao carregar a página.
- **Logout**: Sair da conta a qualquer momento.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface de usuário.
- **Redux**: Utilizado para gerenciamento de estado global da aplicação.
- **Material UI**: Biblioteca de componentes estilizados.
- **React Router**: Gerenciamento de rotas e navegação entre páginas.
- **LocalStorage**: Armazenamento local para persistir dados entre as sessões.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado. Você pode baixá-lo em: [Node.js](https://nodejs.org/).

### Instalação

### 1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/atividade_pratica_modal-MUI.git
   ```
### 2. Navegue até o diretório do projeto:

  ```bash
  cd atividade_pratica_modal-MUI
  ```

### 3. Instale as dependências:

  ```bash
  npm install
  ```
### 4. Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```
### 5. O projeto estará disponível em http://localhost:5173.

## Estrutura do Projeto
  ```bash
  .
  ├── public/
  ├── src/
  │   ├── components/    # Componentes reutilizáveis
  │   ├── pages/         # Páginas da aplicação (Login, TaskManager, etc.)
  │   ├── store/         # Configuração do Redux (authSlice, taskSlice)
  │   ├── App.tsx        # Arquivo principal da aplicação
  │   └── index.tsx      # Ponto de entrada do React
  ├── .gitignore         # Arquivos e diretórios ignorados pelo Git
  ├── package.json       # Dependências e scripts do projeto
  └── README.md          # Documentação do projeto
```
## Funcionalidade de Login
  - O usuário deve estar registrado para acessar o gerenciador de tarefas.
  - Caso o usuário tente criar uma tarefa sem estar logado, ele será redirecionado para a página de login e verá uma mensagem de erro.

## Salvamento de Tarefas no LocalStorage
  - As tarefas são salvas no localStorage e carregadas automaticamente ao recarregar a página.
  - Se o usuário estiver logado, as tarefas armazenadas anteriormente serão exibidas.

## Páginas
  - Login: Página para autenticação do usuário. Ao inserir as credenciais corretas, o usuário é redirecionado para a página de gerenciamento de tarefas.
  - Task Manager: Exibe as tarefas criadas e permite adicionar novas tarefas. Caso o usuário não esteja logado, será redirecionado para o login.

**Feito com 💻 por Mateus C. da Silva.**

