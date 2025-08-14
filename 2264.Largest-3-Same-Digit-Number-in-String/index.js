var largestGoodInteger = function (num) {
    let index = 1
    let next = 2
    let prev = 0
    let result = ""

    while (index <= num.length) {
        if (num[index] == num[prev] && num[prev] == num[next]) {
            if (result.length > 0) {
                if (num[index] > result[0]) {
                    result = num[index] + num[prev] + num[next]
                }
            }
            else {
                result = num[index] + num[prev] + num[next]
            }
        }
        index++
        next++
        prev++
    }

    return result
};

largestGoodInteger("6777133339"); // "777"
largestGoodInteger("2300019"); // "000"
largestGoodInteger("42352338"); // ""