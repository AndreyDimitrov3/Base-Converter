import {convertFromBinaryToDecimal, convertFromDecimalToLower} from './baseConverter.js';

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.toggleArithmetics').forEach(function(el) {
        el.addEventListener('click', function(){
            document.getElementById('binaryArithmeticsPopup').classList.toggle('hidden');
        });
    });

    document.getElementById('search').addEventListener('click', performCalculations);
    function performCalculations() {
        let input = document.getElementById('enterNumber').value;
        let fromBase = document.getElementById('fromBase').value;
        let toBase = document.getElementById('toBase').value;

        if(fromBase < 11 && fromBase > 1 && toBase < 11 && toBase > 1) {
            let decimalValue = convertFromBinaryToDecimal(input, fromBase);
            let lowerBaseValue = convertFromDecimalToLower(decimalValue, toBase);

            document.getElementById('answer').innerText = lowerBaseValue;
        } else {
            document.getElementById('answer').innerText = 'Enter correct values';
        }
    }

    document.getElementById('convert').addEventListener('click', performMathematics);
    function performMathematics() {
        let inputValue1 = document.getElementById('enterNumberArithmetics1').value;
        let inputValue2 = document.getElementById('enterNumberArithmetics2').value;

        let answer = mathematics(inputValue1, inputValue2);
        document.getElementById('answerArithmetics').innerText = answer;
    }

    document.getElementById('convert').addEventListener('click', mathematics);
    function mathematics(n1, n2) {
        const number1 = convertFromBinaryToDecimal(n1, 2);
        const number2 = convertFromBinaryToDecimal(n2, 2);
        let answer;

        if(document.getElementById('add').checked) answer = number1 + number2;
        if(document.getElementById('subtract').checked) answer = number1 - number2;
        if(document.getElementById('multiply').checked) answer = number1 * number2;

        return convertFromDecimalToLower(answer, 2);
    }
});
