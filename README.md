# 🌦️ CLI de Consulta Meteorológica

> Projeto de estudo desenvolvido para o programa **Desenvolve** do **Grupo Boticário**.

---

## 📝 Descrição

Este projeto é uma **ferramenta de linha de comando (CLI)** desenvolvida como um exercício prático para o programa **Desenvolve do Grupo Boticário**. O objetivo é permitir que o usuário consulte dados de CEP e informações meteorológicas diretamente do seu terminal.

A aplicação utiliza Node.js para executar scripts que interagem com APIs externas para buscar e exibir os dados solicitados.

## ✨ Funcionalidades Principais

- **Consulta de Endereço por CEP**: Script interativo (`cep.js`) que solicita um CEP e retorna o endereço correspondente.
- **Consulta de Clima por CEP**: Script (`apiWeather.js`) que recebe um CEP como argumento, busca a cidade correspondente e exibe a condição climática atual.
- **Validação de Entrada**: Garante que o CEP fornecido seja válido (formato de 8 dígitos numéricos).
- **Integração com Múltiplas APIs**: Utiliza a API ViaCEP para geolocalização e a OpenWeatherMap para dados meteorológicos.
- **Uso de Variáveis de Ambiente**: Configuração segura da chave de API através de um arquivo `.env`.

## 👥 Integrantes e Funções

| Nome do Integrante                                                                                                       | Função no Projeto                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Andreza da Conceição, Sabrina Bochenek, Marivania Boeno, Camila Zotti, Isadora Vieira e Geraldo George e Jessica Bento` | Desenvolvimento dos scripts CLI em Node.js. Criação da lógica para consulta interativa de CEP (`cep.js`) e da funcionalidade de busca de clima encadeando as APIs ViaCEP e OpenWeatherMap (`apiWeather.js`). |
| `Henrique Porto`                                                                                                         | Gerenciamento do GitHub e Fluxo de Trabalho                                                                                                                                                                  |

---

## 🚀 Guia de Instalação e Uso

Siga os passos abaixo para executar o projeto em sua máquina.

### Pré-requisitos

- Git
- Node.js instalado (https://nodejs.org)
- Editor de Código (ex: VS Code)
- Chave de API de um serviço de clima (ex: OpenWeatherMap, WeatherAPI)

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/henrique151/cli-consulta-meteorologica.git
cd cli-consulta-meteorologica
```

### Passo 2: Instalar Dependências

Este projeto utiliza o pacote `dotenv` para carregar variáveis de ambiente. Instale as dependências com:

```bash
npm install
```

> 💡 **Observação:** Caso apareça um erro relacionado ao `dotenv` após a instalação, execute manualmente:

```bash
npm install dotenv
```

---

### Passo 3: Configurar o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com sua chave da API, exatamente como está abaixo:

```
API_KEY=sua_chave_api_aqui
```

---

### Passo 4: Executar os Scripts

- Para rodar o script que consulta o CEP:

```bash
node ./cep.js
```

Após executar, abrirá um terminal onde você poderá digitar o CEP.

- Para rodar o script que consulta o clima a partir do CEP:

```bash
node ./apiWeather.js 08050150
```

(Substitua `08050150` pelo CEP desejado — deve ser um número com 8 dígitos, sem hífen.)

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

## ⚠️ Nota Importante sobre o Git e Mensagem de Commit no Merge

Quando você executar um `git pull` e houver conflitos ou o Git precisar fazer um merge, pode abrir uma tela de texto padrão do Git (geralmente o **Vim**). Essa tela serve para você confirmar ou editar a mensagem de commit do merge.

**O que está acontecendo:**

Você executou um `git pull`, e como havia alterações remotas e locais, o Git está fazendo um merge. Agora ele quer que você confirme ou edite a mensagem de commit.

**O que você pode fazer:**

- Para aceitar a mensagem padrão e continuar, siga estes passos:

1. Pressione a tecla `Esc` para sair do modo de edição.
2. Digite `:wq` (write e quit — salvar e sair).
3. Pressione `Enter`.

Isso vai salvar a mensagem de commit e finalizar o merge.

---

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
