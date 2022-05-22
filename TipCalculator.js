let sum = 0;
function submit(){  
 let value = document.getElementById("value").value;
 let file = document.getElementById("file").value
if(isNaN(value)){
  alert("please! Enter a valid Amount")
}else{
   let calc = value * file / 100;
   document.getElementById("tip").innerHTML = `Tip Value is : ₹ ${calc}`
  
}


 
 setTimeout(() => {
     
       function refresh(){
   document.getElementById("value").value =  ""
   document.getElementById("tipValue").value =  "";
     
      }
      refresh()
 }, 2000);
  
}


let progressing = 0;
function ProgressAdd(){
 let file =  document.getElementById("file").value = progressing +=5
 console.log(file)
 document.getElementById("ProgressDemo").innerHTML = file + "%"
 
}
function ProgressMinus(){
 let file =  document.getElementById("file").value = progressing -=5

 document.getElementById("ProgressDemo").innerHTML = file + "%"
}
