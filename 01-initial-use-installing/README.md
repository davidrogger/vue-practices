# Vue JS

Começando a usar o Vue, é possivel usar o Vue diretamente no arquivo HTML por meio de CDN, adicionando o script com o link. Conforme o arquivo index.html na pasta CDN.

Usando CDN, é necessário definir uma referencia para o Vue, identificar onde será aplicado seu template, podemos indicar um id com o nome app:

Exemplo:

```
// Arquivo HTML

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello Vue</title>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="src/app.js" defer></script>
</head>
<body>
  <div id="app">
    <form id="app-form">
      <input type="text" v-model="input_name" placeholder="Digite seu nome">
      <input type="submit" value="Enviar" v-on:click="submitForm">
    </form>
    <p>Dados dinâmicos: {{ name }} </p>
    <p>Nome digitado: {{ input_name }} </p>
  </div>
</body>
</html>
```

No arquivo java, usamos a constante Vue, que coletamos usando o link CDN, usando o método createApp, para indicarmos onde o Vue, irá montar seu template para usarmos suas funcionalidades, no caso abaixo, criarmos usamos do metodo data, que seria sua árvore de estado, onde toda informação da aplicação pode ficar armazenada, para coleta e uso, como valores de algum calculo, nomes, etc...
Nessa data, foi cirado apenas um campo com um nome em branco, onde é possivel em um campo de input, adicionar um nome, onde ele mostra em tempo real a inserção do nome do input em um paragrafo.
Ja na parte de `methods` é definido todas funcionalidades referentes aquele template, nesse caso, foi criado o submitForm, que é responsavel por coletar o valor inserido no input, e aplicar no primeiro paragrafo na área de `{{ name }}`

```
// Arquivo javascript

const { createApp } = Vue;

const App = {
  data() {
    return {
      name: "",
      input_name: ""
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.name = this.input_name;
    }
  }
}

createApp(App).mount('#app');
```


#

Mais indicado é usando o CLI com o gerenciador de pacotes, para iniciar é usado o comando de ininicialização com:
```
npm init vue@latest
```

Ele inicializa a configuração do projeto, com os seguintes preenchimentos:
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

Após a confirmação de cada configuração necessária para concluir a instalação do Vue, é necessário acessar a pasta criada com o nome do projeto que foi definida, e realizar a instalação dos pacotes necessários para o funcionamento, criando o projeto CLI, usaria o comando `cd CLI && npm i`.

