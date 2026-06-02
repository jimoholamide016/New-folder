
function getGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 45) {
    return "D";
  } else {
    return "F";
  }
}



function getGradeLabel(grade) {
  if (grade === "A") return "Distinction";
  if (grade === "B") return "very good";
  if (grade === "C") return "Pass";
  if (grade === "D") return "Just Pass";
  return "Fail";
}




function getMessage(name, score, grade) {
  if (grade === "A") {
    return "Exceptional work, " + name + "! A score of " + score + " puts you at the very top. Keep setting the standard!";
  } else if (grade === "B") {
    return "Well done, " + name + "! A score of " + score + " is a solid Merit. A little more effort and you'll reach Distinction.";
  } else if (grade === "C") {
    return "Good effort, " + name + ". A score of " + score + " earns a Pass. Focus on weak areas and aim higher next time.";
  } else if (grade === "D") {
    return "You made it, " + name + ", but only just. A score of " + score + " is a narrow pass. Let's strengthen your foundation.";
  } else {
    return "Don't be discouraged, " + name + ". A score of " + score + " means we need to go back to basics. You can do this!";
  }
}




function displayResult(name, score) {


    if (typeof score !== "number" || score < 0 || score > 100) {
    console.log("ERROR: Score must be a number between 0 and 100.");
    return;
  }

    if (!name || name.trim() === "") {
    console.log("ERROR: Student name cannot be empty.");
    return;
  }

  const grade = getGrade(score);
  const label = getGradeLabel(grade);
  const message = getMessage(name, score, grade);

  console.log("============================================");
  console.log("  STUDENT RESULT");
  console.log("============================================");
  console.log("  Name  : " + name);
  console.log("  Score : " + score + " / 100");
  console.log("  Grade : " + grade + " — " + label);
  console.log("--------------------------------------------");
  console.log("  " + message);
  console.log("============================================");
  console.log("");
}




function showGradeScale() {
  console.log("============================================");
  console.log("  GRADE SCALE");
  console.log("============================================");
  console.log("  A — Distinction  : 70 – 100");
  console.log("  B — Merit        : 60 – 69");
  console.log("  C — Pass         : 50 – 59");
  console.log("  D — Narrow Pass  : 45 – 49");
  console.log("  F — Fail         : 0  – 44");
  console.log("============================================");
  console.log("");
}



const students = [
  { name: "Ada Okafor",    score: 92 },
  { name: "John Mensah",   score: 70 },
  { name: "Mary Afolabi",  score: 55 },
  { name: "Peter Eze",     score: 47 },
  { name: "Tunde Balogun", score: 30 },
];

showGradeScale();

for (let i = 0; i < students.length; i++) {
  displayResult(students[i].name, students[i].score);
}



const totalScore = students.reduce(function(sum, s) {
  return sum + s.score;
}, 0);

const classAverage = Math.round(totalScore / students.length);
const classGrade   = getGrade(classAverage);

const passed = students.filter(function(s) { return s.score >= 45; });
const failed  = students.filter(function(s) { return s.score < 45; });

console.log("============================================");
console.log("  CLASS SUMMARY");
console.log("============================================");
console.log("  Total students : " + students.length);
console.log("  Passed         : " + passed.length);
console.log("  Failed         : " + failed.length);
console.log("  Class average  : " + classAverage + " / 100 (Grade " + classGrade + ")");
console.log("============================================");