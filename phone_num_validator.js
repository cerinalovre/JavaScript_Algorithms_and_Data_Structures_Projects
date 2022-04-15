// Regular expression was made using the https://regex101.com/ site

function telephoneCheck(str) {
    let regEx = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regEx.test(str)
}

console.log(telephoneCheck("1(555)555-5555"));