// give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array

// Example
    // for sequence = [1,3,2,1], the output should be almostincreasing sequence (sequence) = false;
        // ther is no one element is this array that can be removed in oder to ge a strictly increasing sequenc.

    // for sequence = [1,2,3,4], the output should be almostincreasing sequence (sequence) = true;

// You can remove 3 form  the array to get a strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]

// input / output
    // [input]array.integer picture

// Hints - Nope

function almostIncreasingSequence(sequence) {
    let count = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (count > 1) return false;

            // Check if removing the previous element helps
            if (i > 1 && sequence[i] <= sequence[i - 2]) {
                // Check if removing the current element helps
                if (i + 1 < sequence.length && sequence[i + 1] <= sequence[i - 1]) {
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 2, 3, 4]));     // true
console.log(almostIncreasingSequence([1, 3, 2, 1]));     // false
console.log(almostIncreasingSequence([1, 3, 2]));        // true
console.log(almostIncreasingSequence([10, 1, 2, 3]));    // true
console.log(almostIncreasingSequence([1, 2, 5, 3, 5]));  // true