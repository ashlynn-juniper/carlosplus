@{%
function single (values) {
    if (typeof values !== 'object' || !(values instanceof Array)) return values;

    return values[0];
}

function concat (values, delimiter = null) {
    if (typeof values !== 'object') return values;

    let result = '';

    let value = values[0];

    if (typeof value === 'string' && value.trim().length > 0) result += value.trim();
    else if (typeof value === 'number' || typeof value === 'boolean') result += value;
    else if (typeof value === 'object' && value !== null && value) {
        if (value instanceof Array) result += concat(value);
        else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
    }

    if (typeof delimiter === 'string') for (
        let i = 1;
        i < values.length;
        i++
    ) {
        let value = values[i];

        if (typeof value === 'string' && value.trim().length > 0) result += delimiter + value.trim();
        else if (typeof value === 'number' || typeof value === 'boolean') result += delimiter + value;
        else if (typeof value === 'object' && value !== null && value) {
            if (value instanceof Array) result += delimiter + concat(value);
            else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
        }
    } else for (
        let i = 1;
        i < values.length;
        i++
    ) {
        let value = values[i];

        if (typeof value === 'string' && value.trim().length > 0) result += value.trim();
        else if (typeof value === 'number' || typeof value === 'boolean') result += value;
        else if (typeof value === 'object' && value !== null && value) {
            if (value instanceof Array) result += concat(value);
            else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
        }
    }

    return result;
}

function concatTrimmed (values, delimiter = null) {
    if (typeof values !== 'object') return values;

    let result = '';

    let value = values[0];

    if (typeof value === 'string' && value.trim().length > 0) result += value.trim();
    else if (typeof value === 'number' || typeof value === 'boolean') result += value;
    else if (typeof value === 'object' && value !== null && value) {
        if (value instanceof Array) result += concat(value);
        else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
    }

    if (typeof delimiter === 'string') for (
        let i = 1;
        i < values.length;
        i++
    ) {
        let value = values[i];

        if (typeof value === 'string' && value.trim().length > 0) result += delimiter + value.trim();
        else if (typeof value === 'number' || typeof value === 'boolean') result += delimiter + value;
        else if (typeof value === 'object' && value !== null && value) {
            if (value instanceof Array) result += delimiter + concat(value);
            else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
        }
    } else for (
        let i = 1;
        i < values.length;
        i++
    ) {
        let value = values[i];

        if (typeof value === 'string' && value.trim().length > 0) result += value.trim();
        else if (typeof value === 'number' || typeof value === 'boolean') result += value;
        else if (typeof value === 'object' && value !== null && value) {
            if (value instanceof Array) result += concat(value);
            else throw new Error("Not yet implemented." + " (" + Object.getPrototypeOf(value).constructor.name + ")");
        }
    }

    return result;
}
%}
