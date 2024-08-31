const textArea = document.getElementById('textArea');

textArea.addEventListener('input', function() {
    let text = this.value;
    document.getElementById('char').innerHTML = text.length
    text = text.trim();
    let words = text.split(" ");
    let wordArr = words.filter(elm => elm != "");
    document.getElementById('word').innerHTML = wordArr.length;
});