// smartConvert(value, measurement: number = SMART_DEFAULT_VALUE) { // original line
function smartConvert(value, measurement) {
    if (measurement === 4 && value === 1234567890) {
        debugger;
    }
    let processedValue = { value: '', unitname: undefined };
    const units = ['k', 'M', 'B', 'T'];
    const unit = Math.floor((Number(Math.abs(value)).toFixed(0).length - 1) / measurement) * measurement;
    const scaledValue = (value / Number(('1e' + unit)));
    processedValue['value'] = autoRound(scaledValue);
    processedValue['unitname'] = units[Math.floor(unit / measurement) - 1];
    return processedValue;
}
function autoRound(value) {
    if (value >= 1e2 || value <= -1e2) {
        return roundTo(value, 0);
    }
    if (value >= 1e1 || value <= -1e1) {
        return roundTo(value, 1);
    }
    if (value >= 1e0 || value <= -1e0) {
        return roundTo(value, 2);
    }
    if (value < 1 && value > -1) {
        return roundTo(value, 2);
    }
}
function roundTo(num, scale) {
    let roundNumber = num + "e+" + scale;
    return +(Math.round(roundNumber) + "e-" + scale);
}
let numbers = [
    -1234567890,
    -123456789,
    -12345678,
    -1234567,
    -123456,
    -12345,
    -1234,
    -123,
    -12,
    -1,
    0,
    1,
    12,
    123,
    1234,
    12345,
    123456,
    1234567,
    12345678,
    123456789,
    1234567890
];
function testSmartNumbers(smartUnit) {
    console.log("SMART UNIT >> ", smartUnit);
    for (let number of numbers) {
        console.log("whole > " + number, smartConvert(number, smartUnit).value, smartConvert(number, smartUnit).unitname);
    }
}
;
console.log('running');
testSmartNumbers(4);
//# sourceMappingURL=index.js.map