var btnred= document.querySelector(".red");
var btnblue= document.querySelector(".blue");
var topred=0;
var leftred=0;
var topblue=100;
var leftblue=0;
var redmove=false;
var bluemove=false;



function btn1(){
    redmove=true;
    bluemove=false;
 btnred.style.opacity="1.0";
 btnblue.style.opacity="0.7";
 document.addEventListener("keydown",function(){
    switch(event.code){
        case 'ArrowUp': topred-=100;
                        if(redmove && (topred!=topblue || leftblue!=leftred)){
                            
                            if(topred<0){
                                topred=0;
                            }
                            
                            btnred.style.top=topred+"px";
                         }
                         else{
                             topred+=100;
                         }

                         break;


        case 'ArrowDown':    topred+=100;
                            if(redmove && (topblue!=topred || leftblue!=leftred)){
                               
                            if(topred>500){
                                 topred=500;   
                            }
                           
                                        
                            btnred.style.top=topred+"px";
                            }
                            else{
                                topred-=100;
                            }
                            
                            break;  
        case 'ArrowRight':    leftred+=100;
                            if(redmove && (topblue!=topred || leftred!=leftblue)){
                               
                            if(leftred>500){
                                leftred=500;
                            }            
                            btnred.style.left=leftred+"px";
                            }
                            else{
                                leftred-=100;
                            }
                            
                            break;         
        case 'ArrowLeft':   leftred-=100;
                            if(redmove && (topblue!=topred || leftblue!=leftred)){
                                
                            if(leftred<0){
                                leftred=0;
                            }    
                            btnred.style.left=leftred+"px";
                            }
                            else{
                                leftred+=100;
                            }
                            
                            break;  
        default :   alert('none');
                        break;                                                                    
    }
})

}

function btn2(){
    redmove=false;
    bluemove=true;
    btnblue.style.opacity="1.0";
    btnred.style.opacity="0.7";
    document.addEventListener("keydown",function (){
        switch(event.code){
            case 'ArrowUp':  topblue-=100;
                            if(bluemove && (topblue!=topred || leftred!=leftblue)){
                               
                                if(topblue<-100){
                                    topblue=0;
                                }
                               
                                btnblue.style.top=topblue+"px";
                             }
                             else{
                                 topblue+=100;
                             }
    
                             break;
    
    
            case 'ArrowDown':   topblue+=100;
                             if(bluemove && (topblue!=topred || leftblue!=leftred)){
                                
                                if(topblue>400){
                                     topblue=400;   
                                }
                               
                                            
                                btnblue.style.top=topblue+"px";
                             }
                             else{
                                 topblue-=100;
                             }
                                
                                break;  

            case 'ArrowRight':  leftblue+=100; 
                                if(bluemove && (topblue!=topblue || leftred!=leftblue)){
                                    
                                    if(leftblue>500){
                                        leftblue=500;
                                    }            
                                    btnblue.style.left=leftblue+"px";
                                  }
                                  else{
                                      leftblue-=100;
                                  }
                                
                                break; 

            case 'ArrowLeft':    leftblue-=100; 
                                 if(bluemove && (topblue!=topred || leftblue!=leftred)){
                                   
                                    if(leftblue<0){
                                        leftblue=0;
                                    }    
                                    btnblue.style.left=leftblue+"px";
                                 }   
                                 else{
                                     leftblue+=100;
                                 }
                               
                                break;  
            default :   alert('none');
                            break;                                                                    
        }
    })
   

}

