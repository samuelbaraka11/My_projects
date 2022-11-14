const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error message
function showError(input, message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector();
    small.InnerText = message;
}
//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

//check if email is valid
function isValidEmail(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if (input.value.trim() === ''){
            console.log(input.id)
            showError(input, `${input.id}Is required`);
        }else{
            showSuccess(input)
        }
    });

    function checklength(input, min, max) {
        if(input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        }else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} must be less than ${min} characters`)
        }else {
            showSuccess(input)
        }
    }


}

function checkPasswords(input1, input2) {
if (input1.value !== input2.value){
    showError(input2, 'Passwords do not match');
}

}

//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkPasswords(password, password2);
   
});