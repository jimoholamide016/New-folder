

let students = [
  { name: "John",  age: 20, score: 70 },
  { name: "Mary",  age: 22, score: 45 },
  { name: "Peter", age: 17, score: 88 }
];

function checkResult() {

  let schoolName = "Corestream Academy";
  console.log("School: " + schoolName);


  for (let i = 0; i < students.length; i++) {
    let s = students[i];



    if (s.score >= 50) {
      console.log(s.name + " passed with " + s.score);
    } else {
      console.log(s.name + " failed with " + s.score);
    }



    if (s.age > 18) {
      console.log(s.name + " is an adult");
    } else {
      console.log(s.name + " is not an adult");
    }
  }

  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].score;   
  }
  let average = total / students.length; 
  console.log("Average score is " + average);
}

checkResult();





students.push({ name: "Ada", age: 19, score: 92 });
checkResult(); 