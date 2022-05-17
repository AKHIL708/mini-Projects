let sum = 0;
function submit(){  
 let value = document.getElementById("value").value;
 let tipValue = document.getElementById("tipValue").value;

if(isNaN(value)){
  alert("please! Enter a valid Amount")
}else{
   let calc = value * tipValue / 100;
   document.getElementById("tip").innerHTML = `Your Tip is : ₹ ${calc}`
}
if(isNaN(tipValue)){
  alert("please! Enter a valid Tip")
}else{
   let calc = value * tipValue / 100;
   document.getElementById("tip").innerHTML = `Your Tip is : ₹ ${calc}`
}


 
 setTimeout(() => {
     
      async function refresh(){
         let value = document.getElementById("value").value = await ""
         let tipValue = document.getElementById("tipValue").value = await "";
     
      }
      refresh()
 }, 2000);
  
}

function Refresh(){
   location.reload()
}
