 window.alert("Welcome To Quiz App")
function ready(){
const total = 5;
var score = 0;
const res = document.querySelector('.result');
const q1 = document.forms['quiz']["q1"].value;
const q2 = document.forms['quiz']["q2"].value;
const q3 = document.forms['quiz']["q3"].value;
const q4 = document.forms['quiz']["q4"].value;
const q5 = document.forms['quiz']["q5"].value;
const fa = document.querySelector('.fa');
console.log(fa);

for(i=1;i<=total;i++){
    if(eval('q'+i)==null || eval('q'+i)==''){
        alert("You have missed Question"+i);
        return false;
    }
}

const ans = ['a','a','d','a','c'];

for(i=1;i<=total;i++){
    if(eval('q'+i) == ans[i-1]){
        score++;
    }
}

fa.innerHTML = score;
return false;
}