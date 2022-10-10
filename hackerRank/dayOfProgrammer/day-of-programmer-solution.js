function dayOfProgrammer(year) {
    // Write your code here
    // since range is 1700 to 2700
    const numberOfDaysOfYear = getDays(year);
    const dayOfProgrammer = 256 - numberOfDaysOfYear;
    return dayOfProgrammer + '.' + '09' + '.' + year;
}

function getDays(year) {
    let firstEightMonths = [31, 30, 31, 30, 31, 31, 31];
    if (isLeapYear(year)) {
        firstEightMonths.push(29);
    } else {
        firstEightMonths.push(28);
    }
    const sum = firstEightMonths.reduce((a, b) => a + b);
    return year === 1918 ? (sum - 13) : sum;
}

function isLeapYear(year) {
    // isLeap year
    if (year > 1919) {
        return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    } else {
        return year % 4 === 0;
    }
}


module.exports = dayOfProgrammer;