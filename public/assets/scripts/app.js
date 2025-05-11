document.addEventListener("DOMContentLoaded", () => {
    const receitas = {
        feijoada: {
            titulo: "Feijoada",
            descricao: "Uma deliciosa feijoada brasileira.",
            imagem: "imagens/feijoada.jpg",
            ingredientes: ["Feijão preto", "Carne seca", "Linguiça", "Costelinha de porco", "Louro", "Alho", "Cebola"],
            modoPreparo: "Cozinhe o feijão com as carnes até ficarem macios. Refogue alho e cebola, adicione ao feijão e deixe apurar."
        },
        tropeiro: {
            titulo: "Feijão Tropeiro",
            descricao: "Receita tradicional de feijão tropeiro.",
            imagem: "imagens/tropeiro.jpg",
            ingredientes: ["Feijão", "Farinha de mandioca", "Linguiça", "Ovos", "Cebola", "Alho", "Cheiro-verde"],
            modoPreparo: "Cozinhe o feijão, refogue com os demais ingredientes e finalize com farinha de mandioca."
        },
        coxinha: {
            titulo: "Coxinha",
            descricao: "Coxinha crocante e saborosa.",
            imagem: "imagens/coxinha.jpg",
            ingredientes: ["Farinha de trigo", "Frango desfiado", "Caldo de galinha", "Leite", "Farinha de rosca", "Óleo"],
            modoPreparo: "Prepare a massa com leite e farinha, recheie com frango, molde e frite."
        },
        "pao-queijo": {
            titulo: "Pão de Queijo",
            descricao: "Pão de queijo mineiro.",
            imagem: "imagens/paoqueijo.jpg",
            ingredientes: ["Polvilho doce", "Queijo ralado", "Leite", "Óleo", "Ovos"],
            modoPreparo: "Misture os ingredientes, molde bolinhas e asse até dourar."
        },
        "bolinho-aipim": {
            titulo: "Bolinho de Aipim",
            descricao: "Bolinho de aipim recheado.",
            imagem: "imagens/bolinhoaipim.jpg",
            ingredientes: ["Aipim", "Carne moída", "Farinha de trigo", "Óleo", "Temperos"],
            modoPreparo: "Cozinhe o aipim, amasse, recheie com carne, molde e frite."
        },
        "caldo-feijao": {
            titulo: "Caldo de Feijão",
            descricao: "Caldo de feijão cremoso.",
            imagem: "imagens/caldofeijao.jpg",
            ingredientes: ["Feijão", "Bacon", "Cebola", "Alho", "Cheiro-verde"],
            modoPreparo: "Bata o feijão cozido, refogue com bacon e temperos, e sirva quente."
        },
        pastelzinho: {
            titulo: "Pastelzinho",
            descricao: "Pastelzinho frito recheado.",
            imagem: "imagens/pastelzinho.jpg",
            ingredientes: ["Massa de pastel", "Recheio a gosto", "Óleo"],
            modoPreparo: "Recheie a massa, feche bem e frite até dourar."
        },
        torresmo: {
            titulo: "Torresmo",
            descricao: "Torresmo crocante.",
            imagem: "imagens/torresmo.jpg",
            ingredientes: ["Panceta", "Sal", "Óleo"],
            modoPreparo: "Tempere a panceta, frite em óleo quente até ficar crocante."
        },
        pastel: {
            titulo: "Pastel",
            descricao: "Pastel recheado e frito.",
            imagem: "imagens/pastel.jpg",
            ingredientes: ["Massa de pastel", "Recheio a gosto", "Óleo"],
            modoPreparo: "Recheie a massa, feche bem e frite até dourar."
        },
        hamburguer: {
            titulo: "Hambúrguer",
            descricao: "Hambúrguer artesanal.",
            imagem: "imagens/hambúrguer.jpg",
            ingredientes: ["Pão de hambúrguer", "Carne moída", "Queijo", "Alface", "Tomate", "Molho"],
            modoPreparo: "Grelhe a carne, monte o hambúrguer com os ingredientes e sirva."
        },
        "cachorro-quente": {
            titulo: "Cachorro Quente",
            descricao: "Cachorro quente tradicional.",
            imagem: "imagens/cachorroquente.jpg",
            ingredientes: ["Pão de hot dog", "Salsicha", "Molho de tomate", "Batata palha"],
            modoPreparo: "Cozinhe a salsicha, monte no pão com molho e finalize com batata palha."
        },
        acaraje: {
            titulo: "Acarajé",
            descricao: "Acarajé baiano.",
            imagem: "imagens/acaraje.jpg",
            ingredientes: ["Feijão-fradinho", "Camarão seco", "Azeite de dendê", "Cebola"],
            modoPreparo: "Prepare a massa com feijão, frite no azeite de dendê e recheie com camarão."
        },
        "macarrao-bolonhesa": {
            titulo: "Macarrão à Bolonhesa",
            descricao: "Macarrão com molho à bolonhesa.",
            imagem: "imagens/macarrao.jpg",
            ingredientes: ["Macarrão", "Carne moída", "Molho de tomate", "Cebola", "Alho"],
            modoPreparo: "Cozinhe o macarrão, prepare o molho com carne e sirva juntos."
        },
        farofa: {
            titulo: "Farofa",
            descricao: "Farofa simples e saborosa.",
            imagem: "imagens/farofa.jpg",
            ingredientes: ["Farinha de mandioca", "Bacon", "Cebola", "Manteiga"],
            modoPreparo: "Refogue o bacon e a cebola, adicione a farinha e misture bem."
        },
        "fricasse-frango": {
            titulo: "Fricassê de Frango",
            descricao: "Fricassê cremoso de frango.",
            imagem: "imagens/fricasse.jpg",
            ingredientes: ["Frango desfiado", "Creme de leite", "Milho", "Batata palha", "Queijo"],
            modoPreparo: "Misture o frango com creme de leite e milho, cubra com queijo e leve ao forno."
        },
        vatapa: {
            titulo: "Vatapá",
            descricao: "Vatapá baiano.",
            imagem: "imagens/vatapa.jpg",
            ingredientes: ["Pão", "Leite de coco", "Amendoim", "Camarão seco", "Azeite de dendê"],
            modoPreparo: "Misture os ingredientes, cozinhe até engrossar e sirva quente."
        }
    };

    const containerReceitas = document.querySelector(".row");

    // Gera os cards dinamicamente na página inicial
    if (containerReceitas) {
        Object.keys(receitas).forEach(id => {
            const receita = receitas[id];
            const card = `
                <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
                        <div class="card-body text-center">
                            <a href="detalhes.html?id=${id}" class="detalhes-receita">
                                <h5 class="card-title">${receita.titulo}</h5>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            containerReceitas.innerHTML += card;
        });
    }

    // Carrega os detalhes da receita na página detalhes.html
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    };

    const receitaId = getQueryParam("id");
    if (receitaId && receitas[receitaId]) {
        const receita = receitas[receitaId];

        document.getElementById("titulo-receita").textContent = receita.titulo;
        document.getElementById("descricao-receita").textContent = receita.descricao;

        const imagemReceita = document.getElementById("imagem-receita");
        imagemReceita.src = receita.imagem;
        imagemReceita.alt = receita.titulo;

        const ingredientesList = document.getElementById("ingredientes-receita");
        ingredientesList.innerHTML = "";
        receita.ingredientes.forEach(ingrediente => {
            const li = document.createElement("li");
            li.textContent = ingrediente;
            ingredientesList.appendChild(li);
        });

        document.getElementById("modo-preparo-receita").textContent = receita.modoPreparo;
    }

    // Funcionalidade do menu lateral
    document.getElementById('menu-alternar').addEventListener('click', () => {
        const barraLateral = document.getElementById('barra-lateral');
        barraLateral.classList.toggle('show');
    });

    document.getElementById('botao-fechar').addEventListener('click', () => {
        const barraLateral = document.getElementById('barra-lateral');
        barraLateral.classList.remove('show');
    });
});