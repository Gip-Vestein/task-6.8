var userText = document.querySelector('#inputText');
var textShow = document.querySelector('#duplicateField');
var Buttom = document.querySelector('#clearText');
userText.addEventListener('keyup', () => {
    textShow.textContent = userText.value;
});
Buttom.addEventListener('click', () => {
    console.log(userText.value);
    userText.value = "Введите текст";
    textShow.textContent = "";
});