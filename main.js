const brasil = [
    {
        cidade: "Jales",
        estado: "SP",
        regiao: "Sudeste",
        populacao: 49000
    },
    {
        cidade: "Aquidauana",
        estado: "MS",
        regiao: "Centro Oeste"
        , populacao: 45000
    },
    {
        cidade: "Três Fronteiras",
        estado: "SP",
        regiao: "Sudeste",
        populacao: 10000
    },
    {
        cidade: "Bonito",
        estado: "MS",
        regiao: "Centro Oeste"
        , populacao: 15000
    },
    {
        cidade: "Brusque",
        estado: "SC",
        regiao: "Sul",
        populacao: 80000
    },
    {
        cidade: "Porto Alegre",
        estado: "RS",
        regiao: "Sul",
        populacao: 1200000
    },
    {
        cidade: "Urânia",
        estado: "SP",
        regiao: "Sudeste",
        populacao: 19000
    },
    {
        cidade: "Manaus",
        estado: "AM",
        regiao: "Norte",
        populacao: 900000
    },
    {
        cidade: "Macapá",
        estado: "AP",
        regiao: "Norte",
        populacao: 500000
    },
    {
        cidade: "Fortaleza",
        estado: "CE",
        regiao: "Nordeste",
        populacao: 700000
    },
    {
        cidade: "Natal",
        estado: "RN",
        regiao: "Nordeste",
        populacao: 650000
    }
];

function mostrarEstados() {
    document.getElementById('Nordeste').innerHTML = '';
    document.getElementById('Norte').innerHTML = '';
    document.getElementById('CentroOeste').innerHTML = '';
    document.getElementById('Sudeste').innerHTML = '';
    document.getElementById('Sul').innerHTML = '';
    brasil.forEach(element => {
        switch (element.regiao) {
            case "Nordeste":
                document.getElementById('Nordeste').innerHTML += `${element.cidade} <br> ${element.estado} <br> ${element.regiao} <br> ${element.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.regiao) {
            case "Norte":
                document.getElementById('Norte').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.regiao) {
            case "Centro Oeste":
                document.getElementById('CentroOeste').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.regiao) {
            case "Sudeste":
                document.getElementById('Sudeste').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.regiao) {
            case "Sul":
                document.getElementById('Sul').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.estado) {
            case "SP":
                document.getElementById('sp').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.estado) {
            case "MS":
                document.getElementById('mg').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
    brasil.forEach(e => {
        switch (e.populacao < 50000) {
            case true:
                document.getElementById('hab').innerHTML += `${e.cidade} <br> ${e.estado} <br> ${e.regiao} <br> ${e.populacao} <br><br>`;
                break;
            default:
                break;
        }
    });
}