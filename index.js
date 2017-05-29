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
var emptyArray=[]
for (var i=0;i<words.length;i++){
if (words[i].length<=4){
  return false
}
else if (words[i].length>=4) {
  return true
}
}
}




function findTheCheese (foods) {


}
