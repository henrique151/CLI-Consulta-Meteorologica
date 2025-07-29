# 🌦️ Site de Consulta Meteorológica

> Projeto de estudo desenvolvido para o programa **Desenvolve** do **Grupo Boticário**.

---

## 📝 Descrição

Este projeto é um site (aplicação web) desenvolvido como um exercício prático para o programa **Desenvolve do Grupo Boticário**. O objetivo é criar uma interface web que **simula a aparência e a interação de um terminal de linha de comando (CLI)**.

Através dela, o usuário pode "digitar comandos" para consultar dados meteorológicos, aplicando conceitos de desenvolvimento web, manipulação do DOM com JavaScript e consumo de APIs.

## ✨ Funcionalidades Principais

- **Interface Estilo Terminal**: Simula a aparência de um console para uma experiência de usuário única.
- **Interação por Comandos**: O usuário consulta o clima digitando comandos (ex: `weather sao paulo`).
- **Validação de Comandos**: O sistema valida se o comando e a cidade foram inseridos corretamente.
- **Integração com API**: Conecta-se a uma API de clima para buscar dados atualizados.
- **Exibição Dinâmica de Resultados**: Mostra a temperatura como se fosse a saída de um comando no terminal.

## 👥 Integrantes e Funções

| Nome do Integrante                                                        | Função no Projeto                              |
| ------------------------------------------------------------------------- | ---------------------------------------------- |
| `Andreza da Conceição, Sabrina Bochenek, Marivania Boeno e Jessica Bento` | Lógica de JavaScript e Integração com API      |
| `Camila Zotti, Isadora Vieira e Geraldo George `                          | Estrutura da página (HTML) e Estilização (CSS) |
| `Henrique Porto`                                                          | Gerenciamento do GitHub e Fluxo de Trabalho    |

---

## 🚀 Guia de Instalação e Uso

Siga os passos abaixo para executar o projeto em sua máquina.

### Pré-requisitos

- Git
- Navegador Web (Chrome, Firefox, etc.)
- Editor de Código (ex: VS Code)
- Chave de API de um serviço de clima (ex: OpenWeatherMap, WeatherAPI)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/henrique151/cli-consulta-meteorologica.git
cd cli-consulta-meteorologica
```

### Passo 2: Instalar Dependências

Este projeto utiliza apenas HTML, CSS e JavaScript puros e não requer a instalação de dependências externas.

### Passo 3: Executar o Programa

Para visualizar o site, basta seguir um dos métodos abaixo:

1.  **Método Simples**: Encontre o arquivo `index.html` na pasta do projeto e abra-o diretamente no seu navegador de preferência.

2.  **Método Recomendado (com Live Server)**: Se você usa o VS Code, instale a extensão Live Server. Depois, clique com o botão direito no arquivo `index.html` e selecione `Open with Live Server`. Isso iniciará um servidor local e recarregará a página automaticamente sempre que você salvar uma alteração.

---

## 📚 Guia de Git e GitHub para Colaboradores

Este guia prático serve para alinhar o uso do Git e GitHub em nosso projeto.

> **Nota**: Este guia segue um modelo de **repositório compartilhado**, onde todos os colaboradores têm acesso de escrita ao repositório principal. Para contribuições externas, o modelo de **Fork e Pull Request** é o mais recomendado.

### 1. Configuração Inicial (Apenas uma vez)

Se você nunca usou o Git, configure seu nome e e-mail. Eles serão usados para identificar seus commits.

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@exemplo.com"
```

### 2. Criando uma Branch para Trabalhar

Nunca trabalhe diretamente na branch `main`. Sempre crie uma nova branch para cada funcionalidade ou correção.

Primeiro, garanta que sua `main` local está atualizada:

```bash
git checkout main
git pull origin main
```

Agora, crie sua nova branch e mude para ela:

```bash
# Exemplo: criando uma feature de login
git checkout -b feature/adicionar-login
```

Para verificar em qual branch você está, use: `git branch` (a branch atual terá um `*`).

### 3. Fazendo Alterações e Salvando (Commit)

Após modificar os arquivos, adicione-os e faça um "commit" com uma mensagem clara.

```bash
# Adiciona todos os arquivos modificados
git add .

# Salva as alterações com uma mensagem descritiva
git commit -m "feat: Adiciona funcionalidade de login"
```

### 4. Enviando as Alterações para o GitHub

Envie sua branch para o repositório remoto no GitHub.

```bash
git push -u origin feature/adicionar-login
```

### 5. Criando um Pull Request (PR) para Revisão

Depois de enviar suas alterações com `git push`, o próximo passo é pedir para que o time revise seu código. Isso é feito através de um **Pull Request (PR)**.

**Passo 1: Encontre o Link no Terminal**

Logo após o `git push`, o terminal mostrará uma mensagem com um link para criar o Pull Request. É a maneira mais fácil de começar.

```
... (outras mensagens do git)
remote: Create a pull request for 'feature/teste2' on GitHub by visiting:
remote:   https://github.com/henrique151/cli-consulta-meteorologica/pull/new/feature/teste2
```

**Passo 2: Crie o Pull Request**

1.  **Clique no link** que apareceu no seu terminal. Ele te levará direto para a página de criação do PR no GitHub.

2.  **Escreva um Título claro.** O título é a primeira coisa que o time verá.

    - **Exemplo de um bom título:** `feat: Adiciona campo de busca de cidade na tela inicial`
    - _Evite títulos vagos como "minhas alterações" ou "correção"._

3.  **Escreva uma Descrição útil.** Explique o que você fez e por quê. Não precisa ser um texto longo, mas deve ajudar os outros a entenderem a mudança.

    - **Exemplo de uma boa descrição:**

      ```
      Adicionei a funcionalidade de busca de cidade na página principal.

      - Criei o input de texto no HTML.
      - Adicionei o CSS para estilizar o campo.
      - O botão "Buscar" agora chama a API com a cidade digitada.
      ```


4.  **Clique em "Create pull request".**

Pronto! Agora é só aguardar o feedback do time. Eles podem aprovar ou pedir ajustes no seu código.

### 6. Resolvendo Conflitos de Merge

Conflitos acontecem quando duas pessoas alteram a mesma linha de um arquivo. Se o GitHub acusar um conflito, siga estes passos:

1.  **Atualize sua branch local com a `main` remota:**
    ```bash
    git pull origin main
    ```
2.  **Abra os arquivos com conflito:** O Git marcará as áreas problemáticas com `<<<<<<<`, `=======`, e `>>>>>>>`.
3.  **Edoite os arquivs:** Apague as marcações do Git e decida qual código deve permanecer (o seu, o da `main`, ou uma mistura dos dois).
4.  **Salve as correções:**
    ```bash
    git add .
    git commit -m "fix: Resolve conflitos de merge com a main"
    git push
    ```

### 🚀 Dicas Extras

- Use `git status` com frequência para ver o que está acontecendo.
- Em caso de erro, leia com atenção a mensagem do Git.
- Nomeie bem as branches, ex: `feature/cadastro-usuario`, `bugfix/login`

### 7. Comandos Rápidos e Úteis

| Comando                | Descrição                                            |
| ---------------------- | ---------------------------------------------------- |
| `git status`           | Vê o status dos arquivos (modificados, novos, etc.). |
| `git branch`           | Lista todas as branches e mostra a atual.            |
| `git checkout <nome>`  | Muda para outra branch.                              |
| `git pull origin main` | Atualiza sua branch atual com a `main`.              |
| `git log`              | Mostra o histórico de commits.                       |

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
