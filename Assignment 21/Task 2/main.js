let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let uniqueFriends =Array.from(new Set(myFriends)).sort();

console.log(uniqueFriends);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']