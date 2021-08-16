const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    ' ': ' '
};

function decode(expr) {
    let biLettersArray = expr.match(/.{1,10}/g);
    let resultArray = [];
    for (let i = 0; i < biLettersArray.length; i++) {
        if (biLettersArray[i] === '**********') {
            resultArray.push(' ');
        } else {
            let strArr = biLettersArray[i].match(/.{1,2}/g);
            let morzArray = []
            for (let i = 0; i <= strArr.length; i++) {
                if (strArr[i] === '10' && i < strArr.length) {
                    morzArray.push('.')
                } else if (strArr[i] === '11' && i < strArr.length) {
                    morzArray.push('-')
                }
            }
            resultArray.push(morzArray.join(''))
        }
    }
    return (resultArray.map(x => x=== ' ' ? x: MORSE_TABLE[x]).join(''));
}

module.exports = {
    decode
}