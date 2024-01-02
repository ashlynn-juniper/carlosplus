// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "Value", "symbols": ["Variable"], "postprocess": (tokens) => tokens[0]},
    {"name": "Value", "symbols": ["Literal"], "postprocess": (tokens) => tokens[0]},
    {"name": "Literal", "symbols": ["NumberLiteral"], "postprocess": (tokens) => tokens[0]},
    {"name": "NumberLiteral", "symbols": ["percentage"], "postprocess": (tokens) => tokens[0]},
    {"name": "NumberLiteral", "symbols": ["decimal"], "postprocess": (tokens) => tokens[0]},
    {"name": "NumberLiteral", "symbols": ["int"], "postprocess": (tokens) => tokens[0]},
    {"name": "Variable", "symbols": ["Property"], "postprocess": (tokens) => tokens[0]},
    {"name": "Variable", "symbols": ["MangledVariable"], "postprocess": (tokens) => tokens[0]},
    {"name": "Variable", "symbols": ["AbsoluteVariable"], "postprocess": (tokens) => tokens[0]},
    {"name": "Property$ebnf$1", "symbols": ["MangledSymbol"], "postprocess": id},
    {"name": "Property$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Property", "symbols": ["AtSign", "Underscore", "Property$ebnf$1"], "postprocess": (tokens) => "this->" + tokens[1] + (tokens[2] ? tokens[2] : '')},
    {"name": "Property", "symbols": ["AtSign", "Symbol"], "postprocess": (tokens) => "this->" + tokens[1]},
    {"name": "AbsoluteVariable", "symbols": ["Symbol"], "postprocess": (tokens) => tokens[0]},
    {"name": "MangledVariable", "symbols": ["Underscore", "MangledSymbol"], "postprocess": (tokens) => tokens[0] + tokens[1]},
    {"name": "MangledSymbol", "symbols": ["Symbol"], "postprocess": (tokens) => hash(tokens[0])},
    {"name": "Symbol$ebnf$1", "symbols": []},
    {"name": "Symbol$ebnf$1", "symbols": ["Symbol$ebnf$1", /[A-Za-z0-9_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Symbol", "symbols": [/[A-Za-z_]/, "Symbol$ebnf$1"], "postprocess": (tokens) => tokens[0] + concat(tokens[1])},
    {"name": "Alpha", "symbols": [/[A-Za-z]/], "postprocess": (tokens) => tokens[0]},
    {"name": "Numeric", "symbols": [/[A-Za-z]/], "postprocess": (tokens) => tokens[0]},
    {"name": "AlphaNumeric", "symbols": [/[A-Za-z0-9]/], "postprocess": (tokens) => tokens[0]},
    {"name": "AlphaNumericUnderscore", "symbols": [/[A-Za-z0-9_]/], "postprocess": (tokens) => tokens[0]},
    {"name": "AtSign", "symbols": [{"literal":"@"}], "postprocess": (tokens) => tokens[0]},
    {"name": "Backtick", "symbols": [{"literal":"`"}], "postprocess": (tokens) => tokens[0]},
    {"name": "DoubleQuote", "symbols": [{"literal":"\""}], "postprocess": (tokens) => tokens[0]},
    {"name": "NewLine", "symbols": [{"literal":"\n"}], "postprocess": (tokens) => tokens[0]},
    {"name": "SingleQuote", "symbols": [{"literal":"'"}], "postprocess": (tokens) => tokens[0]},
    {"name": "Semicolon", "symbols": [{"literal":";"}], "postprocess": (tokens) => tokens[0]},
    {"name": "Slash", "symbols": [{"literal":"/"}], "postprocess": (tokens) => tokens[0]},
    {"name": "Underscore", "symbols": [{"literal":"_"}], "postprocess": (tokens) => tokens[0]},
    {"name": "Space$ebnf$1$subexpression$1", "symbols": [{"literal":" "}]},
    {"name": "Space$ebnf$1$subexpression$1", "symbols": [{"literal":"\t"}]},
    {"name": "Space$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}]},
    {"name": "Space$ebnf$1$subexpression$1", "symbols": [{"literal":"\r"}]},
    {"name": "Space$ebnf$1", "symbols": ["Space$ebnf$1$subexpression$1"]},
    {"name": "Space$ebnf$1$subexpression$2", "symbols": [{"literal":" "}]},
    {"name": "Space$ebnf$1$subexpression$2", "symbols": [{"literal":"\t"}]},
    {"name": "Space$ebnf$1$subexpression$2", "symbols": [{"literal":"\n"}]},
    {"name": "Space$ebnf$1$subexpression$2", "symbols": [{"literal":"\r"}]},
    {"name": "Space$ebnf$1", "symbols": ["Space$ebnf$1", "Space$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Space", "symbols": ["Space$ebnf$1"], "postprocess": (tokens) => concat(tokens)},
    {"name": "NonTerminalSpace$ebnf$1$subexpression$1", "symbols": [{"literal":" "}]},
    {"name": "NonTerminalSpace$ebnf$1$subexpression$1", "symbols": [{"literal":"\t"}]},
    {"name": "NonTerminalSpace$ebnf$1", "symbols": ["NonTerminalSpace$ebnf$1$subexpression$1"]},
    {"name": "NonTerminalSpace$ebnf$1$subexpression$2", "symbols": [{"literal":" "}]},
    {"name": "NonTerminalSpace$ebnf$1$subexpression$2", "symbols": [{"literal":"\t"}]},
    {"name": "NonTerminalSpace$ebnf$1", "symbols": ["NonTerminalSpace$ebnf$1", "NonTerminalSpace$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "NonTerminalSpace", "symbols": ["NonTerminalSpace$ebnf$1"], "postprocess": (tokens) => concat(tokens)},
    {"name": "TerminalSpace$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}]},
    {"name": "TerminalSpace$ebnf$1$subexpression$1", "symbols": [{"literal":"\r"}]},
    {"name": "TerminalSpace$ebnf$1", "symbols": ["TerminalSpace$ebnf$1$subexpression$1"]},
    {"name": "TerminalSpace$ebnf$1$subexpression$2", "symbols": [{"literal":"\n"}]},
    {"name": "TerminalSpace$ebnf$1$subexpression$2", "symbols": [{"literal":"\r"}]},
    {"name": "TerminalSpace$ebnf$1", "symbols": ["TerminalSpace$ebnf$1", "TerminalSpace$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "TerminalSpace", "symbols": ["TerminalSpace$ebnf$1"], "postprocess": (tokens) => concat(tokens)},
    {"name": "Expression", "symbols": ["ParenthesisExpression"], "postprocess": (tokens) => tokens[0]},
    {"name": "Expression", "symbols": ["CommandCallExpression"], "postprocess": (tokens) => tokens[0]},
    {"name": "Expression", "symbols": ["Sum"], "postprocess": (tokens) => tokens[0]},
    {"name": "ParenthesisExpression$ebnf$1", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "ParenthesisExpression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ParenthesisExpression$ebnf$2", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "ParenthesisExpression$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ParenthesisExpression", "symbols": [{"literal":"("}, "ParenthesisExpression$ebnf$1", "Expression", "ParenthesisExpression$ebnf$2", {"literal":")"}], "postprocess": (tokens) => concatTrimmed(tokens)},
    {"name": "Sum$ebnf$1", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Sum$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Sum$ebnf$2", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Sum$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Sum", "symbols": ["Sum", "Sum$ebnf$1", "SumOperator", "Sum$ebnf$2", "Product"], "postprocess": (tokens) => concatTrimmed(tokens)},
    {"name": "Sum", "symbols": ["Product"], "postprocess": (tokens) => single(tokens)},
    {"name": "Product$ebnf$1", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Product$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Product$ebnf$2", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Product$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Product", "symbols": ["Product", "Product$ebnf$1", "ProductOperator", "Product$ebnf$2", "Exponent"], "postprocess": (tokens) => concatTrimmed(tokens)},
    {"name": "Product", "symbols": ["Exponent"], "postprocess": (tokens) => single(tokens)},
    {"name": "Exponent$ebnf$1", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Exponent$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Exponent$ebnf$2", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "Exponent$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Exponent", "symbols": ["Value", "Exponent$ebnf$1", {"literal":"^"}, "Exponent$ebnf$2", "Exponent"], "postprocess": (tokens) => concatTrimmed(tokens)},
    {"name": "Exponent", "symbols": ["Value"], "postprocess": (tokens) => single(tokens)},
    {"name": "SumOperator$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "SumOperator$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "SumOperator", "symbols": ["SumOperator$subexpression$1"], "postprocess": (tokens) => tokens[0][0]},
    {"name": "ProductOperator$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "ProductOperator$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "ProductOperator", "symbols": ["ProductOperator$subexpression$1"], "postprocess": (tokens) => tokens[0][0]},
    {"name": "CommandCallExpression$ebnf$1", "symbols": ["NonTerminalSpace"], "postprocess": id},
    {"name": "CommandCallExpression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "CommandCallExpression", "symbols": ["Slash", "CommandCallExpression$ebnf$1", "Variable", "NonTerminalSpace", "CommandArguments"], "postprocess": (tokens) => tokens[2] + '(' + tokens[4] + ')'},
    {"name": "CommandArguments$ebnf$1$subexpression$1", "symbols": ["NonTerminalSpace", "Expression"]},
    {"name": "CommandArguments$ebnf$1", "symbols": ["CommandArguments$ebnf$1$subexpression$1"]},
    {"name": "CommandArguments$ebnf$1$subexpression$2", "symbols": ["NonTerminalSpace", "Expression"]},
    {"name": "CommandArguments$ebnf$1", "symbols": ["CommandArguments$ebnf$1", "CommandArguments$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CommandArguments", "symbols": ["Expression", "CommandArguments$ebnf$1"], "postprocess": (tokens) => tokens[0] + ',' + concatTrimmed(tokens[1], ',')},
    {"name": "CommandArguments", "symbols": ["Expression"], "postprocess": (tokens) => tokens[0]}
]
  , ParserStart: "Expression"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
