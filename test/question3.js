function getStatistics(marks) {
    var mark = marks.map(function (mark) { return mark.avgMark; });
    // let minMark = Math.min.apply(null, mark);
    // let maxMark = Math.max.apply(null, mark);
    var student = marks.map(function (mark) { return mark.name; });
    var avgMark = mark.reduce(function (a, b) {
        return a + b / 2;
    }, 0);
    return {
        avgMark: avgMark,
        highestMark: student[1],
        lowestMark: student[0]
    };
}
var testMarks = [{
        name: 'Vasya',
        avgMark: 3.75
    }, {
        name: 'Lena',
        avgMark: 4.89
    }];
console.log(getStatistics(testMarks));
