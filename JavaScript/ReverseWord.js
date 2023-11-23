function reverseWords(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    let reversedSentence = words.join(' ');
    return reversedSentence;
}

function reverseString(str) {
    let chars = str.split('');
    let reversedChars = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        reversedChars.push(chars[i]);
    }

    let reversedStr = reversedChars.join('');
    return reversedStr;
}

let inputSentence = "This is a sunny day";
let result = reverseWords(inputSentence);
console.log(result); 
