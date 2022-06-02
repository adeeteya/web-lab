function validateForm() {
    var name = document.forms["bioDataForm"]["name"];
    var number = document.forms["bioDataForm"]["number"];
    var email = document.forms["bioDataForm"]["email"];
    var password = document.forms["bioDataForm"]["password"];
    var confirmpassword = document.forms["bioDataForm"]["confirmpassword"];
    var age = document.forms["bioDataForm"]["age"];
    var gender = document.forms["bioDataForm"]["gender"];
    var dob = document.forms["bioDataForm"]["dob"];
    var website = document.forms["bioDataForm"]["website"];
    var profilepic = document.forms["bioDataForm"]["profilepic"];
    var favcolor = document.forms["bioDataForm"]["favcolor"];
    var salary = document.forms["bioDataForm"]["salary"];
    var satisfactionrange = document.forms["bioDataForm"]["satisfactionrange"];
    var feedback = document.forms["bioDataForm"]["feedback"];
    var toc = document.forms["bioDataForm"]["toc"];

    console.log(number.value);
    console.log(favcolor.value);
    console.log(satisfactionrange.value);
    console.log(profilepic.value);
    console.log(toc.checked);

    if (toc.checked == false) {
        window.alert("Please accept the terms and conditions");
        toc.focus();
        return false;
    }

    if (password.value != confirmpassword.value) {
        window.alert("Password doesn't match")
        password.focus();
        return false;
    }
    return false;
}