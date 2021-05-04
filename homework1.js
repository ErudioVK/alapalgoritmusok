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


// Harmadik feladat - függvény készítése az elemek típusának meghatározásához
console.log('Harmadik feladat - függvény, amely megvizsgálja az elem típusát és azt egy új tömbe adja vissza');

console.log('Ez egy pár soros megoldása a feladatnak, de nem a megadott feltételek szerint:');
const x = ['', 4, true];
console.log('Eredeti tömb:', (x));
let y = [];
for (i = 0; i < x.length; i++) {
  y[i] = typeof (x[i]);
}
console.log('Konvertált tömb:', (y));

