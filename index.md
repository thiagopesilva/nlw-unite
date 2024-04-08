Para acessar as coisas acessar pelo link:
fronteditor.dev/nlw-unite

#  HTML
*Hypertext*


*Markup*

(< >)= são chamados de (tags) no # HTML
(<table>)= tabela
(<thead>)= cabeça da tabela
(<tr>)= linhas da tabela
(<td>)= informações das linhas da tabela
(<th>)= ?

*Language*




# CSS
Cascading StyleSheet

```css
/* declarações */
body{
  background-color: #121214;
  color: #ffffff;

}
```


# JavaScript
```js
// variaveis
const mensagem = "Oi, tudo bem?"
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)

// objeto javascript
const participante = {
  nome: 'Thiago Pereira',
  email: 'thiagopesilva25@gmail.com',
  dataInscricao: new Date(2024, 2, 13, 19, 00 ),
  dataCheckIn: new Date(2024, 2, 18, 17, 00)
}

// array começo
let participantes = [
  {
    nome: 'Thiago Pereira',
    email: 'thiagopesilva25@gmail.com',
    dataInscricao: new Date(2024, 2, 13, 19, 00 ),
    dataCheckIn: new Date(2024, 2, 18, 17, 00)
  },
]

// array com as informações do chatgpt
let participantes = [
  {
    nome: 'Thiago Pereira',
    email: 'thiagopesilva25@gmail.com',
    dataInscricao: new Date(2024, 2, 13, 19, 00 ),
    dataCheckIn: new Date(2024, 2, 18, 17, 00)
  },
  {
    nome: 'Higor Ferreira',
    email: 'higoor@gmail.com',
    dataInscricao: new Date(2024, 3, 10, 10, 20 ),
    dataCheckIn: new Date(2024, 3, 12, 20, 45)
  },
  {
    nome: 'Maria Silva',
    email: 'maria.silva@gmail.com',
    dataInscricao: new Date(2024, 3, 5, 15, 30),
    dataCheckIn: new Date(2024, 3, 10, 10, 00)
  },
  {
    nome: 'João Oliveira',
    email: 'joao.oliveira@gmail.com',
    dataInscricao: new Date(2024, 3, 2, 8, 45),
    dataCheckIn: new Date(2024, 3, 8, 14, 20)
  },
  {
    nome: 'Ana Souza',
    email: 'ana.souza@gmail.com',
    dataInscricao: new Date(2024, 3, 7, 11, 10),
    dataCheckIn: new Date(2024, 3, 11, 9, 30)
  },
  {
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
    dataInscricao: new Date(2024, 3, 1, 18, 20),
    dataCheckIn: new Date(2024, 3, 6, 16, 15)
  },
  {
    nome: 'Carla Oliveira',
    email: 'carla.oliveira@gmail.com',
    dataInscricao: new Date(2024, 3, 3, 14, 50),
    dataCheckIn: new Date(2024, 3, 9, 12, 40)
  },
  {
    nome: 'Rafaela Costa',
    email: 'rafaela.costa@gmail.com',
    dataInscricao: new Date(2024, 3, 9, 9, 0),
    dataCheckIn: new Date(2024, 3, 13, 8, 15)
  },
  {
    nome: 'Lucas Silva',
    email: 'lucas.silva@gmail.com',
    dataInscricao: new Date(2024, 3, 4, 16, 30),
    dataCheckIn: new Date(2024, 3, 7, 15, 20)
  },
  {
    nome: 'Mariana Santos',
    email: 'mariana.santos@gmail.com',
    dataInscricao: new Date(2024, 3, 6, 12, 15),
    dataCheckIn: new Date(2024, 3, 11, 11, 10)
  }
];

const atualizarLista = (participantes) => {
 // pegar informação do HTML


  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = criarNovoParticipante(participantes[2])
}  

atualizarLista(participantes[])

  // estrutura de repetição - loop
  for(let participante of participantes) {
    // faça alguma coisa
    // enquanto tiver participantes nessa lista
    output = output + criarNovoParticipante(participante)
  }

  // condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
```