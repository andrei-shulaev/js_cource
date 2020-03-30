
onTextInput = (e) => {
    document.getElementById('text').textContent = e.target.value
};

onSearch = (e) => {
    text = document.getElementById('text').innerText;
    text = text.replace(new RegExp(`(${e.target.value})`, 'g'), e.target.value.bold());
    document.getElementById('text').innerHTML = text;

};

ta = document.getElementById('input');
inp = document.getElementById('search');

inp.addEventListener('input', onSearch);
ta.addEventListener('input', onTextInput);
