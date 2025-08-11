var mergeAlternately = function (word1, word2) {
    var result = ''
    var index = 0

    while (word1.length > index || word2.length > index) {
        if (index < word1.length) {
            result += word1[index]
        }

        if (index < word2.length) {
            result += word2[index]
        }

        index++
    }

    return result
};