function get_num(val) 
         { 
             document.getElementById("result").value+=val 
         } 
        
         function solve() 
         { 
             var result = document.getElementById("result");
             result.value = eval(result.value)
             
         } 
           
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 