function Card(filme) {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = filme.poster
    poster.alt = "Poster do filme " + filme.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = filme.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = filme.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    botao.href = filme.botao
    
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

const dados = 
[   {
    poster: "https://www.themoviedb.org/t/p/original/orOyVAUxVN1ncz2EcrMDcTd25e8.jpg",
    titulo: "Maze Runner",
    nota: "8,5",
    botao: "detalhes/detalhes.html"
    },
    {
    poster: "https://www.themoviedb.org/t/p/original/uDfNkMNnPTx5cOIHKs0T7jcMVJK.jpg",
    titulo: "Jogos Vorazes",
    nota: "BBB do futuro"
    },
    {
    poster: "https://image.tmdb.org/t/p/w200/6WImK7UIRY7fZ0l9UwnxbP74w1p.jpg",
    titulo: "10 coisas que eu odeio em você",
    nota:"Só a luisa gosta"
    },
    {
        poster:"https://www.themoviedb.org/t/p/original/2QlRq0MEx8IEODKNbGZyu3Sz5UV.jpg",
        titulo:"Avatar",
        nota:"Quem não ama"
    },
    {
        poster: "https://www.themoviedb.org/t/p/original/m8PpvsZqTb2RYYnPIF7DZii1DuA.jpg",
        titulo: "Star Wars: Episódio III - A Vingança dos Sith",
        nota: "10"
    }
]


let fimles = document.querySelector("#filmes")
dados.forEach((filme)=>{fimles.appendChild(Card(filme))})
