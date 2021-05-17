let a: boolean = true;  //宣言省略してもOK
let b: number = 1;  //宣言省略してもOK
let c: string = "a";    //宣言省略してもOK

//void
function func(a: number, b: boolean) :number { 
    return a;
}

//array
let cc: string[] = ["a", "b"];
let bb: string[] = [1, 2];

//object
interface Hoge {
    a: number | null,   //変数aがnullでも大丈夫(| nullを入れるとnullable)
    b?: number, //変数vにbがなくても大丈夫(?を入れるとundefined)
    // ...
}

let v: Hoge = { a: 10, b: 20}