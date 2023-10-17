// Js Cheatsheet

let arr = [1,2,3,4,2,3,1,4,6,];
let obj = {};
arr.map(e=> obj[e] = (obj[e] || 0) +1);
//obj = {1 : 2, 2 : 2, 3 : 3, 4 : 2, 6 : 1 }

// sort by nth char
const sortIt = (list, n) =>
  list.split(`, `)
    .sort((a, b) => a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()) || a.localeCompare(b))
    .join(`, `);

// find and replace
function args(cmd) {
  return cmd.replace(/[&;>|].*$/,'').trim().split(' ');
}

