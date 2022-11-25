var character ='pakistan'
if (character == character.toUpperCase()) {
console.log ('upper case true');
}
if (character == character.toLowerCase()){
 console.log('lower case true');
}

let time= 9
if(time>9){
console.log('you are late')
}else if(time<9){
console.log('good morning')
}else if(time<=9)
{
    console.log('take your breakfast')
}else if (time>=8){
    console.log('get out')
}else {
    console.log('have a nice day')
}


const age = 17;
const ownsCar = true;

if (age >= 16 && ownsCar) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
}



const boyfriendIsPaying = false;
const isSale = false;

if (boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}