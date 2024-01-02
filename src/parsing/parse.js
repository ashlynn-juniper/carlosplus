const { parseExpressionSync } = require("./expression");

function parseSync (sourceCode) {
    return parseExpressionSync(sourceCode);
}

module.exports = {
    parseSync
};
