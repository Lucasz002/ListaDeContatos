const form = document.getElementById('formContact');
const names = [];
const numbers = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputContactName = document.getElementById('contactName');
    const inputNumberContact = document.getElementById('numberContact');

    if (names.includes(inputContactName.value)) {
        alert(`O contato: ${inputContactName.value} já existe`);
    } else {
        names.push(inputContactName.value);
        numbers.push(inputNumberContact.value);
    
        let linha = '<tr>';
        linha += `<td>${inputContactName.value}</td>`;
        linha += `<td>${inputNumberContact.value}</td>`;
        linha += `<td><button onclick="removeLinha(${names.length - 1})">Remover</button></td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        inputContactName.value = '';
        inputNumberContact.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function removeLinha(index) {
    names.splice(index, 1);
    numbers.splice(index, 1);

    // Atualiza as linhas da tabela
    linhas = '';
    for (let i = 0; i < names.length; i++) {
        let linha = '<tr>';
        linha += `<td>${names[i]}</td>`;
        linha += `<td>${numbers[i]}</td>`;
        linha += `<td><button onclick="removeLinha(${i})">Remover</button></td>`;
        linha += '</tr>';
        linhas += linha;
    }

    atualizaTabela();
}
