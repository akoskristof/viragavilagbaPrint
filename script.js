
const text = document.getElementById('text');
const textDiv = document.getElementById('text-div');
const textInput = document.getElementById('text-input');
const textPrint = document.getElementById('text-print');
const textEdit = document.getElementById('text-edit');
const textForm = document.getElementById('text-form');
textForm.style.display = 'none'
const lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt."


function setText(str) {
    textForm.style.display = 'none'
    textDiv.style.display = 'block'
    console.log(str)
    if (!str || str == '')
        text.innerHTML = lorem
    else
        text.innerHTML = str
    console.log(text.innerHTML);
}

document.onload = () => {
    console.log('load');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setText(urlParams.get('text'))
}

edit = () => {
    textInput.value = text.innerHTML.trim()
    textForm.style.display = 'block'
    textDiv.style.display = 'none'
}

text.onclick = edit
textEdit.onclick = edit


textForm.onsubmit = (e) => {
    e.preventDefault()
    setText(textInput.value)
}

textPrint.onclick = () => {window.print()}