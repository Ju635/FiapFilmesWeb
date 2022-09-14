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
    poster: "https://www.themoviedb.org/t/p/original/fbrW51pKioGIOX1NNbIEDeu1exH.jpg",
    titulo: "Ender's Game: O Jogo do Exterminador",
    nota: "8,5",
    botao: ""
    },
    {
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/9Xh4fYbcABTsF4cqPzMkD5QSv1z.jpg",
    titulo: "Indiana Jones e os Caçadores da Arca Perdida",
    nota: "10"
    },
    {
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/41I5E0L6eLtqfWQ4D6ix2dbarzo.jpg",
    titulo: "John Wick: De Volta ao Jogo",
    nota:"9,4"
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
