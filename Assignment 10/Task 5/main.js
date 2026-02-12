let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let Output = [];

for(let i= +false;i<friends.length;i++){
    if(friends[i][+false].toLowerCase() != letter.charAt(+false)){
        Output.push(friends[i]);
    }
}

for(let i =+false;i<Output.length;i++){
    console.log(`${i+true} => ${Output[i]}`)
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"