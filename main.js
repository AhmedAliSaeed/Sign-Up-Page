var firstName= document.getElementById("f-name");
var lastName= document.getElementById("l-name");
var Email= document.getElementById("em");
var Password= document.getElementById("pass");
var Submit= document.getElementById("sub");
var rightBody= document.getElementById("r-b");
var Sapn1= document.getElementById("f-s");
var Sapn2= document.getElementById("l-s");
var Sapn3= document.getElementById("e-s");
var Sapn4= document.getElementById("p-s");

var Img1= document.getElementById("f-i");
var Img2= document.getElementById("l-i");
var Img3= document.getElementById("e-i");
var Img4= document.getElementById("p-i");

Submit.addEventListener("click", function(){

    if(firstName.value==""){
        Sapn1.style.display="block";
        firstName.style.border="1px solid red";
        Img1.style.display="block";
    }
    else{
        firstName.innerHTML=firstName.value;
        firstName.style.border="none"
        Sapn1.style.display="none";
        Img1.style.display="none"
    }
    if(lastName.value==""){
        Sapn2.style.display="block";
        lastName.style.border="1px solid red";
        Img2.style.display="block"
    }
    else{
        lastName.innerHTML=lastName.value;
        lastName.style.border="none"
        Sapn2.style.display="none";
        Img2.style.display="none"

    }
    var regEx= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(regEx.test(Email.value) == false){
        Sapn3.style.display="block";
        Email.style.border="1px solid red";
        Img3.style.display="block"
    }
    else{
        Email.innerHTML=Email.value;
        Email.style.border="none"
        Sapn3.style.display="none";
        Img3.style.display="none"
    }
    if(Password.value==""){
        Sapn4.style.display="block";
        Password.style.border="1px solid red";
        Img4.style.display="block"
    }
    
    else{
        Password.innerHTML=Password.value;
        Password.style.border="none"
        Sapn4.style.display="none";
        Img4.style.display="none"
        rightBody.style.height="400px"
    }
 
     if(firstName.value=="" || lastName.value=="" || regEx.test(Email.value) == false || Password.value==""){
        rightBody.style.height="570px"
    }
    if(firstName.value!=="" && lastName.value!=="" && regEx.test(Email.value) !== false && Password.value!==""){
        firstName.value=""
        lastName.value=""
        Email.value=""
        Password.value=""
    }
})

