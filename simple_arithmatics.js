function add(a, b){
    return (a + b)
}

function sub(a, b){
    return (a - b)
}

exports.multiply = (a, b) =>{
    return (a * b)
}

exports.divide = (a, b) =>{
    return (a / b)
}

module.exports = {addition: add, sub} // Only add and sub will export as only export is allowed
// module.exports = {multiply, divide} // will throe multiply no defined as mentioned in steps file.