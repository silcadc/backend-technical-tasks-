//matrix n x n elements
//suma diagonales

//normal matrix
const matrix = (n) => {
    let results = [];
    let counter = 1;
    let suma = 0;

    for (let i = 0; i < n; i++) {
        results.push([])
    }
    for(let row=0; row<n; row++) {
        for(let column=0; column<n; column++) {
            results[row][column] = counter;
            counter = counter + 1;
        }
    }
    for(let i=0; i<n; i++){
        let samePositions_1 = results[i][i];
        suma = suma + samePositions_1
    }

    for(let i=0; i<n; i++){
        let samePositions_2 = results[i][n-1-i];
        suma = suma + samePositions_2
    }
    console.log(suma);
};
matrix(10);
