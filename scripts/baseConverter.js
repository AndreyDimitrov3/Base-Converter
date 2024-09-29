export function convertFromBinaryToDecimal(input, frBase) {
    let inputStr = String(input);
    let nArr = Array.from(inputStr, num => BigInt(num));
    let nArrDecimal = BigInt(nArr.length - 1);
    let base = BigInt(frBase);
    
    for(let i = 0; i < nArr.length; i++) {
        nArr[i] = nArr[i] * (base ** nArrDecimal);
        nArrDecimal -= 1n;
    }

    let result = nArr.reduce((a, b) => a + b, 0n);
    return result;
}


export function convertFromDecimalToLower(input, radix) {
    let inputNumber = BigInt(input);
    let remainder = [];

    while(inputNumber > 0) {
        if(inputNumber > 1) {
            remainder.push(inputNumber % BigInt(radix));
            inputNumber = inputNumber / BigInt(radix);
        } else {
            remainder.push(inputNumber);
            inputNumber = 0;
        }
    }

    return remainder.reverse().join('');
}
