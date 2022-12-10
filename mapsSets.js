// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// returns a new Set with no duplicates: Set(4) {1,2,3,4};

// What does the following code return?
[...new Set('referee')].join('');
// returns the string 'referee' with no duplicate letters: 'ref';

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// the Map stores both seperately: {Array(3) => false, Array(3) => true};

// Write a function called hasDuplicate that returns true or false if that array contains a duplicate:
const hasDuplicate = (array) => {
    return new Set(arr).size !== arr.length;
};

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
// and the values are the count of the vowels in the string. After reviewing the solution, edited to add 
// lowercase and helper function beforehand.
const isVowel = (letter) => {
    return 'aeiou'.includes(letter);
};
const vowelCount = (string) => {
    let vowelMap = new Map();
    for (let letter of string) {
        let lowerCaseLetter = letter.toLowerCase();
        if (isVowel(lowerCaseLetter)){
            if (vowelMap.has(lowerCaseLetter)){
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) +1); 
            } else {
                vowelMap.set(lowerCaseLetter, 1)
            };
        }
    }
    return vowelMap;
};