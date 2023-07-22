function countVietnameseCharacters(inputString) {
    const vietnameseCharacters = ["aw", "aa", "dd", "ee", "oo", "ow", "w"];
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (vietnameseCharacters.includes(inputString[i])) {
            count++;
        } else if (
            i < inputString.length - 1 &&
            vietnameseCharacters.includes(inputString[i + 1])
        ) {
            count++;
        }
    }
    return count;
}

console.log(countVietnameseCharacters("hfdawhwhcoomdd")); // Output: 4