const CarlosPlus = require('..');

async function testParseExpression(input, expectedOutput) {
    expect(
        CarlosPlus.parseSync(input)
    ).toBe(
        expectedOutput
    );
}

test(
    'parses math expression',
    async () => {
        testParseExpression('10 + 5 / 3', '10+5/3');
    }
);

test(
    'parses parenthesis expression',
    async () => {
        testParseExpression('( 10 + 5 / 3 )', '(10+5/3)');
    }
);

test(
    'parses command call expression',
    async () => {
        testParseExpression('/add x y', 'add(x,y)');
        testParseExpression('/example foo bar foo_bar', 'example(foo,bar,foo_bar)');
    }
);
