function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.substr(1);
}

function capitalizeTheFirstLetterOfEachWord(words) {
    try {
        var separateWord = words.toLowerCase().split(' ');
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }
        return separateWord.join(' ');
    } catch (e) {
        return words;
    }
}

export {
    capitalize,
    capitalizeTheFirstLetterOfEachWord as cflew
};