// first card
let serial = 0;
document.getElementById('first-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getTraingle('triangle-name');
    const areaFirstInput = getTraingleInput('triangle-first-input');
    const areaSecondInput = getTraingleInput('triangle-second-input');
    // validation check zero or string
    if(areaFirstInput < 0 || areaFirstInput == '' || areaSecondInput < 0 || areaSecondInput == ''){
        alert('Inputs must be positive numbers');
        return;
    }
    const areaTotal = 0.5 * areaFirstInput*areaSecondInput;
    displayData(serial, areaText, areaTotal.toFixed(2));
    // clear input value
    document.getElementById('triangle-first-input').value = '';
    document.getElementById('triangle-second-input').value = '';
    // random color generate
   const randomgenerate =  randomColor('random');
});
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
    // validation check zero or string
    if(areaFirstInput == '' ||  areaSecondInput == 0){
        alert('Inputs must be positive numbers');
        return;
    }
    const areaTotal = areaFirstInput * areaSecondInput;
    displayData(serial,areaText,areaTotal.toFixed(2));
    // clear input value
    document.getElementById('rectangle-first-input').value = '';
    document.getElementById('rectangle-second-input').value = '';
    // random color generate
    const randomgenerate =  randomColor('randomSecond');

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
// third card
document.getElementById('third-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getThird('third-name');
    const firstInput = getThirdInput('first-input');
    const secondInput = getThirdInput('second-input');
    const areaTotal = firstInput * secondInput;
    displayData(serial, areaText, areaTotal.toFixed(2));
     // clear input value
     document.getElementById('first-input').value = '';
     document.getElementById('second-input').value = '';
      // random color generate
    const randomgenerate =  randomColor('randomThree');
   
    
   
})
// use function third-card calculate
function getThird(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getThirdInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const firstInput = parseFloat(areaFirstInputString);
    
    return firstInput;
}

// forth card
document.getElementById('forth-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getRhombus('rhombus-name');
    const areaFirstInput = getRhombusInput('rhombus-first-input');
    const areaSecondInput = getRhombusInput('rhombus-second-input');
    const areaTotal = 0.5 * areaFirstInput*areaSecondInput;
    displayData(serial, areaText, areaTotal.toFixed(2));
      // clear input value
      document.getElementById('rhombus-first-input').value = '';
      document.getElementById('rhombus-second-input').value = '';
       // random color generate
    const randomgenerate =  randomColor('randomFour');
})
// use function forth card calculate
function getRhombus(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getRhombusInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const areaFirstInput = parseFloat(areaFirstInputString);
    return areaFirstInput;
}
// fipth card
document.getElementById('fipth-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getPentagon('pentagon-name');
    const areaFirstInput = getRhombusInput('pentagon-first-input');
    const areaSecondInput = getRhombusInput('pentagon-second-input');
    const areaTotal = 0.5 * areaFirstInput*areaSecondInput;
    displayData(serial, areaText, areaTotal.toFixed(2));
      // clear input value
      document.getElementById('pentagon-first-input').value = '';
      document.getElementById('pentagon-second-input').value = '';
       // random color generate
    const randomgenerate =  randomColor('randomFive');
})
// use function fipth card calculation
function getPentagon(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getPentagonInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const areaFirstInput = parseFloat(areaFirstInputString);
    return areaFirstInput;
}
// six-card
document.getElementById('six-calculate-btn').addEventListener('click',function(){
    serial+=1;
    const areaText = getEllipse('ellipse-name');
    const areaFirstInput = getEllipseInput('ellipse-first-input');
    const areaSecondInput = getEllipseInput('ellipse-second-input');
    const areaTotal = 3.14 * areaFirstInput * areaSecondInput;
    displayData(serial, areaText, areaTotal.toFixed(2));
      // clear input value
      document.getElementById('ellipse-first-input').value = '';
      document.getElementById('ellipse-second-input').value = '';
       // random color generate
    const randomgenerate =  randomColor('randomSix');
})
// use function six-card calculate
function getEllipse(id){
    const areaText = document.getElementById(id).innerText;
    return areaText;
}
function getEllipseInput(id){
    const areaFirstInputString = document.getElementById(id).value;
    const areaFirstInput = parseFloat(areaFirstInputString);
    
    return areaFirstInput;
}
// create table
function displayData(serial,name,total,button){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${total}</td>
    <button class="btn btn-primary lowercase"><span class = "uppercase">c</span>onvert to m<sup>2</sup></button>
    `;
    container.appendChild(tr);
}

// navigate to another page
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = 'blog.html';
})

//Random color generate
function randomColor(id){
    const colorButton = document.getElementById(id);
    colorButton.addEventListener('mouseover',function(){
        const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colorButton.style.backgroundColor = color;
    })
}