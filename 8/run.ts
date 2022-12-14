const input = (await Deno.readTextFile("./test.txt")).split("\n").map(a=>a.split(""));
console.log(input);

const visible = (x:number, y:number) => {    
    let vr = true
    let vl = true
    let vt = true
    let vb = true
    for (let index = x + 1; input[y][index]; index++)       
        if(input[y][index] >= input[y][x])
            vr = false
    for (let index = x - 1; input[y][index]; index--)       
        if(input[y][index] >= input[y][x])
            vl = false
    for (let index = y - 1; input[index]; index--)       
        if(input[index][x] >= input[y][x])
            vt = false
    for (let index = y - 1; input[index]; index++)       
        if(input[index][x] >= input[y][x])
            vb = false
    return !(vr||vl||vt||vb)
}

let res = 0
for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
       
        res += visible(x,y) ? 0 : 1;
    }
}
console.log(res);
