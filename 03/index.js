function createHTMLElement(){
    const newArea = document.getElementById('new-area');

    const newDivElement = document.createElement('div');
    newDivElement.innerHTML = "신규 Element";

    newArea.appendChild(newDivElement);
}

function removeHTMLElement(){
    const newArea = document.getElementById('new-area');

    while(newArea.firstChild){
        newArea.removeChild(newArea.firstChild)
    }
}

function clean() {
    for(let i = 0; i < 3; i++){
        createHTMLElement();
    }
    removeHTMLElement();
}

function createObject(){
    desk = new _Desk(100, 300);
    console.log({desk});

    function _Desk(width, height){
        this.width = width;
        this.height = height;
    }
}