const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3_000_000; //em centavos

const rendimentoLimite = 2_855_970; //em centavos

if ((aposentada) || (portadoraDeDoenca)){
    console.log("ISENTA");
}else{
    if (totalDeRendimentos > rendimentoLimite){ //transformei o valor em centavos (1 real = 100 centavos)
        console.log("PEGA LEAO");
    }else{
        console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
    }
}