// first card
let serial = 0;
document.getElementById('first-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getTraingle('triangle-name');
    const areaFirstInput = getTraingleInput('triangle-first-input');
    const areaSecondInput = getTraingleInput('triangle-second-input');
    const areaTotal = 0.5 * areaFirstInput*areaSecondInput;
    displayData(serial, areaText, areaTotal);
})

// using function first-card calculate 
function getTraingle(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getTraingleInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const areaFirstInput = parseFloat(areaFirstInputString);
    return areaFirstInput;   
}
// second-card
document.getElementById('second-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getRectangle('rectangle-name');
    const areaFirstInput = getRectangleInput('rectangle-first-input');
    const areaSecondInput = getRectangleInput('rectangle-second-input');
    const areaTotal = areaFirstInput * areaSecondInput;
    displayData(serial,areaText,areaTotal);
})
// use function second-card-calculate
function getRectangle(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getRectangleInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const areaFirstInput = parseFloat(areaFirstInputString);
    return areaFirstInput;
}
// create table
function displayData(serial,name,total){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${total}</td>
    `;
    container.appendChild(tr);
}
