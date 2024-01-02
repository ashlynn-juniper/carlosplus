@include "functions.ne"
@include "tokens.ne"

Expression ->
    ParenthesisExpression
{% (tokens) => tokens[0] %}
|   CommandCallExpression
{% (tokens) => tokens[0] %}
|   Sum
{% (tokens) => tokens[0] %}

ParenthesisExpression ->
    "(" NonTerminalSpace:? Expression NonTerminalSpace:? ")"
{% (tokens) => concatTrimmed(tokens) %}

Sum ->
    Sum NonTerminalSpace:? SumOperator NonTerminalSpace:? Product
{% (tokens) => concatTrimmed(tokens) %}
|   Product
{% (tokens) => single(tokens) %}

Product ->
    Product NonTerminalSpace:? ProductOperator NonTerminalSpace:? Exponent
{% (tokens) => concatTrimmed(tokens) %}
|   Exponent
{% (tokens) => single(tokens) %}

Exponent ->
    Value NonTerminalSpace:? "^" NonTerminalSpace:? Exponent
{% (tokens) => concatTrimmed(tokens) %}
|   Value
{% (tokens) => single(tokens) %}

SumOperator -> ("+" | "-") {% (tokens) => tokens[0][0] %}
ProductOperator -> ("*" | "/") {% (tokens) => tokens[0][0] %}

CommandCallExpression ->
    Slash NonTerminalSpace:? Variable NonTerminalSpace CommandArguments
{% (tokens) => tokens[2] + '(' + tokens[4] + ')' %}

CommandArguments ->
    Expression (NonTerminalSpace Expression):+
{% (tokens) => tokens[0] + ',' + concatTrimmed(tokens[1], ',') %}
|   Expression
{% (tokens) => tokens[0] %}
