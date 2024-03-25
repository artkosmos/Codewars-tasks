// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
//determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const open = ['(', '{', '[']
    const close = [')', '}', ']']
    const brackets = []

    for (const bracket of s) {
        if (open.includes(bracket)) {
            brackets.push(bracket)
        } else {
            const lastOpenBracket = brackets.pop();
            const correspondingCloseBracket = close[open.indexOf(lastOpenBracket)];
            if (bracket !== correspondingCloseBracket) {
                return false;
            }
        }
    } 
    
    return brackets.length
}