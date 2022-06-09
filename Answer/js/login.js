const USER_ADMIN = "admin"
const PASSWORD_ADMIN = "admin"

const USER_STAFF = "staff"
const PASSWORD_STAFF = "staff"

let loginAttempts = 0;
const maxLoginAttempts = 2;

/*function loginFunction(){
    let pwd = document.getElementById("password").value;
    let username = document.getElementById("text").value;
    console.log(username)
    console.log(pwd)

    if(pwd === "Admin" || username === "Admin"){
        alert("LOGIN SUCCESS");
    }else{
        alert("LOGIN FAILED");
    }

}*/



function checkLoginAdmin(){
    let adminUser = document.getElementById("admin-username").value;
    let adminPassword = document.getElementById("admin-pwd").value;

    if (adminUser === USER_ADMIN && adminPassword === PASSWORD_ADMIN) {
        window.location.href = "/admin.html";
    } else {
        checkInvalid();
    }
}

function checkLoginStaff(){
    let staffUser = document.getElementById("staff-username").value;
    let staffPassword = document.getElementById("staff-pwd").value;

    if (staffUser === USER_STAFF && staffPassword === PASSWORD_STAFF) {
        window.location.href = "/staff.html";
    } else {
        checkInvalid();
    }
}

function checkInvalid(){
    alert ("Incorrect username or password");

    loginAttempts ++;
    if(loginAttempts >= maxLoginAttempts) {
        checkDisable();
    }
}

function checkDisable(){
    document.getElementById("admin-username").disabled = true;
    document.getElementById("admin-pwd").disabled = true;

    document.getElementById("staff-username").disabled = true;
    document.getElementById("staff-pwd").disabled = true;

    document.getElementById("admin-login-button").disabled = true;
    document.getElementById("staff-login-button").disabled = true;

}