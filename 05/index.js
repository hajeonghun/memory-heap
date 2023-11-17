let tempArray = [];
let index = 0;

function createHTMLElement(){
    const newArea = document.getElementById('new-area');
    const newButtonElement = createButton();

    newArea.appendChild(newButtonElement);
}

function removeHTMLElement() {
    const newArea = document.getElementById('new-area');
    const buttonElement = document.getElementById(`${index--}-button`)

    if(buttonElement === null){
        index = 0;
        return;
    }

    newArea.removeChild(buttonElement);
}

function createButton(){
    index++;
    const newButtonElement = document.createElement('button');

    tempArray.push(newButtonElement); // 전역변수에서 참조하여 메모리 누수 발생 !

    newButtonElement.id = `${index}-button`
    newButtonElement.classList.add('new__button');
    newButtonElement.innerHTML = `${index}번째 버튼`;
    newButtonElement.onclick = () => console.log(`${index}번째 버튼 Click!!`);

    return newButtonElement;
}
