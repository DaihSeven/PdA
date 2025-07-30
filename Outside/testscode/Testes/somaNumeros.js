function sumOfMinimums(array) {
    return array.reduce((acc, subArray) => {
        const minimo = Math.min(...subArray);
        return acc + minimo;
    }, 0);
}

console.log()