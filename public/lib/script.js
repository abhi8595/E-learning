
function alldatashow(block="block"){
   
    document.querySelector(".all-data-show-b1 img").style.display=block;
    document.querySelector(".all-data-show-b2 img").style.display=block;
    document.querySelector(".all-data-show-b3 img").style.display=block;
    document.querySelector(".all-data-show-b4 img").style.display=block;
    document.querySelector(".all-data-show-b5 img").style.display=block;
    document.querySelector(".all-data-show-b6 img").style.display=block;
}

 function webdesigndata(block="block"){
   
    document.querySelector(".webdesign-data-show-b1 img").style.display=block;
    document.querySelector(".webdesign-data-show-b2 img").style.display=block;
    document.querySelector(".webdesign-data-show-b3 img").style.display=block;
    document.querySelector(".webdesign-data-show-b4 img").style.display=block;
    document.querySelector(".webdesign-data-show-b5 img").style.display=block;
   
    }
function webdevelopment(block="block"){
    document.querySelector(".webdevelopment-data-show-b1 img").style.display=block;
    document.querySelector(".webdevelopment-data-show-b2 img").style.display=block;
}
function brand(block="block"){
    document.querySelector(".brand-data-show-b1 img").style.display=block;
    document.querySelector(".brand-data-show-b2 img").style.display=block;
}



 var btn=document.querySelectorAll("button");

     btn.forEach((sbtn)=>{
        sbtn.addEventListener('click',()=>{
            if(sbtn.id=="b1"){
                alldatashow();
                webdesigndata("none")
                webdevelopment("none")
                brand("none")
                
            }else if(sbtn.id=="b2"){
                webdesigndata()
                alldatashow("none");
                webdevelopment("none")
                brand("none")
            }else if(sbtn.id=="b3"){
                webdevelopment();
                webdesigndata("none");
                alldatashow("none");
                brand("none");
            }else if(sbtn.id=="b4"){
                brand();
                webdevelopment("none");
                webdesigndata("none");
                alldatashow("none");
            }
        })
     })
  
       
    
   
 
