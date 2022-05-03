const consoleLog = document.querySelector('#consoleLog');
const alert = document.querySelector('#alert');
const prompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    this.alert('Служит для вывода информации в консоль!');
})
alert.addEventListener('click', () => {
    this.alert('Предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');
})
prompt.addEventListener('click', () => {
    this.alert('Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена».');
})
