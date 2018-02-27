module.exports = function check(str, bracketsConfig) {
    let expression = bracketsConfig.map((v) => {
        if (v.join('').replace(/[^\d]/g, '') != '') {
            return "(" + v.join("") + ")";
        }
        return "(\\" + v.join("\\") + ')';
    }).join('|');

    var regExp = new RegExp(expression,"g");
    let prevStr = '';
    while (prevStr != str && str) {
        prevStr = str;
        str = str.replace(regExp, '');
    }

    return str === '';
}
