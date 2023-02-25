class Student {
    constructor(firstname, lastname, year){
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullname() {
        return `Your full name is ${this.firstname} ${this.lastname}`;
    }

    markLate() {
        this.tardies += 1;
        if(this.tardies >= 3) {
            return `Your are expelled!!`;
        }
        return `${this.firstname} ${this.lastname} has been late for ${this.tardies} times`;
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce((a, b)=> a+b)
        return sum/this.scores.length;
    }

    static enrollStudents(...students) {
        return `Enrolling students!`
    }
}

let firstStudent = new Student('colt', 'Steele', 1);
let secondStudent = new Student('Blue', 'Steele', 2);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755