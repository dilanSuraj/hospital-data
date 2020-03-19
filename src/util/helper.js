const capitalizedFirstLetter = (str) => {
    str = new String(str).toLowerCase().split(/(\s+)/).filter(function (e) { return e.trim().length > 0; });
    let strMod = "";

    for (let splittedWord of str) {

        strMod += (" " + splittedWord.charAt(0).toUpperCase() + splittedWord.slice(1))
        strMod = strMod.trim()
    }
    return strMod;
}

const modifiedDate = (date) => {
    let date_ = date;
    let hours_ = new Date(date_).getHours()
    let mins_ = new Date(date_).getMinutes()
    let secs_ = new Date(date_).getSeconds()

    return new Date(new Date(date_).setHours(hours_, mins_, secs_, 0))
}

module.exports = {
    capitalizedFirstLetter,
    modifiedDate
}

