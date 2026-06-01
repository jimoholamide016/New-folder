

let students = [
  { name: "Olamide", 
     age: 20, 
     score: 70 },

  { name: "Shamsudeen", 
     age: 12, 
     score: 30 },

  { name: "Abubakar",
     age: 17, 
     score: 88 },
 {
      name: "Muhammad",
      age : 20,
      score : 36
     }
];

function checkResult( ) {

  let schoolName = "Corestream Academy";
  console.log("School:" + schoolName);


  for (let i = 0; i < students.length; i++) {
    let s = students[i];



    if (s.score >= 39) {
      console.log(s.name + " passed with " + s.score);
    } else {
      console.log(s.name + " failed with " + s.score);
    }



    if (s.age > 18) {
      console.log(s.name + " is an adult");
    } else {
      console.log(s.name + " is a child");
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





 