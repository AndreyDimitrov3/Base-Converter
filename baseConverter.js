document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', performCalculations)

    function performCalculations() {
        let input = document.getElementById('enterNumber').value;
        let fromBase = document.getElementById('fromBase').value;
        let toBase = document.getElementById('toBase').value;

        if(fromBase < 17 && fromBase > 1 && toBase < 17 && toBase > 1) {
            let decimalValue = convertFromBinaryToDecimal(input, fromBase);
            let lowerBaseValue = convertFromDecimalToLower(decimalValue, toBase);

            document.getElementById('answer').innerText = lowerBaseValue;
        } else{
            document.getElementById('answer').innerText = 'Enter correct values';
        }
    }
    
    function convertFromBinaryToDecimal(input, frBase) {
        let inputStr = String(input);
        let nArr = Array.from(String(inputStr), num => BigInt(num));
        let nArrDecimal = BigInt(nArr.length - 1);
        let base = BigInt(frBase);
        
        for(let i = 0; i < nArr.length; i++) {
            nArr[i] = nArr[i] * (base ** nArrDecimal);
            nArrDecimal -= 1n;
        }
    
        let result = nArr.reduce((a, b) => a + b, 0n);
        
        return result;
    }
    
    
    function convertFromDecimalToLower(input, radix) {
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
})


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}
