document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = `I was created by JS! There are already ${count} of my friends!`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}