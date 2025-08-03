

var a,b,c;
var symbol_click=0; 

var duplicate=0;

const button=document.querySelectorAll('button');
const symbols=document.querySelectorAll(".symbol");
const digits=document.querySelectorAll(".digit");
const displayBox=document.querySelector("#display");
const clear=document.querySelector("#clear");
const spec=document.querySelector("#spec");
const backspace=document.querySelector(".backspace");
var results;
function result(g){
    
        console.log(g);
        c=Number(g);
        console.log(c);
    const ans=operate(a,b,c);
    console.log(ans);
 
    displayBox.value=ans;
    results=ans;
    console.log(displayBox.value)
   

}

digits.forEach(button=>{
    button.addEventListener('click',function (){
    const number=this.value;
    console.log(number);
    console.log('button clicked:',number);
    console.log(symbol_click);
    console.log(duplicate);
    if(results==displayBox.value && symbol_click === duplicate ){
        console.log("yay!");
        displayBox.value=number;
    }
    else   if(symbol_click === duplicate ){
    console.log("yes");
     if(results==displayBox.value){
        displayBox.value=number;
    }
    else  displayBox.value +=number;

}

   else{
    console.log("hi");
   
   displayBox.value=number;
   duplicate++;
   }
 });
   
});

symbols.forEach(button=>{
    button.addEventListener('click',function (){
        symbol_click++;
        const dis=this.value;
        if(symbol_click==1){
            a=Number(displayBox.value);
            console.log(a);
            b=dis;
        }
        else if(symbol_click>1){

          result(displayBox.value);
          b=dis;
          a=Number(displayBox.value);
         }
       
    });
   

})
clear.addEventListener('click',function (){
    
    displayBox.value="";
    a=b=c=undefined;
    symbol_click=duplicate=0;
})

spec.addEventListener('click',()=>{
    
result(displayBox.value);
symbol_click=duplicate=0;
});
backspace.addEventListener('click',function (){
displayBox.value=displayBox.value.slice(0,-1);
})

function add(a,c){
    return a+c;
}
function subtract(a,c){
    return a-c;
}
function multiply(a,c){
    return a*c;
}
function divide(a,c){

    if(c===0){
        return "input error";
    }
    else return a/c;
    
}
function operate(a,b,c){
    if(b=="+"){
        return add(a,c);
    }
    else if(b=="-"){
        return subtract(a,c);
    }
    else if(b=="*"){
        return multiply(a,c);
    }
    else if(b=="/"){
        return divide(a,c);
    }

}
