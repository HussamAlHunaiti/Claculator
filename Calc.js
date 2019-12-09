var currentNum = "", oldNum ="" , ops , p = document.getElementById("p-result") , isEqualDisable = document.getElementById("button-equal"), on_off = true; 
function FuncOnOff(){
    window.alert("On / Off Function");
    document.querySelectorAll("#button-num").disabled   = on_off;
    document.getElementById("button-num-0").disabled   = on_off;
    document.querySelectorAll("#button-ops").disabled   = on_off;
    document.getElementById("button-equal").disabled = on_off;
    document.getElementById("button-ac").disabled    = on_off;
    on_off = !on_off;
}

function FuncNumber(num){
     currentNum += num;
     p.innerHTML = currentNum;
     isEqualDisable.disabled = false;
     document.getElementById("button-num-0").disabled=true;
}

function FuncAC(){
    p.innerHTML= "0" ; 
    oldNum=0;
    currentNum="";
    ops="";
    isOperandClicked=false;
    window.alert("AC Function Done ");
}
function FuncOps(o){
    ops = o ; 
    if(oldNum=="")   
    oldNum = currentNum;
    currentNum = ""; 
    
    if(ops==="/"){
    isEqualDisable.disabled = true;
    document.getElementById("button-num-0").disabled=true;
    }
}
function FuncEqual(){
    switch(ops){
        case "/": oldNum /= currentNum; break;
        case "*": oldNum *= currentNum; break;
        case "-": oldNum -= currentNum; break;
        case "+": oldNum = Number(oldNum)+ Number(currentNum); break;
    }
    if(ops != "" && oldNum!=""){
        p.innerHTML = oldNum;
        ops = "";
    }
}
