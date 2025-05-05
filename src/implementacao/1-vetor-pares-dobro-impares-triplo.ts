function transformarVetor(vetorOriginal: number[]): number[] {
  const vetorResultado: number[] = [];

  for (let i = 0; i < vetorOriginal.length; i++) {
    if (i % 2 === 0) {
      vetorResultado[i] = vetorOriginal[i] * 2;
    } else {      
      vetorResultado[i] = vetorOriginal[i] * 3;
    }
  }

  return vetorResultado;
}

const vetorDeEntrada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const vetorTransformado = transformarVetor(vetorDeEntrada);
console.log("Vetor Original:", vetorDeEntrada);
console.log("Vetor Transformado:", vetorTransformado);

