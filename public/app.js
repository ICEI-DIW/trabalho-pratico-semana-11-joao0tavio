// Função para carregar receitas na página inicial
async function fetchReceitas() {
  const response = await fetch('http://localhost:3000/receitas');
  return await response.json();
}

async function carregarReceitas() {
  const receitas = await fetchReceitas();
  const container = document.getElementById('receitas-container');
  container.innerHTML = receitas.map(receita => `
    <div class="receita">
      <h2>${receita.nome}</h2>
      <p>${receita.descricao}</p>
      <a href="detalhes.html?id=${receita.id}">Ver detalhes</a>
    </div>
  `).join('');
}

// Função para carregar detalhes de uma receita
async function fetchReceitaById(id) {
  const response = await fetch(`http://localhost:3000/receitas/${id}`);
  return await response.json();
}

async function carregarDetalhesReceita() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const receita = await fetchReceitaById(id);
  const container = document.getElementById('detalhes-receita');
  container.innerHTML = `
    <h1>${receita.nome}</h1>
    <p>${receita.descricao}</p>
    <p>Ingredientes: ${receita.ingredientes.join(', ')}</p>
    <p>Modo de preparo: ${receita.modoPreparo}</p>
  `;
}

// Inicialização
if (document.getElementById('receitas-container')) {
  carregarReceitas();
} else if (document.getElementById('detalhes-receita')) {
  carregarDetalhesReceita();
}