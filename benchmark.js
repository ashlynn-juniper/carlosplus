const samples = [
    "x",
    "_x",
    "medium_variable",
    "an_even_longer_variable",
    "THE_AVERAGE_SIZED_CONSTANT",
    "__A_REALLY_LONG_SPECIAL_CONSTANT_DEFINED_BY_A_COMPILER__"
];

function emptyLine () {
    console.log();
}

function drawLine (length = 80) {
    console.log('-'.repeat(length));
}

function starTimer () {
    return Date.now() - Date.now();
}

function benchmark (f, testIterations = 1000000) {
    if (typeof testIterations !== 'number' || testIterations < 1) throw new RangeError("Test iterations must be greater than or equal to 1");
    let totalElapsedTime = starTimer();

    emptyLine();
    console.log("Benchmark: " + f.name.replace('benchmark', ''));
    drawLine();

    for (let sample of samples) {
        sample = [...sample];

        let startTime = Date.now();

        let result;

        for (let i = 0; i < testIterations; i++) {
            result = f(sample);
        }

        let endTime = Date.now();

        let elapsedTime = endTime - startTime;

        console.log('', `[${elapsedTime}] ${f.name}`);
        console.log('', "Input:", JSON.stringify(sample));
        console.log('', "Output:", result);
        drawLine();

        totalElapsedTime += elapsedTime;
    }

    console.log();
    console.log(`Total: ${totalElapsedTime}`);
    console.log();
    drawLine();

    return totalElapsedTime;
}

function benchmarkConcat (characterArray) {
    let result = "";

    for (let character of characterArray) {
        result += character;
    }

    return result;
}

function benchmarkJoin (characterArray) {
    return characterArray.join('');
}

const concatBenchmarkResult = benchmark(benchmarkConcat);
const joinBenchmarkResult = benchmark(benchmarkJoin);
