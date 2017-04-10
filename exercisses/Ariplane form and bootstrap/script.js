var btn = document.getElementById("submit");
var text = document.getElementById("firstname");
var text1 = document.getElementById("lastname");
var num = document.getElementById("age");
var gender = document.querySelector('form').gender
var countries = document.getElementById("countries");

btn.addEventListener("click", function () {

    var checkedValue = [];
    var inputElements = document.getElementsByClassName('veg');
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedValue.push(inputElements[i].value);

        }
    }
    alert("First name: " + text.value + "\nLastname: " + text1.value + "\nAge: " + num.value + "\nGender: " + gender.value + "\nCountrie: " + countries.value + "\nDietaryRestriction: " + checkedValue);
})