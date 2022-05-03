document.getElementById('alterable').onclick =
    function myFunction() {
        var userTextField;
        if (prompt('New text')) {
            userTextField = document.querySelector('span');
        } else {
            userText = document.querySelector('alterable')
            userTextField.textContent = userText;
            console.log('Текст в <a> изменён на', userText);
        }
        //document.getElementById("demo").innerHTML = txt;
    }

    /*
function myFunction() {
let text;
let newUser = prompt('New Text:');
if (newUser == null || newUser == "") {
    text = 'Измените текст сылки.';
} else {
    text = "+newUser+";
    text.textContent = text;
    console.log('Текст в <a> изменён на', userText);
} 
*/

