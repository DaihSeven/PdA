//import chalk from 'chalk'; ____Pesquisar sobre

/*const get = fetch("https://rickandmortyapi.com/api/character/2");

get
  .then((response) => {
    const data = response.json();
    return data;
  })
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => console.log("Deu erro"));

*/
/*
// Função assíncrona para buscar dados da API
const getData = async () => { 
    // Faz a requisição à API (corrigido typo "charecter" para "character")
    const response = await fetch("https://rickandmortyapi.com/api/character/2"); 
    
    // Converte a resposta para JSON e imprime no console
    console.log(await response.json()); 
  }; 
  
  // Chama a função para executar
  getData();
*/
//Você devem consumir uma API, de sua preferência, utilizando fetch, função assíncrona e try/cath
// Função assíncrona para buscar endereço pelo CEP

async function buscarEndereco(cep) {
    try {
      // Faz a requisição à API ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
      
      // Converte a resposta para JSON
      const endereco = await response.json();
      
      // Verifica se o CEP foi encontrado
      if (endereco.erro) {
        throw new Error('CEP não encontrado');
      }
      
      // Retorna os dados do endereço
      return endereco;
      
    } catch (error) {
      // Captura e trata qualquer erro que ocorrer
      console.error('Erro ao buscar CEP:', error.message);
      return null;
    }
  }
  
  // Exemplo de uso:
  (async () => {
    const cep = '01001000';  // CEP da Praça da Sé em SP
    const endereco = await buscarEndereco(cep);
    
    if (endereco) {
      console.log('Endereço encontrado:');
      console.log(`CEP: ${endereco.cep}`);
      console.log(`Logradouro: ${endereco.logradouro}`);
      console.log(`Bairro: ${endereco.bairro}`);
      console.log(`Cidade/UF: ${endereco.localidade}/${endereco.uf}`);
    } else {
      console.log('Não foi possível obter o endereço.');
    }
  })();

/*
  const getData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/2');
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Ocorreu um erro ao buscar os dados:', error);
    }
  }
getData();
*/
/*// URL da API - endpoint para personagens
const url = 'https://rickandmortyapi.com/api/character';

// Fazendo a requisição com fetch
fetch(url)
  .then(response => {
    // Verifica se a resposta está OK (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then(data => {
    // Trabalha com os dados recebidos
    console.log('Personagens de Rick and Morty:');
    data.results.forEach(character => {
      console.log(`- ${character.name} (${character.species})`);
    });
  })
  .catch(error => {
    // Trata erros
    console.error('Ocorreu um erro ao buscar os dados:', error);
  });
  */