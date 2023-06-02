function submitpage(){
    // location.href="/content/submit.html"
    var val=document.getElementById("fname").value;
    var val1=document.getElementById("lname").value;
    var val2=document.getElementById("pass").value;
    localStorage.setItem("text",val);
    localStorage.setItem("txt",val1);
    localStorage.setItem("textvalue",val2);
    return ;
}
function back(){
    location.href="/index.html"
}
// document.getElementById("login").onclick=function(){
//     location.href="subbmit.html"
// }