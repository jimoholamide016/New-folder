let state = {
  fitness: 50,
  morale: 50,
  tactics: 50,
  trainCount: 0,
  rallyCount: 0,
};

let train = {
  tactics: 5,
  fitness: 15,
  morale: 15,

};

let rally = {
  tactics: 5,
  fitness: 15,
  morale: 15,
};

let trainTeam = () => {
  // Apply the configured train increments (no unintended extra multipliers)
  state.fitness += train.fitness;
  state.morale  += train.morale;
  state.tactics += train.tactics;

  state.trainCount++;

  console.log("Team trained!");
  console.log(state);
};

let rallyTeam = () => {
  // Apply rally increments as configured
  state.fitness += rally.fitness;
  state.morale  += rally.morale;
  state.tactics += rally.tactics;

  state.rallyCount++;

  console.log("Team rallied!");
  console.log(state);
};

let checkReadiness = () => {
  console.log("Fitness:", state.fitness);
  console.log("Morale:", state.morale);
  console.log("Tactics:", state.tactics);

  if (
    state.fitness >= 70 &&
    state.morale >= 70 &&
    state.tactics >= 70
  ) {
    console.log("Your team is ready for the match!");
  } else {
    console.log(
      "Your team is not ready for the match. Keep training and rallying."
    );
  }
};

console.log("Checking readiness...");

trainTeam();
rallyTeam();
checkReadiness();

const cars = ["Saab", "Volvo", "BMW"];
// Guard DOM access so this file can run in Node as well as the browser
if (typeof document !== 'undefined') {
  const el = document.getElementById("demo");
  if (el) el.innerHTML = cars.join(', ');
}