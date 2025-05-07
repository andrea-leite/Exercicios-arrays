function transformarVetor(vetorOriginal: number[]): number[] {
  const vetorDobroTriplo: number [] = [];

    for (let i = 0; i < vetorOriginal.length; i++) {
    if (i % 2 === 0) { 
      vetorDobroTriplo[i] = vetorOriginal[i] * 2;
    } else { 
      vetorDobroTriplo[i] = vetorOriginal[i] * 3;
    }
  }
  return vetorDobroTriplo;
}
const vetorDeEntrada = [1, 2, 3, 4, 5];
const vetorTransformado = transformarVetor(vetorDeEntrada);
console.log("Vetor Original:", vetorDeEntrada);
console.log("Vetor Transformado:", vetorTransformado); 

