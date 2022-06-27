const imgLinhaMenu = document.querySelector('.imgLinha')
const menuAberto = document.querySelector('.menuAberto')
const imgXMenuAberto = document.querySelector('.sup1 img')

const arrayImagensCorpo = document.querySelectorAll('.corpo img')
const imagemModal = document.querySelector('.imgCentral img')
const modal = document.querySelector('.modal')
const imgXModal = document.querySelector('.btFechar img')
const coracaoModal = document.querySelector('.imgCoracaoModal')

const anterior = document.querySelector('.anterior')
const proximo = document.querySelector('.proximo')

function abrirMenu () {
    menuAberto.classList.remove('escondido')
}
imgLinhaMenu.addEventListener('click', abrirMenu)

function fecharMenu () {
    menuAberto.classList.add('escondido')
}
imgXMenuAberto.addEventListener('click', fecharMenu)

function abrirImagem (src) {
    imagemModal.src = src
    modal.classList.remove('escondido')
    anterior.classList.remove('escondido')
    proximo.classList.remove('escondido')

    if(imagemModal.src === arrayImagensCorpo[0].src) {
        anterior.classList.add('escondido') 
    }
    if(imagemModal.src === arrayImagensCorpo[18].src) {
        proximo.classList.add('escondido') 
    }

    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(arrayImagensCorpo[i].src === imagemModal.src) {
            if(!arrayImagensCorpo[i+1].classList.contains('escondido')) {
               coracaoModal.classList.remove('escondido') 
            } else {
               coracaoModal.classList.add('escondido') 
            }
        }
    }
}

arrayImagensCorpo.forEach( function (tipo) {
    tipo.addEventListener('click', function(event) {
        abrirImagem(event.target.src)
    })
})

function fecharModal () {
    modal.classList.add('escondido')
}
imgXModal.addEventListener('click', fecharModal)

function passarImagem () {
    anterior.classList.remove('escondido')
    coracaoModal.classList.add('escondido')

    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(imagemModal.src === arrayImagensCorpo[i].src) {
            imagemModal.src = arrayImagensCorpo[i+2].src
            break
        }
    }
    
    if(imagemModal.src === arrayImagensCorpo[18].src) {
        proximo.classList.add('escondido')
    }

    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(arrayImagensCorpo[i].src === imagemModal.src) {
            if(!arrayImagensCorpo[i+1].classList.contains('escondido')) {
               coracaoModal.classList.remove('escondido') 
            } else {
               coracaoModal.classList.add('escondido') 
            }
        }
    }
}
proximo.addEventListener('click', passarImagem)

function voltarImagem () {
    proximo.classList.remove('escondido')
    coracaoModal.classList.add('escondido')

    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(imagemModal.src === arrayImagensCorpo[i].src) {
            imagemModal.src = arrayImagensCorpo[i-2].src
            break
        }
    }

    if(imagemModal.src === arrayImagensCorpo[0].src) {
        anterior.classList.add('escondido')
    }

    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(arrayImagensCorpo[i].src === imagemModal.src) {
            if(!arrayImagensCorpo[i+1].classList.contains('escondido')) {
               coracaoModal.classList.remove('escondido') 
            } else {
               coracaoModal.classList.add('escondido') 
            }
        }
    }
}
anterior.addEventListener('click', voltarImagem)

function darLike () {
    for(let i = 0; i < arrayImagensCorpo.length; i++) {
        if(imagemModal.src === arrayImagensCorpo[i].src) {
            if(coracaoModal.classList.contains('escondido')) {
                coracaoModal.classList.remove('escondido')
                arrayImagensCorpo[i+1].classList.remove('escondido')
            } else {
                coracaoModal.classList.add('escondido')
                arrayImagensCorpo[i+1].classList.add('escondido')
            }
        break
        }
    }
}
imagemModal.addEventListener('dblclick', darLike)