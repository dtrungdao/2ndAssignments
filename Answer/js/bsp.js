let sum = 10 + 60;

console.log(sum);

//document.body.innerHTML = "hello world"


function loginFunction(){
    let password = document.getElementById("password").value;
    console.log(password);

    if(password === "secret-password123"){
        alert("LOGIN SUCCESS");
    }else{
        alert("LOGIN FAILED");
    }
    
    

}