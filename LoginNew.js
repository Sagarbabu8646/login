function visibleimg(){
    document.getElementById("b").type="text"
    document.getElementById("invisible").style.display="none"
}
function invisibleimg(){
    document.getElementById("b").type ="password"
    document.getElementById("invisible").style.display="flex"
}
var inputTags=document.querySelectorAll("input")
function loginFun(){
    var userEmail=inputTags[0].value
    var userPass=inputTags[1].value
    var storEmail=localStorage.getItem("email");
    var storPass=localStorage.getItem("pass");
    if(userEmail==storEmail && userPass==storPass){
        window.open("./index2.html")
    }
    else{
        document.getElementById("message").innerHTML="UserId or Password incorrect"
    }
    
}
function createFun(){
    window.open("./index1.html")
}