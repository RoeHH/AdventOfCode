const crates = [["G","T","R","W"],
                ["G","C","H","P","M","S","V","M"],
                ["C","L","T","S","G","M"],
                ["J","H","D","M","W","R","F"],
                ["P","Q","L","H","S","W","F","J"],
                ["P","J","D","N","F","M","S"],
                ["Z","B","D","F","G","C","S","J"],
                ["R","T","B"],
                ["H","N","W","L","C"]] 


import {readLines} from "https://deno.land/std/io/mod.ts";

for await(const l of readLines(await Deno.open('./input.txt')))
    moveCrates9001(Number(l.split(" ")[3])-1,Number(l.split(" ")[5])-1,Number(l.split(" ")[1]))

for (const c of crates)
    console.log(c.pop());

function moveCrates9000(from:number,to:number,amount:number) {
    crates[to].push(crates[from].pop())

    if (amount>1) {
        moveCrates9000(from,to,amount-1)
    }
}

function moveCrates9001(from:number,to:number,amount:number) {
    crates[to].push(...crates[from].splice(crates[from].length - amount))    
}