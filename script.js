let tic={};

const arrColor =[
 "Blue", "Green", "Cyan", "Indigo", "DimGray", "red", "Yellow", "Crimson",
  "Blue", "Green", "Cyan", "Indigo", "DimGray", "red", "Yellow", "Crimson"
  ];
  

const rand=( array )=> {
  for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    //return true;
};



let arbb=[{},{},1];
const game=(colorT,d)=>{
 
if (arbb[2]===1){
  arbb[0]=colorT; 
  arbb[2]=2;
  
  return;
 }
if (arbb[2]===2){
arbb[1]=colorT;
//alert(arbb);
if(arbb[0].color===arbb[1].color&&arbb[0].order!==arbb[1].order){
//alert("true");
arbb[2]=1;
return ["y",+arbb[0].order,+arbb[1].order];//,arbb[0].order,arbb[1].order
}else{  
arbb[2]=1;

return ["n",+arbb[0].order,+arbb[1].order];
}
 }
}; 


 

const TimerStart=()=>{
 
  const siteTimeTimeN = new Date();
  
   const siteTimeNT=siteTimeTimeN.getTime();
   
const myClock=()=> {
    let siteTime = new Date(); //создаём объект Date()
    let  timeRemaining = parseInt((siteTime.getTime()- siteTimeNT) / 1000);
    let hour = parseInt(timeRemaining / 3600);
    let minute = parseInt(timeRemaining / 60);
    let second = parseInt(timeRemaining);
    
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute  = "0" + minute; 
    if (second < 10) second  = "0" + second;
    //Находим на странице элемент с id = siteTime и внутрь него записываем время сайта
    document.getElementById("siteTime").innerHTML = hour + ":" + minute + ":" + second; 
 }; 
 tic=setInterval(function() {  
myClock();  
}, 1000);


};