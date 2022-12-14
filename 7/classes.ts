export class dir {
    subDirs: dir[] = []
    files: file[] = []
    parent: dir
    name: string

    constructor(public name:string,public parent: dir){    }

    cd(subDirName:string) {
        if(subDirName == ".."){
            return this.parent
        }
        for(const s of this.subDirs){
            console.log(s.name, subDirName,s.name==subDirName);
            
            if(s.name==subDirName){
                console.log(found);
                return found
            }
        }
        const n = new dir(subDirName, this)
        this.subDirs.push(n)
        return n
    }

    ls(){
        //haha fkk of i dont do ls shit
    }

    addFile(name:string,size:number){
        this.files.push(new file(name,size))
    }

    getSizeOfFiles(){
        let res = 0
        for (const f of this.files) {
            res += f.size 
        }
        return res
    }

    getSize(){
        let res = 0
        res += this.getSizeOfFiles()
        for (const d of this.subDirs) {
            res += d.getSize()
        }
        return res
    }
}
export class file {
    constructor(public name: string, public size: number){}

}