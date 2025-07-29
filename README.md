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

| Nome do Integrante       | Função no Projeto                              |
| ------------------------ | ---------------------------------------------- |
| `Andreza da Conceição, Sabrina Bochenek, Marivania Boeno e Jessica Bento` | Lógica de JavaScript e Integração com API      |
| `Camila Zotti, Isadora Vieira e Geraldo George ` | Estrutura da página (HTML) e Estilização (CSS) |
| `Henrique Porto` | Gerenciamento do GitHub e Fluxo de Trabalho    |


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

### 5. Resolvendo Conflitos de Merge

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

### 6. Criando um Pull Request (PR)

1.  Vá para a página do repositório no GitHub.
2.  Clique em "Compare & pull request".
3.  Escreva um título e uma descrição clara para o seu PR.
4.  Marque os outros integrantes como "reviewers" (revisores).
5.  Aguarde a aprovação. Após aprovado e testado, o PR poderá ser "merged" (incorporado) na branch `main`.

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
