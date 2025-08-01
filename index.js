#!/usr/bin/env node

import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const city = process.argv[2];

if (!city) {
  console.log('Por favor, informe uma cidade. Ex: node index.js Recife');
  process.exit(1);
}

const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=pt_br&units=metric`;

async function getWeather() {
  const response = await fetch(URL);
  const data = await response.json();

  if (data.cod !== 200) {
    console.error(`Erro: ${data.message}`);
    process.exit(1);
  }

  console.log(`Clima em ${data.name}, ${data.sys.country}`);
  console.log(`Temperatura: ${data.main.temp}°C`);
  console.log(`Condição: ${data.weather[0].description}`);
  console.log(` Vento: ${data.wind.speed} km/h`);
}

getWeather().catch(error => {
  console.error('Erro ao buscar os dados:', error.message);
});


