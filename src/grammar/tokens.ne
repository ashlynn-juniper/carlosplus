@builtin "number.ne"
@builtin "whitespace.ne"

@include "functions.ne"

Value ->
    Variable
{% (tokens) => tokens[0] %}
|   Literal
{% (tokens) => tokens[0] %}

Literal ->
    NumberLiteral
{% (tokens) => tokens[0] %}

NumberLiteral ->
    percentage
{% (tokens) => tokens[0] %}
|   decimal
{% (tokens) => tokens[0] %}
|   int
{% (tokens) => tokens[0] %}

Variable ->
    Property
{% (tokens) => tokens[0] %}
|   MangledVariable
{% (tokens) => tokens[0] %}
|   AbsoluteVariable
{% (tokens) => tokens[0] %}

Property ->
    AtSign Underscore MangledSymbol:?
{% (tokens) => "this->" + tokens[1] + (tokens[2] ? tokens[2] : '') %}
|   AtSign Symbol
{% (tokens) => "this->" + tokens[1] %}

AbsoluteVariable ->
    Symbol
{% (tokens) => tokens[0] %}

MangledVariable ->
    Underscore MangledSymbol
{% (tokens) => tokens[0] + tokens[1] %}

MangledSymbol ->
    Symbol
{% (tokens) => hash(tokens[0]) %}

Symbol ->
    [A-Za-z_] [A-Za-z0-9_]:*
{% (tokens) => tokens[0] + concat(tokens[1]) %}

Alpha -> [A-Za-z] {% (tokens) => tokens[0] %}

Numeric -> [A-Za-z] {% (tokens) => tokens[0] %}

AlphaNumeric -> [A-Za-z0-9] {% (tokens) => tokens[0] %}

AlphaNumericUnderscore -> [A-Za-z0-9_] {% (tokens) => tokens[0] %}

AtSign -> "@" {% (tokens) => tokens[0] %}
Backtick -> "`" {% (tokens) => tokens[0] %}
DoubleQuote -> "\"" {% (tokens) => tokens[0] %}
NewLine -> "\n" {% (tokens) => tokens[0] %}
SingleQuote -> "'" {% (tokens) => tokens[0] %}
Semicolon -> ";" {% (tokens) => tokens[0] %}
Slash -> "/" {% (tokens) => tokens[0] %}
Underscore -> "_" {% (tokens) => tokens[0] %}

Space -> (" " | "\t" | "\n" | "\r"):+ {% (tokens) => concat(tokens) %}
NonTerminalSpace -> (" " | "\t"):+ {% (tokens) => concat(tokens) %}
TerminalSpace -> ("\n" | "\r"):+ {% (tokens) => concat(tokens) %}
