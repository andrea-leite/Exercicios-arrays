function contarNotasNaFaixa(notas: number[], media:number):string {
    const valorAcimaMedia: number  = media *1.1;
    const valorAbaixoMedia: number  = media *0.9;
    let contadorDeNotas = 0; 

    for (let i= 0; i < notas.length; i++){
        if(notas[i] <= valorAcimaMedia && notas[i] >= valorAbaixoMedia){
            contadorDeNotas++; 
        }
    } 

    return `${contadorDeNotas} estão entre ${valorAbaixoMedia.toFixed(1)} e ${valorAcimaMedia.toFixed(1)}`;
}

const notas: number[] = [
    7.5, 8.0, 6.5, 9.2, 5.8, 4.0, 10.0, 6.9, 8.3, 7.0,
    9.5, 3.6, 5.0, 8.7, 6.0, 4.5, 7.8, 6.4, 2.0, 5.2,
    9.0, 7.2, 8.1, 3.0, 6.6, 7.3, 9.8, 4.9, 5.5, 6.8,
    8.9, 7.7, 3.5, 6.1, 5.6, 2.5, 9.9, 6.2, 7.1, 4.3,
    5.7, 8.6, 9.1, 6.3, 4.1, 3.9, 7.6, 5.4, 2.8, 4.7
];

const media = 6;
console.log(contarNotasNaFaixa(notas,media));
