function sum(...params) {
    let sum = 0;
    params.map(item => {
        sum += parseInt(item);
    });
    return sum;
}

export default sum;