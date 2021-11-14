//matrix n x n elements
//suma diagonales

//normal matrix
// const matrix = (n) => {
//     let results = [];
//     let counter = 1;
//     let suma = 0;

//     for (let i = 0; i < n; i++) {
//         results.push([])
//     }
//     for(let row=0; row<n; row++) {
//         for(let column=0; column<n; column++) {
//             results[row][column] = counter;
//             counter = counter + 1;
//         }
//     }
//     for(let i=0; i<n; i++){
//         let samePositions_1 = results[i][i];
//         suma = suma + samePositions_1
//     }

//     for(let i=0; i<n; i++){
//         let samePositions_2 = results[i][n-1-i];
//         suma = suma + samePositions_2
//     }
//     console.log(suma);
// };
// matrix(10);

//diagonal matrix
const matrix = (n) => {
    const results = [];
    let suma = 0;
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    //return results;
    console.log(results)
    for(let i=0; i<n; i++){
        let samePositions_1 = results[i][i];
        suma = suma + samePositions_1
    }

    for(let i=0; i<n; i++){
        let samePositions_2 = results[i][n-1-i];
        suma = suma + samePositions_2
    }
    console.log(suma);
}
matrix(5);
