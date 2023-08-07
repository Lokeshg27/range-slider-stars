const _input = document.createElement('input');
_input.type = 'range';
_input.max = 5;
_input.value = 0;
document.body.appendChild(_input);
const div = document.createElement('div');
document.body.appendChild(div);

_input.oninput = addStars;

function addStars() {
    div.innerText = '';
    for (let i = 0; i < _input.value; i++) {
        div.append('⭐');
    }
}
