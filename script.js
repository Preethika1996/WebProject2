function calculate(){
   var mname=document.getElementById("mname").value;
   var fname=document.getElementById("fname").value;
   var par=document.getElementById("result");
   var result=Math.random()*100;
   par.innerHTML="The friendship between " +mname+ " and " +fname+ " is " +result+ "%";
   
}