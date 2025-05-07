function separarPositivosNegativo(vetor1:number[], vetor2:number[]){

    const resultado:number[] = [];
    for (let i = 0;i < vetor1.length; i++){
        resultado[2 * i] = vetor1[i]
        resultado[2 * i+1] = vetor2[i]

    } 
    return resultado;
}

const vetorA: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const vetorB: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log(separarPositivosNegativo(vetorA, vetorB));

