function add(a, b){
    return a + b;
};

function sub(a, b){
    return a - b;
};

function multi(a, b){
    return a * b;
};

function divi(a, b){
    return a / b;
};

function operate(operator, num1, num2){
    if (operator == "+"){
        return add(num1, num2);
    } else if (operator == "-"){
        return sub(num1, num2);
    } else if (operator == "x"){
        return multi(num1, num2);
    } else {
        return divi(num1, num2);
    }
}

let oldc = 0;
let fn = 0;
let sn = 0;
let ho = "";

const op = document.querySelectorAll(".ops").forEach(ok => {
    ok.addEventListener("click", e => {
        jo = ok.innerText;
        ho = String(jo);
        fod = disp.innerText;
        fn = Number(fod);
        clean();
    })
})
let numbs = 0;
// display on screen
const disp = document.getElementById("screen");
const nme = document.querySelectorAll(".nums");
nme.forEach(item => {
    item.addEventListener("click", event => {
        let nomb = item.innerText;
        disp.append(nomb);
        if (fn != 0){
            sod = disp.innerText;
            sn = Number(sod);
        }
    }
)});

// screen clear
const clr = document.querySelector(".clear").addEventListener("click", () => {
    clean();
});
// equal
const qq = document.getElementById("equal").addEventListener("click", () => {
    if (ho == "/" && fn == 0 || ho == "/" && sn == 0){
        alert("Division ERROR Cannot Divide By Zero!");
    }    
    if (ho != "" && fn != 0 && sn != 0){    
        clean();
        let joel = 0;
        if (joel == 0){
            joel = operate(ho, fn, sn);
        } else {
            fn = joel;
        }
        let calc = operate(ho, fn, sn);
        if (calc % 1 != 0){
            disp.append(calc.toFixed(1));
        } else {
            disp.append(calc);
        }
    } else {
        clean();
    }
});

function clean(){
    const scr = document.getElementById("screen");
    while (scr.hasChildNodes()) {  
        scr.removeChild(scr.firstChild);
    };
    
};
// backspace
const backs = document.querySelector(".backS").addEventListener("click", () => {
    disp.innerText = disp.innerText.substring(0, disp.innerText.length - 1);
});

