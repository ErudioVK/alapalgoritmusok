// Első feladat - adott tömb elemei oszthatók-e kettővel
console.log('Első feladat - megvizsgáljuk, hogy az adott tömb elemei oszthatók-e kettóvel');
const nums = [3, 4, 9, 6, 2];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ': osztható');
  } else {
    console.log(nums[i] + ': nem osztható');
  }
}

// Második feldat - adott tömb elemeinek kiírása
console.log('Második feladat - kiírjuk a tömb elemeit a megfelelő indexével');
const players = ['Peter', 'Kate', 'John'];
for (let i = 0; i < players.length; i++) {
  console.log(i + 1 + '.', players[i]);
}


// Harmadik feladat 
console.log('Harmadik feladat - megvizsgáljuk a tömb elemének típusát és azt egy új tömbbe adjuk vissza');
const x = ['', 4, true];
console.log('Eredeti tömb:', (x));
let y = [];
for (i = 0; i < x.length; i++) {
  y[i] = typeof (x[i]);
}
console.log('Konvertált tömb:', (y));

