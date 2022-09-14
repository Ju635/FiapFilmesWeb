function Sobre(integrantes){
    let alunos = document.createElement("div")
    alunos.classList.add("alunos")
    
    let foto = document.createElement("img")
    foto.src = integrantes.foto
    foto.alt = "Foto de " + integrantes.nome
    
    let nome = document.createElement("p")
    nome.innerText = integrantes.nome

    let rm = document.createElement("p")
    rm.innerText = integrantes.rm

    alunos.appendChild(foto)
    alunos.appendChild(nome)
    alunos.appendChild(rm)

    return alunos
}
const dados = 
[
    {
    foto: "gabriel.jpg",
    nome: "Gabriel Cavaletti",
    rm: "Rm 84610"
    },
    {
    foto: "léo.jpg",
    nome: "Leonardo Liang",
    rm: "Rm 85445"   
    },
    {
    foto: "gustavo.jpg",
    nome: "Gustavo Kiyoto Fugita Shiose",
    rm: "Rm 85887"
    },
    {
    foto: "lucas.jpg",
    nome: "Lucas Simbelis Teixeira",
    rm: "Rm 85887"
    },
    {
    foto: "raul.jpg",
    nome: "Raul Nora Jardim Azevedo",
    rm: "Rm 79858"  
    }
]


let perfil = document.querySelector("#integrantes")
dados.forEach((integrantes)=>{perfil.appendChild(Sobre(integrantes))})
