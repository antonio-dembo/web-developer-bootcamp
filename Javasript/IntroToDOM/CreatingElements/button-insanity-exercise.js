
const div = document.querySelector('#container');

const createNewBtn = (index) => {
    const newBtn = document.createElement('button');
    newBtn.innerText = `button ${index + 1}`;
    return newBtn;
}

const appendElement = (e) => div.appendChild(e);

for (let i = 0; i < 100 ; i++) {
    appendElement(createNewBtn(i));
}

