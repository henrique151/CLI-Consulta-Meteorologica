require("dotenv").config(); // para acessar o arquivo .env
console.log("Chave API do .env:", process.env.API_KEY);
const fetch = require("node-fetch"); // para fazer requisição HTTP

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(" Atenção! Por favor, informe o nome da cidade.");
  process.exit(1); // Encerra o programa com erro
}

const cidade = args.join(" ");

async function buscarClima(cidade) {
  try {
    const apiKey = process.env.API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cidade
    )}&appid=${apiKey}&units=metric&lang=pt_br`;

    const resposta = await fetch(url);

    if (!resposta.ok) {
      const erroTexto = await resposta.text();
      console.log("❌ Erro na resposta da API:");
      console.log(erroTexto);
      return;
    }

    const dados = await resposta.json();

    const temperatura = dados.main.temp;
    const descricao = dados.weather[0].description;

    console.log(`📍 Clima em ${cidade}:`);
    console.log(`🌡️ Temperatura: ${temperatura}°C`);
    console.log(`🌤️ Condição: ${descricao}`);
  } catch (erro) {
    console.error("⚠️ Erro ao buscar dados:", erro.message);
  }
}

buscarClima(cidade);
