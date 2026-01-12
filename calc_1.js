import promptSync from "prompt-sync"
const prompt = promptSync()

//const prompt = require("prompt-sync")
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function molt(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function main(){
    let a = parseFloat(prompt("inserisci il primo numero\n"))
    let b = parseFloat(prompt("inserisci il secondo numero\n"))
    while(1){
        console.log("+) somma")
        console.log("-) sottrazione")
        console.log("*) moltiplicazione")
        console.log("/) divisione")
        let scelta = prompt("0) esci\n")
        switch(scelta){
            case "+":
                console.log(`${a} ${scelta} ${b} = ${add(a,b)}`)
                break
            case "-":
                console.log(`${a} ${scelta} ${b} = ${sub(a,b)}`)
                break
            case "*":
                console.log(`${a} ${scelta} ${b} = ${molt(a,b)}`)
                break
            case "/":
                console.log(`${a} ${scelta} ${b} = ${div(a,b)}`)
                break
        }
        if (scelta == 0)
            break
    }
}

main();