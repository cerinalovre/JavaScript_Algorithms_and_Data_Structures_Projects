function rot13(str) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const inverse = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let decodedStr = "";

    for (let i = 0; i < str.length; i++) {
        let index = letters.indexOf(str[i]);
        if (index !== -1) {
            decodedStr += inverse[index];
        }
        else {
            decodedStr += str[i];
        } 
    }
    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));