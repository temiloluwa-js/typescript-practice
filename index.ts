interface User {
    x: number;
    y: number;
}

type Userer = {
    x: number;
    y: number
}

function literal(x: string, answer: boolean){

}

literal("a", 2>3)

function liveDangerously(x?:number | null){
    console.log(x!.toFixed())
}

