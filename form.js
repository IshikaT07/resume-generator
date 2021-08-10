var listskill1 = document.getElementById("skill");
var listadd = document.getElementById("button");
var listpro1 = document.getElementById("pro1");
var listpro2 = document.getElementById("pro2");
var addbutton = document.getElementById("pro3");



function formValidation(){  
    // var uid = document.registration.userid;  
    // var passid = document.registration.passid;  
    var uname = document.registration.username;
    var uname1 = document.registration.username1;  
    var uadd = document.registration.address;  
    var ucountry = document.registration.country;  
    var uzip = document.registration.zip;  
    var uemail = document.registration.email;  
    var uen = document.registration.en;
    var unonen = document.registration.nonen; 
    var usex = document.registration.sex; 
    var ume = document.registration.desc;  
    var uX =  document.registration.Xpercent;
    var uXII =  document.registration.XIIpercent;

    document.getElementById("namehead").innerHTML = uname.value + uname1.value;
    document.getElementById("ps7").innerHTML = uemail.value;
    document.getElementById("ps1").innerHTML = uname.value + uname1.value;
    document.getElementById("ps2").innerHTML = uadd.value;
    document.getElementById("ps3").innerHTML = ucountry.value;
    document.getElementById("ps4").innerHTML = uzip.value;
    document.getElementById("ps5").innerHTML = usex.value;
    document.getElementById("abme").innerHTML = ume.value;
    document.getElementById("ed1").innerHTML = uX.value;
    document.getElementById("ed2").innerHTML = uXII.value;
    document.getElementById("ed3").innerHTML = document.registration.degree.value;
    document.getElementById("ed4").innerHTML = document.registration.insti.value;
    document.getElementById("ed5").innerHTML = document.registration.dept.value;
    

    // if(userid_validation(uid,5,12)){  
        // if(passid_validation(passid,7,12)){  
            if(allLetter(uname)){  
                if(allLetter(uname1)){
                    if(alphanumeric(uadd)){   
                        if(countryselect(ucountry)){
                            if(allnumeric(uzip)){
                                if(ValidateEmail(uemail)){  
                                    if(validlang(uen,unonen)){  
                                    }  
                                }   
                            }  
                        }   
                    }
                }  
            }  
        // }  
    // }  
    return false;  

    
}  


function userid_validation(uid,mx,my){  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx){  
        alert("User Id should not be empty / length be between "+mx+" to "+my);  
        uid.focus();  
        return false;  
    }  
    return true;  
}  

function passid_validation(passid,mx,my){  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx){  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        passid.focus();  
        return false;  
    }  
    return true;  
}  

function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;   //Regex
    if(uname.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('Username must have alphabet characters only');  
        uname.focus();  
        return false;  
    }  
}  

function alphanumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
        return true;  
    }  
    else{  
        alert('User address must have alphanumeric characters only');  
        uadd.focus();  
        return false;  
    }  
} 

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function allnumeric(uzip){   
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers)){  
        return true;  
    }  
    else{  
        alert('ZIP code must have numeric characters only');  
        uzip.focus();  
        return false;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        return true;  
    }  
    else{  
        alert("You have entered an invalid email address!");  
        uemail.focus();  
        return false;  
    }  
}

function validlang(uen,unonen){  
    x=0;  
    if(uen.checked){  
        x++;  
    } 
    if(unonen.checked){  
        x++;  
    }  
    if(x==0){  
        alert('Select Language');  
        uen.focus();  
        return false;  
    }  
    else{  
        alert('Form Successfully Submitted');  
        return true;
    }  
} 

function addToSkill(){
    var node = document.createElement('li');
    node.appendChild(document.createTextNode(listskill1.value));
    document.getElementById("listskill").appendChild(node);
}

listadd.addEventListener('click',addToSkill);


function addToPro(){
    var pnode = document.createElement('li');
    pnode.appendChild(document.createTextNode(listpro1.value));
    pnode.appendChild(document.createElement("br"));
    pnode.appendChild(document.createTextNode(listpro2.value));
    document.getElementById("listproject").appendChild(pnode);
}

addbutton.addEventListener('click',addToPro);
