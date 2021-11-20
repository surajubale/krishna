function validation(){
    var user = document.getElementById('username').value;

    if(username == ""){
        document.getElementById('errormessage').innerHTML="Please fill the username field";
        return false;
    }
}