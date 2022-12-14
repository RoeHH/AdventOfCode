import {readLines} from "https://deno.land/std/io/mod.ts";
import { dir, file } from "./classes.ts";

const basedir = new dir("")
let curdir = basedir


for await(const l of readLines(await Deno.open('./input.txt'))){
    switch (l.slice(0,4)) {
        case "$ cd":
            if(l.slice(5) == "/"){
                curdir = basedir
            }else{
                curdir = curdir.cd(l.slice(5))
            }
            break;
        case "$ ls":
            break;
        case "dir ":
            break;
        default:
            curdir.addFile(l.split(" ").at(1),Number(l.split(" ").at(0)))
            break;
    }
}

let k = 0

k = it(basedir,k)

function it(d:dir, k:number) {
    for (const a of d.subDirs) {
        
        if(a.getSize()<100000){            k += a.getSize()}
        k = it(a, k)
    }   
    return k 
}

console.log(k);


const totals = 70000000
const upds = 30000000
const freeups = basedir.getSize() - (totals - upds)
console.log(freeups);

let s = sm(basedir,undefined) 

function sm(d:dir, sma:dir) {
    for (const a of d.subDirs) {
        
        if(a.getSize() >= freeups && (a.getSize()<sma?.getSize()||sma==undefined)){
            console.log(sma?.getSize(),a.getSize()>= freeups)
            sma = a
        }
        sma= sm(a,sma)

    }   
    return sma 
}

console.log(s.getSize());
