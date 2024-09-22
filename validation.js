function getMessage() {
    let userName = document.getElementById("uName").value;
    let passWord = document.getElementById("pWord").value;

    //alert("Hello Valoidation" + userName + "" + passWord);

    let regUser = /[a-zA-z]{8,30}/;
    let regEx = /[a-zA-Z]/;

    if(regUser.test(userName)){
        //alert("valid");
        document.getElementById("username").innerHTML="This is a valid username"
    }else{
        document.getElementById("username").innerHTML="This is a invalid username"
    }

    if(regEx.test(passWord)){
            //alert("valid");
            document.getElementById("pMsg").innerHTML="This is a valid password"
        }else{
            document.getElementById("pMsg").innerHTML="This is a invalid password"
        }
}

document.getElementById('btnLogIn').addEventListener("click",getMessage);