import dotenv from "dotenv";

dotenv.config();

const cep = process.argv[2];

// Função para api cep
const zipCodeSearch = async () => {
  try {
    if (!cep || cep.length !== 8) {
      console.error(
        "Certifique-se de que o CEP foi informado e está no formato correto, com 8 dígitos numéricos e sem hífen. "
      );
      return null;
    }

    const urlCep = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(urlCep);
    const data = await response.json();

    if (data.erro) {
      console.error("Tente novamente, verifique o cep digitado!");
      return null;
    }

    return data.localidade || null;
  } catch (error) {
    return null;
  }
};

const city = await zipCodeSearch();

const API_KEY = process.env.API_KEY;

// Função para api clima
const weather = async () => {
  try {
    if (!city) {
      console.error("Cidade inválida, verifique o CEP.");
      return null;
    }

    if (!API_KEY) {
      console.error("Chave da API não configurada. Verifique o arquivo .env");
      return null;
    }

    const urlClimate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;
    const response = await fetch(urlClimate);

    if (!response.ok) {
      console.error(`Erro ao acessar API de clima: status ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (data.cod !== 200) {
      console.error(`API respondeu com erro: ${data.message}`);
      return null;
    }

    if (!data.main || !data.weather) {
      console.error("Resposta da API incompleta");
      return null;
    }

    const localizacao = data.name;
    const temperatura = data.main.temp;
    const descricao = data.weather[0].description;

    return console.log(
      `Hoje em ${localizacao}, o clima está com ${descricao}, e com temperatura de ${temperatura}°C`
    );
  } catch (error) {
    console.error("Erro ao buscar o clima:", error);
    return null;
  }
};

const clima = await weather();
if (clima === null) {
  console.log("Não foi possível obter o clima para o CEP informado.");
}
