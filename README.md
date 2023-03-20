# Starting to learn Vue JS

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

# Projeto

Por padrão o vite ja cria pasta de src entre outras padrão para o desenvolvimento de sua aplicação. Nesse ambiente será criado arquivos vue, que serão os componentes para composição da aplicação desejada.

Para iniciar o projeto e ter uma visão da página padrão ja criada pelo vite, basta usar dentro da pasta do projeto o comando `npm run dev`.

## Componentes

Cada componente, possui uma estrutura em que é definido seu template, script e possivelmente seu style. Em sua tag de script, é definido seu nome e é exportado para ser possivel seu uso em outros componentes e páginas.

Exemplo:

```
<template>
  <div>
    <h1>
      My Component
    </h1>
    <button
      type="button"
    >
      Button event
    </button>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent'
  }
</script>

<style>
  h1 {
    color: purple;
  }
</style>
```

Os elementos apresentados no template que são os apresentados no HTML, só podem ter um elemento tag como pai, não sendo possivel usando vários, por isso é comum, termos um componente com uma div encapsulando todos elemtnso necessários nele.

## Armazenamento de manipulação de informação na aplicação

Para armazenarmos dados para mostrarmos em algum momento na aplicação ou manipularmos, no Vue é usado o Metodo data(), este método sempre retorna um objeto com as constantes que representam cada dado que será armazenado e usado na aplicação.

Exemplo:
```
<script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        savedData: 'My Saved Data'
      }
    }
  }
</script>
```

## Metodos no componente

Para realizarmos algum evento com reação sobre, algo no vue, como clique, mudança, é declara essa função no campo de methods.

Exemplo:
```
<script>
  export default {
    name: 'MyComponent'
  },
  methods: {
    clickHandler() {
      console.log('Button clicked')
    }
  }
</script>
```

Nesse caso foi criado um evento apenas para escrever no console a frase 'Button clicked', para definir esse evento no botão é usado o `@click` para definir que ao clicar no botão ele deve acionar o methodo indicado.
```
<template>
  <div>
    <button
      type="button"
      @click="clickHandler"
    >
      Button event
    </button>
  </div>
</template>
```

## Renderização condicional

É possivel definir uma condicional para renderização de elementos no template usando o v-if, v-else e v-show.

Exemplo:
Se o item for igual a 5 aparece o primeiro elemento, se não aparece o segundo:
```
<template>
  <div>
    <p
      v-if="example === 5"
    >
      Valor igual a 5
    </p>
    <p
      v-else
    >
      Valor diferente de 5
    </p>
  </div>
</template>
```

Agora só aparece  o elemento se a condição for verdadeira com v-show:
```
<template>
  <div>
    <p
      v-show="example === 5"
    >
      Valor igual a 5
    </p>
  </div>
</template>
```

## Atributos dinâmicos

É possivel também passar para os atributos de uma tag a informação armazenada no data, se você tem uma imagems ou um link, que deve ser representado diretamente do dado armazenado para a tag é possivel usando o `v-bind` ou com seu shortcut, usando o `:`.

Exemplo:
```
<p>Acesse meu link <a v-bind:href="link" target="_blank">aqui</a></p>
```
onde usamos o link, seria o nome da constante armazenada no data, que seria o link para o direcionamento, usando apenas o `:`
```
<p>Acesse meu link <a :href="link" target="_blank">aqui</a></p>
```
E esse bind pode ser usado para qualquer informação que deseja usar diferentamente em um atributo de uma tag.

## Fila de eventos

No Vue é possivel adicionar mais de um método quando definindo algum evento, seja por clique ou qualquer outra interação:

Exemplo
```
<div
  class="session"
>
  <button
    @click="firstEvent(), secondEvent(), lastEvent()"
  >
    Iniciar evento
  </button>
</div>
```

Os eventos são realizados de forma sequencial, porém o segundo evento não espera o primeiro encerrar para ser iniciado.

## Executando metodos de componentes filho para pai

É possivel ativar metodos que realizam alterações de informações de dados de um filho para um pai usando o metodo $emit.
Dentro do componente filho, se criado um evento de botão que altera alguma informação em seu pai, o evento click, deve chamar o metodo $emit indicando o nome do method, pai que será executado.

Exemplo:
```
<template>
  <button
    @click="$emit('changeImg')"
  >
    Mudar images
  </button>
</template>

<script>
  export default {
    name: 'ChangeImg',
    emits: ['changeImg']
  }
</script>
```

Este evento changeImg, existe no component pai do ChangeImg.
```
<script>
import ChangeImg from './ChangeImg.vue';

  export default {
    name: 'EmitProps',
    data() {
        return {
            avatar: '/img/avatar.png',
            description: 'avatar image'
        };
    },
    components: { ChangeImg },
    methods: {
      changeImg() {
        this.avatar = '/img/avatar2.png';
      }
    }
}
</script>
```

É alterada de forma estática a imagem, ao ativar o evento changeImg no componente pai que possui a imagem que é alterada.
