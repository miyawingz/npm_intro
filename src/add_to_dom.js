function addToDom(text) {
    const h1 = document.createElement('h1');
    h1.innerText = text;
    document.getElementById("root").appendChild(h1);
}

export default addToDom;