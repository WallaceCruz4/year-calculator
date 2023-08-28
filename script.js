const dma = document.getElementById('dma');
const btn = document.getElementById('btn');
const anos = document.getElementById('anos');
const meses = document.getElementById('meses');
const dias = document.getElementById('dias');

btn.addEventListener('click', function() {
    const dataNascimento = new Date(dma.value);

    if (isNaN(dataNascimento)) {
        anos.textContent = "--";
        meses.textContent = "--";
        dias.textContent = "--";
        return;
    }

    const dataAtual = new Date();

    let anosDiferenca = dataAtual.getFullYear() - dataNascimento.getFullYear();
    let mesesDiferenca = dataAtual.getMonth() - dataNascimento.getMonth();
    let diasDiferenca = dataAtual.getDate() - dataNascimento.getDate();

    if (mesesDiferenca < 0 || (mesesDiferenca === 0 && diasDiferenca < 0)) {
        anosDiferenca--;
        mesesDiferenca += 12;
    }

    if (diasDiferenca < 0) {
        const ultimoDiaDoMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        diasDiferenca += ultimoDiaDoMesAnterior;
        mesesDiferenca--;
    }

    anos.textContent = anosDiferenca;
    meses.textContent = mesesDiferenca;
    dias.textContent = diasDiferenca;
});


















