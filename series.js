function Card(series) {
    let card = document.createElement("div")
    card.classList.add("card")
    
    let poster = document.createElement("img")
    poster.src = series.poster
    poster.alt = "Poster da serie " + series.titulo
    
    let titulo = document.createElement("p")
    titulo.innerText = series.titulo
    
    let divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    let estrela = document.createElement("span")
    estrela.classList.add("material-icons")
    estrela.classList.add("estrela")
    estrela.innerText = "star"
    
    let nota = document.createElement("span")
    nota.innerText = series.nota
    
    divNota.appendChild(estrela)
    divNota.appendChild(nota)
    
    let botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerText = "detalhes"
    botao.href = series.botao
    
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)

    return card
}

const dado = 
[   {
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ciODOrRNku1PvFNEb1NcZ3wex3L.jpg",
    titulo: "Sandmanr",
    nota: "8,5",
    botao: " "
    },
    {
    poster: "https://www.themoviedb.org/t/p/original/xCM4vMGyc1qdi18UmyjLXqeYhtI.jpg",
    titulo: "The Vampire Diaries",
    nota: "8,4"
    },
    {
    poster: "https://media.fstatic.com/zT2-qJiQApzP8UHlxodfTsMYx8A=/210x312/smart/media/movies/covers/2013/05/97f855b4918d62d6d9c9f5f94521faa3.jpg",
    titulo: "Os Originais",
    nota:"8,4"
    },
    {
        poster:"https://i.pinimg.com/564x/75/e5/4c/75e54cabfb389c4397f981ca99ed6db6.jpg",
        titulo:"Supernatural",
        nota:"8,3"
    },
    {
        poster:"https://www.themoviedb.org/t/p/w220_and_h330_face/aNioAFrdtbKNrdcE1jAXuINxdwF.jpg",
        titulo:"Miraculos",
        nota:"10"
    }
]
let serie = document.querySelector("#series")
dado.forEach((series)=>{serie.appendChild(Card(series))})
