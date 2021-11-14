let suma = (n, x, y) => {
    let suma = 0;
    for (let i=1; i<n; i++) {
        if (i%x === 0  ) {
            suma = suma + i;
        };
        if (i%y === 0) {
            suma = suma + i;
        };
    };
    console.log(suma);
};
suma(10, 3, 5);