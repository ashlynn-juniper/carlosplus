const {
    Grammar,
    Parser
} = require('nearley');

const compiledGrammar = require('../grammar/expression');

const grammar = Grammar.fromCompiled(compiledGrammar);

class ExpressionParser {
    constructor () {
        this._results = [];

        this._resetParser();
    }

    feed (sourceCode, returnAllResults = false) {
        this._parser.feed (sourceCode);

        this._results = this._parser.results;

        this._resetParser ();

        if (returnAllResults) return this.results();
        else return this.result();
    }

    parse (sourceCode, returnAllResults = false) {
        this.feed (sourceCode);

        this._resetParser ();

        if (returnAllResults) return this.results();
        else return this.result();
    }

    result () {
        return this.results()[0].toString();
    }

    results () {
        const results = [];

        for (let result of this._results) {
            results.push(result.toString());
        }

        return results;
    }

    _resetParser () {
        this._parser = new Parser(grammar);
    }
}

function parseExpressionSync (sourceCode, returnAllResults = false) {
    const parser = new ExpressionParser();

    return parser.parse (
        sourceCode,
        returnAllResults
    );
}

module.exports = {
    ExpressionParser,
    parseExpressionSync
};
