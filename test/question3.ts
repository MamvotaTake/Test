interface Student {
    name: string;
    avgMark: number;
    
    
}

interface Statistics {
    avgMark: number;
    highestMark:string;
    lowestMark:string;
}

function getStatistics(marks: Student[]): Statistics {
    
    const mark = marks.map(mark => mark.avgMark);
    
    // let minMark = Math.min.apply(null, mark);
    // let maxMark = Math.max.apply(null, mark);

    const student = marks.map(mark => mark.name);

    let avgMark = mark.reduce(function (a, b) {
        return a + b / 2;
    }, 0);
    
    return {
        avgMark: avgMark,
        highestMark: student[1],
        lowestMark: student[0]
    };
    
}


const testMarks = [{
    name: 'Vasya',
    avgMark: 3.75
},{
    name: 'Lena',
    avgMark: 4.89
}]
console.log(getStatistics(testMarks));
