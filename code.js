let hexCode = document.getElementById("Hex");
let result = document.getElementById("Result");
let button = document.getElementById("Submit");

button.addEventListener('click', () =>{
    let r = parseInt(hexCode.value.slice(1,3),16);
    let g = parseInt(hexCode.value.slice(1,3),16);
    let b = parseInt(hexCode.value.slice(1,3),16);

    result.innerHTML = `rgb(${r}, ${g}, ${b})`
})