// Needed Output

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date = new Date();

date.setDate(0);

console.log(date.toString());

console.log(`Previous Month Is ${monthNames[date.getMonth()]} And Last Day Is ${date.getDate()}`);

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"