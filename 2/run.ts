
import {readLines} from "https://deno.land/std/io/mod.ts";

const getValue = (s: string) => s == "X" || s == "A" ? 1 : s == "Y" || s == "B" ? 2 : 3
const play = (p1: number,p2: number) => (p1 - p2) == -2 || (p1 - p2) == 1 ? 6 : (p1 - p2) == 0 ? 3 : 0
const getLosingValue = (oponent: number) => oponent == 1 ? 3 : oponent == 2 ? 1 : 2 
const getWiningValue = (oponent: number) => oponent == 1 ? 2 : oponent == 2 ? 3 : 1
const getValueForStrat = (strat: string, oponent: number) => strat == "X" ? getLosingValue(oponent) : strat == "Y" ? oponent : getWiningValue(oponent)

//1
let total = 0;
for await(const l of readLines(await Deno.open('./input.txt')))
  total += getValue(l.at(2) || "") + play(getValue(l.at(2) || ""), getValue(l.at(0) || ""))
console.log(total);

//2
total = 0;
for await(const l of readLines(await Deno.open('./input.txt')))
    total += getValueForStrat(l.at(2) || "", getValue(l.at(0) || "")) + play(getValueForStrat(l.at(2) || "", getValue(l.at(0) || "")), getValue(l.at(0) || ""))
console.log(total);