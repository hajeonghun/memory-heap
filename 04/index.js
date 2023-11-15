function createHTMLElement(){
    const newArea = document.getElementById('new-area');

    const newDivElement = document.createElement('div');
    newDivElement.innerHTML = "신규 Element";

    newArea.appendChild(newDivElement);
}

function createObject(){
    const desk = new _Desk(100, 300);
    console.log({desk});

    function _Desk(width, height){
        this.width = width;
        this.height = height;
    }
}