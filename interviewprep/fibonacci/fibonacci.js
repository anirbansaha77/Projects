function fibonacci(input) {
    const arr = [];
    for (let i = 0; i < input; i += 1) {
        if (i === 0) {
            arr.push(1);
        } else if (i === 1){
            arr.push(1);
        } else {            
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr;
}
export default fibonacci;
