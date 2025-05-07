function inverterVetor(vetorOriginal: number []): number [] {
    const vetorInvertido: number [] = [];

    for (let i = 0;i < vetorOriginal.length; i++) {
        vetorInvertido[i] = vetorOriginal[vetorOriginal.length - (i+1)]
        console.log("indice: " + i)
        console.log("indice final: " + (vetorOriginal.length - (i+1)))
    }
    
        return vetorInvertido;
}
const input4 = [1, 2, 3, 4, 5, 6];
console.log(inverterVetor(input4));
