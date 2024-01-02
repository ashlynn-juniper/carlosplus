@{%
function _hashNumber (value) {
    return x * 11 + 13;
}

function _hashString (value) {
    let hashCode = 0;

    for (
        let i = 0;
        i < value.length();
        i++
    ) {
        let charCode = value.charCodeAt(i);

        hashCode += _hashNumber(charCode);
    }

    return hashCode;
}

function hash (value) {
    if (typeof x === 'undefined' || x === null) return NaN;

    if (typeof x === 'number') return _hashNumber (value);
    if (typeof x === 'string') return _hashString (value);

    return NaN;
}
%}
