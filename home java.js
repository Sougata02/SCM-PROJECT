function share(){
    you = confirm("Are you sure?");
    if(you){
        alert("Thanks for your Comment!!");
        let data = document.forms["data"]["comment"].value;
        localStorage.setItem("Comment",data)
    }
    else{
        console.log("nothing commented!!")
    }
}
function guest(){
    location.href="topics.html";
}
function back(){
    location.href = "topics.html"
}
function logInPage(){
    location.href = "log in.html"
}
function createacc(){
    location.href = "account.html"
}
function signUp(){
    if(document.forms["userInfo"]["pass1"].value == document.forms["userInfo"]["pass2"].value){
        confirm("Are you sure to Create your account ?");
        if(confirm){
            alert("Your have created your account successfully!!");
            location.href = "account.html";
        }
    }
    else{
        alert("Please enter your password carefully!!!")
    }
}
let uN = ["sougata2002"];
let pW = ["1122"];
function logUser(){
    if(document.forms["userInfo"]["userName"].value == uN[0] && document.forms["userInfo"]["pass1"].value == pW[0]){
        goTo();
    }
    else{
        alert("Please enter your password correctly!!")
    }
}
function goTo(){
    location.href = "topics.html";
}
function shiftAcc(){
    location.href = "account.html";
}
function slideShow1(){
    document.getElementById("pic").src =("pic2.jpg");
}
function slideShow2(){
    document.getElementById("pic").src =("pic3.png");
}
function slideShow3(){
    document.getElementById("pic").src =("pic4.png");
}
function slideShow4(){
    document.getElementById("pic").src =("pic5.jpg");
}
function slideShow5(){
    document.getElementById("pic").src =("pic1.jpg");
}
setInterval(slideShow1,2000)
setInterval(slideShow2,4000)
setInterval(slideShow3,6000)
setInterval(slideShow4,8000)
setInterval(slideShow5,10000)