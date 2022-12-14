import elfgroups from "./input.json" assert { type: "json" };

let runner = 0;
elfgroups.map(elfs=>{
    runner += elfs.elf1.start >= elfs.elf2.start && elfs.elf1.end <= elfs.elf2.end || elfs.elf2.start >= elfs.elf1.start && elfs.elf2.end <= elfs.elf1.end ? 1 : 0
})
console.log(runner);
runner = 0;
elfgroups.map(elfs=>{
    runner += elfs.elf1.start <= elfs.elf2.start && elfs.elf1.end >= elfs.elf2.start || elfs.elf1.start <= elfs.elf2.end && elfs.elf1.end >= elfs.elf2.end || elfs.elf2.start <= elfs.elf1.start && elfs.elf2.end >= elfs.elf1.start || elfs.elf2.start <= elfs.elf1.end && elfs.elf2.end >= elfs.elf1.end ? 1 : 0
})
console.log(runner);
