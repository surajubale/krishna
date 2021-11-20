function validate() {
    var Username = document.getElementById("Username");
    var password = document.getElementById("password");

    if(Username.value == "" || password.value = "" ){
        alert("no blank values allowed");
        return false;
    }
    else{
        true;
    }

}