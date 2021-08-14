function verificaCPFInvalido(cpf) {
    const cpfInvalido = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]
    return cpfInvalido.indexOf(cpf) === -1;
}

function somaNumerosCPF(cpf, totalDigitos, peso) {
    let soma = 0;
    for (let indice = 1; indice <= totalDigitos; indice++) {
        soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
    }
    return soma;
}

function verificaDigito(cpf, totalDigitos, peso, digitoVerificado) {
    const soma = somaNumerosCPF(cpf, totalDigitos, peso);
    const resto = (soma * 10) % 11;
    return resto === digitoVerificado; 
}

function verificaPrimeiroDigito(cpf) {
    const peso = 11;
    const totalDigitosPrimeiraParte = 9;
    const digitoVerificado = parseInt(cpf.substring(9, 10));

    return verificaDigito(cpf, totalDigitosPrimeiraParte, peso, digitoVerificado);
}

function verificaSegundoDigito(cpf) {
    const peso = 12;
    const totalDigitosSegundaParte = 10;
    const digitoVerificado = parseInt(cpf.substring(10, 11));

    return verificaDigito(cpf, totalDigitosSegundaParte, peso, digitoVerificado);
}

function validaCPF(cpf) {
    return(
        verificaCPFInvalido(cpf) &&
        verificaPrimeiroDigito(cpf) &&
        verificaSegundoDigito(cpf)
    )
}