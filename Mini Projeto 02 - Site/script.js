const imagens = document.querySelectorAll('.imagens img')
const imagemAberta = document.querySelector('.imagemAberta img')
const fundoImagem = document.querySelector('.imagemAberta')

function abrirImagem (src) {
    fundoImagem.style.display = 'flex'
    imagemAberta.src = src
}

imagens.forEach( function (imagem) {
    imagem.addEventListener('click', function(event) {
        abrirImagem(event.target.src)
    })
})

fundoImagem.addEventListener('click', function() {
    fundoImagem.style.display = 'none'
})