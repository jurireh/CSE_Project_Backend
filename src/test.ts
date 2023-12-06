export class Test {
    private name: string;

    constructor(name: string){
        this.name = name;
    }
    greetings(): string{
        return this.name;
    }
}
const test = new Test("huhu")
console.log(test.greetings())
console.log("hallo");