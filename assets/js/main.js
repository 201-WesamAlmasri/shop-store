function getUserName() {
    confirm("Welcom to our website. If you like any of our product, you can order it");
    var userName = prompt("Please enter your name");

    if (userName === null && userName === ''){
        alert("We cannot contact you without entering your name.")
    }

    return userName;
}

function adminPageLink(userName) {
    var admin;
    if(userName !== null){
        if(userName.toLowerCase() === 'wesam'){
            admin = true;
        } else {
            admin = false;
        }
    }

    if(admin){
        document.write('<li><a href="admin.html">Admin Page</a></li>')
    }
}

function changeImage(id){
    document.getElementsByClassName("main_image")[0].src = 'assets/images/mansaf' + id + '.jpg';
}