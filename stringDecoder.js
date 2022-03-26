const decoder = code => {
    let secretStr = code.split("")
    let result = ""

    for(let i = 0; i < secretStr.length; i ++){
        if(!isNaN(+secretStr[i])){
            i += +secretStr[i]
        } else{
            result += secretStr[i]
        }
    }
    return result
}
console.log(decoder("2jgR1ko2yis0e"))
// It will read "Rose"