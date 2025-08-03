import dotenv from "dotenv"

dotenv.config();

const cep = process.argv[2];

// Função para api cep
const zipCodeSearch = async () => {

  try {

    if(!cep || cep.length !== 8) {
      console.error("Certifique-se de que o CEP foi informado e está no formato correto, com 8 dígitos numéricos e sem hífen. ")
      return
    }

  const urlCep = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await fetch(urlCep);

  const data = await response.json();

  if (data.erro) {
    console.error("Tente novamente, verifique o cep digitado!")
  }
  
  return data.localidade

  } catch (error) {
    return null
  }
  
};

const city = await zipCodeSearch();

const API_KEY = process.env.API_KEY

// Função para api clima
const weather = async () => {
  try {
    
    if(!city) {
      console.log("Cidade inválida, verifique o CEP.")
      return
    }

  const urlClimate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;

  const response = await fetch(urlClimate);

  const data = await response.json();
  
  if (data.error) {
    console.log("Verifique novamente o cep digitado!")
    return
  }

  const localizacao = data.name
  const temperatura = data.main.temp;
  const descricao = data.weather[0].description

  return console.log(`Hoje em ${localizacao}, o clima está com ${descricao}, e com temperatura de ${temperatura}°C`)

  } catch (error) {
    console.log(error)
  }
  
};

weather()