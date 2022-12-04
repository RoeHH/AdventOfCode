import backpacks from "./input.json" assert { type: "json" };

console.log(backpacks.map(bp=>[{a: bp.split("").slice(0, bp.length/2), b: bp.split("").slice(bp.length/2)}].map(splitBp=>splitBp.b.map(sBpBChar=>splitBp.a.includes(sBpBChar) ? sBpBChar : null).filter(a=>a !== null)).map(x=>x.at(0).charCodeAt(0) - 96 <  0 ? x.at(0).charCodeAt(0) - 38 : x.at(0).charCodeAt(0) - 96)).reduce((prev,cur)=>Number(prev)+Number(cur)))

let groupedBackpacks  = [] 
for (const [index,value]  of backpacks.entries()) {
  if(groupedBackpacks[Math.ceil((index + 1)/3)] === undefined)
    groupedBackpacks[Math.ceil((index + 1)/3)] = [] 
  groupedBackpacks[Math.ceil((index + 1)/3)].push(value)
}
for (const group of groupedBackpacks) {
  console.log(group);
  for (const c1 of group.at(0).split("")) {
    if(group.at(1).split("").includes(c1)&&group.at(2).split("").includes(c1))
      console.log(c1);
  } 
}








