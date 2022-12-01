import elfs from "./input.json" assert { type: "json" };

const sortedElfs = elfs.map((element,index)=> ({ index, calories: element.reduce((a,b)=>a+b) }))
                        .sort((a,b)=>b.calories-a.calories)

//Part 1
const proElf = sortedElfs.at(0)
console.log(
    "The Elf Carying the most calories is elf:",
    proElf?.index,
    "with",
    proElf?.calories,
    "calories"
);

//Part 2
const topThree = sortedElfs.slice(0,3)
console.log(
    "The top three elfs are:",
    ...topThree.map(e=>e.index),
    "they are carying",
    topThree.map(e=>e.calories).reduce((a,b)=>a+b)
);
