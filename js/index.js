const hacker1 = "Rodrigo";
console.log(`The driver name is ${hacker1}`);
const hacker2 = "Erick";
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names ${hacker2.length} characters.`)
}

//Iteration 3: Loops.

let spaceDriver = " ";
let driverUpperCase = hacker1.toUpperCase()
for(i=0; hacker1.length > i; i++){
    spaceDriver += driverUpperCase[i] + ' ';
}
spaceDriver = spaceDriver.trim()
console.log(spaceDriver);

let reverseNavigator = " ";
for(i = hacker2.length; i >= 0; i--){
  reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);

let nameOrder = hacker2.localeCompare(hacker1);
    if(nameOrder > 0){
       console.log("The driver's name goes firts");
    }else if(nameOrder < 0){
       console.log("Yo, the navigator goes first definitely.");
    }else{
        console.log("What?! You both have the same name?");
    }