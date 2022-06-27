![](https://i.imgur.com/xG74tOh.png)

## Consulta de países

O objetivo foi replicar as funcionalidades da página descrita abaixo:
- Sua página não deverá conter nenhum elemento no body além de um `<input class="busca">` e uma `<div class="paises">`
- Você deverá buscar informações da [seguinte API](https://restcountries.eu/#api-endpoints), mais especificamente [deste endpoint](https://restcountries.eu/rest/v2/all)
- As informações obrigatórias são:
    - Nome (name) um texto
    - Região (region) um texto
    - Capital (capital) um texto
    - População (population) um texto
    - Bandeira (flag) uma imagem
- Como você vai dispor os elementos fica a seu cargo, o importante é criá-los a partir do JavaScript e inseri-los dentro da `<div class="paises">`, uma sugestão pode ser:
    - Todas as informações dentro de uma `<div class="pais">`
    - Nome em um `<h2>`
    - Região em um `<span>`
    - Capital em um `<span>`
    - População em um `<p>`
    - Bandeira em um `<img>`
- Depois de popular sua página com as informações dos países, crie uma funcionalidade em que, quando o usuário pressionar a tecla "Enter" no seu `<input class="busca">`, os países com **nome** diferente da busca do usuário, deveram ser escondidos da tela (colocando o valor de *display* como *none* por exemplo)
