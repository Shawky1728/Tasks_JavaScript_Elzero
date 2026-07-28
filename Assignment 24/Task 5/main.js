// Needed Output

// use performance.now() to measure the time taken by the loop

let startTime = performance.now();

for (let i = 0; i < 99999 ; i++) {

  console.log(i);

}

let endTime = performance.now();

let timeTaken = endTime - startTime;

console.log(`Loop Took ${timeTaken.toFixed(0)} Milliseconds.`);

// "Loop Took 1921 Milliseconds."