function Detalhes(elenco){
    let atores = document.createElement("div")
    atores.classList.add("atores")
    
    let foto = document.createElement("img")
    foto.src = elenco.foto
    foto.alt = "Foto de " + elenco.nome
    
    let nome = document.createElement("p")
    nome.innerText = elenco.nome

    let personagem = document.createElement("p")
    personagem.innerText = elenco.personagem

    atores.appendChild(foto)
    atores.appendChild(nome)
    atores.appendChild(personagem)

    return atores
}
const dados = 
[
    {
    foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/oKsGrXKGrcVoQJQ6pbjZDPOQJcM.jpg",
    nome: "Kaya Scodelario",
    personagem: "Teresa Agnes"
    },
    {
    foto: "https://s2.glbimg.com/zimhGijZl0Mxtzzj6wtgnPmMnP4=/smart/e.glbimg.com/og/ed/f/original/2020/10/29/gettyimages-1282750178.jpg",
    nome: "Thomas Brodie-Sangster",
    personagem: "Newt"   
    },
    {
    foto: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9blYMaj79VGC6BHTLmJp3V5S8r3.jpg",
    nome: "Will Poulter",
    personagem: "Gally"
    }
]


let perfil = document.querySelector("#elenco")
dados.forEach((elenco)=>{perfil.appendChild(Detalhes(elenco))})
