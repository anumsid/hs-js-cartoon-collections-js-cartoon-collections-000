function dwarfRollCall(dwarves) {
var emptyArray=[]
for (var i=0;i<dwarves.length;i++){
var string=`${i+1}. ${dwarves[i]}`
emptyArray.push(string)
}
return emptyArray.join(` `)
}


function summonCaptainPlanet(planeteerCalls){
  var emptyArray=[]
  for (var i=0;i<planeteerCalls.length;i++){
  var string=planeteerCalls[i].toUpperCase() + "!";
  emptyArray.push(string)
  }
  return emptyArray
  }

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
