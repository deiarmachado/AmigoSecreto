const amigoInput = document.getElementById('amigo');
const adicionarBtn = document.getElementById('adicionar');
const listaAmigos = document.getElementById('listaAmigos');
const sortearBtn = document.getElementById('sortear');
const resultadoDiv = document.getElementById('resultado');

let amigos = [];

function adicionarAmigo() {
  amigos.push(amigoInput.value);
  amigoInput.value = '';
  const novoAmigo = document.createElement('div');
  novoAmigo.textContent = amigos[amigos.length - 1];
  listaAmigos.appendChild(novoAmigo); // Usando appendChild
}

function sortearAmigo() {
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  resultadoDiv.textContent = `O amigo secreto é: ${sorteado}`; // Usando textContent
}

adicionarBtn.onclick = adicionarAmigo;
sortearBtn.onclick = sortearAmigo;