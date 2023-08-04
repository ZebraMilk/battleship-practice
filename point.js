const OG = { key1: 1, key2: 2 };

OG.name = 'OG';

const newG = OG;
const new2G = newG;
const new3G = new2G;

new3G.key1 = 3;

// Okay COOL! so assigning objects to another object all point to the same object. But...
// Are they equal?

console.log(OG);
