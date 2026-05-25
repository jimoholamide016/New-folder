
let state = {
  fitness: 50,
  morale: 50,
  tactics: 50,
  trainCount: 0,
  rallyCount: 0,
};
let train ={
    tactics: 5,
    fitness: 15,
    morale: -15,
}

let rally ={
    tactics: 5,
    fitness: -15,
    morale: 15,
}

    trainTeam = () => {
        state.fitness += 2*train.fitness;
        state.morale += 2*train.morale;
        state.tactics += 2*train.tactics;
    } 
    rallyTeam = () => {
        state.fitness += rally.fitness;
        state.morale += rally.morale;
        state.tactics += rally.tactics;

    }


checkreadiness = () => {
    if(state.fitness >= 70 && state.morale >= 70 && state.tactics >= 70){
        alert("Your team is ready for the match!");


    }    else{
        alert("Your team is not ready for the match. Keep training and rallying to improve your team's readiness.");
    }}

console.log("checking readiness");