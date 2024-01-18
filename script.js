
function click1(x,y,z,a){
    let btn1 = document.getElementById(x);
    let para1=document.getElementById(y);
    let icon = document.getElementById(z);
    let icon1= document.getElementById(a);
  //  icon.style.transform='rotate(45deg)';
  
  if(para1.style.display!='none'){
      icon.style.display='inline';
      icon1.style.display='none';
      para1.style.display= 'none';
}
else{
    icon1.style.display ='inline';
    icon.style.display='none';
    para1.style.display= 'block';
        
    }
    
    
}



