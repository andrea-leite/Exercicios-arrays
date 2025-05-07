function separarPositivosNegativos(vetorOriginal: number []) {
    const vetorPositivo: number[] = [];
    const vetorNegativo: number[] = [];
    let indicePositivo: number = 0;
    let indiceNegativo: number = 0;

    for (let i: number = 0; i < vetorOriginal.length; i++) {
        if(vetorOriginal[i] >= 0) {
            vetorPositivo[indicePositivo] = vetorOriginal[i];
            indicePositivo++
        }else {
            vetorNegativo[indiceNegativo] = vetorOriginal[i];
            indiceNegativo++
        }
    }

    return {
        vetorPositivo, vetorNegativo
    };
}
console.log(separarPositivosNegativos([-1,0,1,2,-4,5]))
