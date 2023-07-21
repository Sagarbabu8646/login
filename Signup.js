var allInput=document.querySelectorAll("input")
var allSelect=document.querySelectorAll("select")
function store(){
    var fName   =allInput[1].value
    var lName   =allInput[2].value
    var email   =allInput[3].value
    var phno    =allInput[4].value
    var pass    =allInput[5].value
    var date    =allSelect[0].value
    var month   =allSelect[1].value
    var year    =allSelect[2].value
    localStorage.setItem("fName",fName)
    localStorage.setItem("lName",lName)
    localStorage.setItem("email",email)
    localStorage.setItem("phno",phno)
    localStorage.setItem("pass",pass)
    localStorage.setItem("date",date)
    localStorage.setItem("month",month)
    localStorage.setItem("year",year)
    window.open("./index2.html")
    
}
function logFun(){
    window.open("./index.html")
}
function gender(gen){
    localStorage.setItem("gender",gen)
}