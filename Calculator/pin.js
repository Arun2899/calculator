

function input(event)
        {
            var a=document.getElementById("a")
            a.value+=event;
          
        }
        function del()
        {
           var a=document.getElementById('a')
           a.value=a.value.slice(0,-1)
        
            
        }
        function cal()
        {
            var a=document.getElementById("a");
            let b=eval(a.value)
            a.value=b;

            
        }