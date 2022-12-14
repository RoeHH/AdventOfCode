import backpacks from "./input.json" assert { type: "json" };

console.log(backpacks.map(bp=>[{a: bp.split("").slice(0, bp.length/2), b: bp.split("").slice(bp.length/2)}].map(splitBp=>splitBp.b.map(sBpBChar=>splitBp.a.includes(sBpBChar) ? sBpBChar : null).filter(a=>a !== null)).map(x=>x.at(0).charCodeAt(0) - 96 <  0 ? x.at(0).charCodeAt(0) - 38 : x.at(0).charCodeAt(0) - 96)).reduce((prev,cur)=>Number(prev)+Number(cur)))

let groupedBackpacks  = [] 
for (const [index,value]  of backpacks.entries()) {
  if(groupedBackpacks[Math.ceil((index + 1)/3)-1] === undefined)
    groupedBackpacks[Math.ceil((index + 1)/3)-1] = [] 
  groupedBackpacks[Math.ceil((index + 1)/3)-1].push(value)
}
let runer = 0
let i = 0
console.log(groupedBackpacks.length);
console.log(groupedBackpacks.at(0));
groupedBackpacks.map(group=>{
  for (const c1 of group.at(0).split("")) {
    if(group.at(1).includes(c1) && group.at(2).includes(c1)){
      i++

      runer += c1.charCodeAt(0) - 96 <  0 ? c1.charCodeAt(0) - 38 : c1.charCodeAt(0) - 96
      console.log(c1, group.at(1), group.at(2), group.at(1).includes(c1) && group.at(2).includes(c1));
      break;
    }
  } 
});
console.log(runer);
console.log(i);






