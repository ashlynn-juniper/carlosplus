@include "expressions.ne"

Statement ->
    Expression Semicolon
{% (tokens) => tokens[0] %}
