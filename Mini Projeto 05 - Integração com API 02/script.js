const input = document.querySelector('input');
const div = document.querySelector('.paises');

const promiseResposta = fetch('https://restcountries.com/v3.1/all');

promiseResposta.then(function (resposta) {
    const promiseBody = resposta.json();

    promiseBody.then(function (corpo) {
        console.log(corpo)
        corpo.forEach(function (user) {
            const divPais = document.createElement('div');
            divPais.classList.add('divPais')

            const name = document.createElement('h2');
            name.textContent = user.name.common;

            const regiao = document.createElement('span');
            regiao.textContent = user.region;

            const capital = document.createElement('span');
            capital.textContent = user.capital;

            const populacao = document.createElement('p');
            populacao.textContent = user.population;

            const bandeira = document.createElement('img');
            bandeira.src = user.flags.png;

            divPais.append(name, regiao, capital, populacao, bandeira);
            div.append(divPais);

            input.addEventListener('keydown', function (event) {
                if (event.key !== 'Enter') return;
                
                function add () {
                    name.classList.add('none');
                    regiao.classList.add('none');
                    capital.classList.add('none');
                    populacao.classList.add('none');
                    bandeira.classList.add('none');
                }
                
                function remove () {
                    name.classList.remove('none');
                    regiao.classList.remove('none');
                    capital.classList.remove('none');
                    populacao.classList.remove('none');
                    bandeira.classList.remove('none');
                }

                if (input.value !== user.name.common) {
                    add()
                }

                if (input.value === "") {
                    remove()
                };

                if (input.value === user.name.common) {
                    remove()
                };
            })
        });
    });
});