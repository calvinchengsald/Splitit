
const isNotBlank = (inputString) =>{
    if(!inputString) return false;
    if(inputString.trim()==="") return false;
    return true;
}

export {
    isNotBlank
}