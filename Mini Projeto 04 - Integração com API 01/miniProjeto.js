const inputNome = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const inputCep = document.querySelector('#cep')
const inputCidade = document.querySelector('#cidade')
const inputRua = document.querySelector('#rua')
const inputNumeroRua = document.querySelector('#numeroRua')
const mensagem = document.querySelector('.mensagem')

inputCep.addEventListener('change', function () {

    
    if(inputCep.value.length !== 8) {
        mensagem.classList.remove('escondido')
        inputCidade.value = ""
        inputRua.value = ""
    }
    
    if(inputCep.value === "") {
        mensagem.classList.add('escondido')
    }
    
    const promiseResposta = fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json()

        promiseBody.then(function (body) {
            console.log(body)
            inputCidade.value = body.localidade
            inputRua.value = body.logradouro
            mensagem.classList.add('escondido')
        })
    })
})