function reset(){
    document.getElementById("user").value=null;
    document.getElementById("num").value=null;
    document.getElementById("cvv").value=null;
    document.getElementById("expair").value=null;
    
}
function myfun(user){
    var user=document.getElementById("user").value;
    switch(user){
        case user.length="":
            user= document.getElementById("user").value;
              document.getElementById("demo").innerHTML="Please enter our Name";
   user.focus();
   p.style.color="#ff0000";      
case user:
    user= document.getElementById("user").value;
    var a=user.length>5;
    document.getElementById("demo").innerHTML="Please enter our Name";
break;
default:
    document.getElementById("demo").innerHTML="tryagain";
    break;
}
//cvv num
switch(cvv){
    case cvv.length="":
        cvv=document.getElementById("cvv").value;
          document.getElementById("demo1").innerHTML=
          "Please enter our cvv num";
user.focus();
p.style.color="#ff0000";      
case cvv:
cvv=document.getElementById("cvv").value;
var c=cvv.length==4;
alert("Create successfully");
break;
default:
document.getElementById("demo1").innerHTML="tryagain";
break;
}

//card-num
var num=document.getElementById("num").value;
switch(num){
    case num.length="":
        num=document.getElementById("num").value;
          document.getElementById("demo2").innerHTML=
          "Please enter the 16digit num";
user.focus();
p.style.color="#ff0000";      
case num:
num=document.getElementById("num").value;
var b=num.length=16;
alert("successfully");
break;
default:
document.getElementById("demo2").innerHTML="tryagain";
break;
}
}


/*function myfunction(){
var score =document.getElementById("name").value;
switch(score){
    case score > 50:
        close.log("Score is higher than 50");
        break;
    default:
        console.log("Score is 50 or lower");
}


}*/