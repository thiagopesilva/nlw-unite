let participantes = [
  {
    nome: 'Thiago Silva',
    email: 'thiago@gmail.com',
    dataInscricao: new Date(2024, 2, 13, 19, 00 ),
    dataCheckIn: null
  },
  {
    nome: 'Higor Ferreira',
    email: 'higoor@gmail.com',
    dataInscricao: new Date(2024, 1, 10, 10, 20 ),
    dataCheckIn: new Date(2024, 1, 12, 20, 45)
  },
  {
    nome: 'Maria Silva',
    email: 'maria.silva@gmail.com',
    dataInscricao: new Date(2024, 0, 5, 15, 30),
    dataCheckIn: new Date(2024, 0, 10, 10, 00)
  },
  {
    nome: 'João Oliveira',
    email: 'joao.oliveira@gmail.com',
    dataInscricao: new Date(2024, 2, 2, 8, 45),
    dataCheckIn: null
  },
  {
    nome: 'Ana Souza',
    email: 'ana.souza@gmail.com',
    dataInscricao: new Date(2024, 0, 7, 11, 10),
    dataCheckIn: new Date(2024, 0, 11, 9, 30)
  },
  {
    nome: 'Pedro Santos',
    email: 'pedro.santos@gmail.com',
    dataInscricao: new Date(2024, 1, 1, 18, 20),
    dataCheckIn: new Date(2024, 1, 6, 16, 15)
  },
  {
    nome: 'Carla Oliveira',
    email: 'carla.oliveira@gmail.com',
    dataInscricao: new Date(2024, 2, 3, 14, 50),
    dataCheckIn: new Date(2024, 2, 9, 12, 40)
  },
  {
    nome: 'Rafaela Costa',
    email: 'rafaela.costa@gmail.com',
    dataInscricao: new Date(2024, 3, 1, 9, 0),
    dataCheckIn: null
  },
  {
    nome: 'Lucas Silva',
    email: 'lucas.silva@gmail.com',
    dataInscricao: new Date(2024, 3, 6, 16, 30),
    dataCheckIn: null
  },
  {
    nome: 'Mariana Santos',
    email: 'mariana.santos@gmail.com',
    dataInscricao: new Date(2024, 1, 6, 12, 15),
    dataCheckIn: new Date(2024, 2, 11, 11, 10)
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)
  
  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)

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

  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  //estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}  

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  //verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulário 
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}