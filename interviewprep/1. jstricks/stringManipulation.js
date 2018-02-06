export default class stringManipulation{
    constructor(input){
        this.str = input;
    }
    // this returns an array of chars to be printed
    printAllLetters() {
        const arr = [];
        for(let item of this.str) {
            arr.push(item);
        }
        //return this.str.split('');
        return arr;
    }

    reverse(input) {
        return(input.split('').reverse().join(''));
    }

    replaceCharacterGlobal(char, replacewith) {
        return this.str.replace(new RegExp(char, "g"), replacewith);
    }

    palindrome(inputStr) {
        /* remove special characters, spaces and make lowercase*/
        const input = inputStr.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        return input.toLowerCase().split('').reverse().join('') === input;
    }

    reverseWordsOfSentenceInPlace(input) {
        return input.split(' ').map((item) => {
            return item.split('').reduce((accumulator, initialval) => {
                // this reverses the letters
                return initialval+accumulator;
            });
        }).join(' ');
    }
}