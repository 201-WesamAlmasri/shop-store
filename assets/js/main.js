function getUserName() {
    var userName = prompt("Please enter your name");

    if (userName === ""){
        alert("We cannot contact you without entering your name.")
    }

    return userName;
}

function adminPageLink(userName) {
    var admin;
    console.log("user name: ", userName, typeof(userName))
    if(userName != null){
        if(userName === 'wesam'){
            admin = true;
        } else {
            admin = false;
        }
    }

    if(admin){
        document.write('<li><a href="admin.html">Admin Page</a></li>')
    }
}