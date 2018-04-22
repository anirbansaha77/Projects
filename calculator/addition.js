function sum(...params) {
    let result = 0;
    params.map((item) => {
        result += parseInt(item, 10);
        return result;
    });
    return result;
}

export default sum;
