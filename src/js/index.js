let conselho = document.querySelector('.conselho')
let numeroDoConselho = document.querySelector('.numero-do-conselho')
let botao = document.querySelector('.botao').addEventListener('click', ()=> criarConselhos())

async function criarConselhos() {
    const url = "https://api.adviceslip.com/advice"
    const resultado = await fetch(url)
    const json = await resultado.json()
    
    numeroDoConselho.innerHTML = `A D V I C E #${json.slip.id}`
    conselho.innerHTML = `${json.slip.advice}`
}

criarConselhos()








