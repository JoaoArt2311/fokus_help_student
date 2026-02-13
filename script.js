/*Ajuste do botão (mudança de cenario)*/
const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')

musica.loop = true

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})



/*Função (contexto)*/ 
function alterarContexto(contexto) {
    /*Animação na hora de clicar nos botões*/
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    
    /*Mudar titulos*/ 
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "desconso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</string>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

