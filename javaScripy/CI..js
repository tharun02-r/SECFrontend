//Compound intrest 
function CIntrest(p,r,t,n){
ammount=p*Math.pow((1+r/n),n*t);
return ammount;
} 
Ci=CIntrest(10000,0.3,5,24);
console.log("Compound number"+Ci);