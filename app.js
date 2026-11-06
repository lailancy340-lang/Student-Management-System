class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;

        this.name = name;

        this.grades = grades;

        this.attendance = attendance;

    }

    // Calculate average grade

    getAverageGrade() {

        let total = this.grades.reduce((sum, grade) => sum + grade, 0);

        return total / this.grades.length;

    }

    // Get student grade

    getGrade() {

        let average = this.getAverageGrade();

        if (average >= 90) {

            return "Excellent";

        } else if (average >= 80) {

            return "Very Good";

        } else if (average >= 70) {

            return "Good";

        } else if (average >= 50) {

            return "Passed";

        } else {

            return "Needs Review";

        }

    }

    // Check student result

    getResults() {

        if (this.getAverageGrade() >= 50 && this.attendance >= 75) {

            return "Passed";

        } else {

            return "Needs Review";

        }

    }

}

// Create students list

let studentsList = [

    new Student(1, "Laila", [40, 45, 45], 80),

    new Student(2, "Enas", [50, 48, 46], 90),

    new Student(3, "Esraa", [80, 85, 90], 95),

    new Student(4, "Ahmed", [65, 70, 75], 70)

];

// Display students

console.log("All Students:");

console.log(studentsList);

// Filter students with average between 40 and 49

let atRiskStudents = studentsList.filter(student => {

    let average = student.getAverageGrade();

    return average >= 40 && average <= 49;

});

console.log("At Risk Students:");

console.log(atRiskStudents);

// Add 5 bonus marks using map

let improvedStudents = atRiskStudents.map(student => {

    student.grades = student.grades.map(grade => grade + 5);

    return student;

});

console.log("Improved Students:");

console.log(improvedStudents);

// Calculate average after improvement using reduce

let totalAverage = improvedStudents.reduce((sum, student) => {

    return sum + student.getAverageGrade();

}, 0);

let finalAverage = totalAverage / improvedStudents.length;

console.log("Final Average After Improvement:");

console.log(finalAverage);

// Print student reports

console.log("Student Reports:");

studentsList.forEach(student => {

    console.log("--------------------");

    console.log("ID:", student.id);

    console.log("Name:", student.name);

    console.log("Average:", student.getAverageGrade());

    console.log("Grade:", student.getGrade());

    console.log("Result:", student.getResults());

    console.log("Attendance:", student.attendance);

});
