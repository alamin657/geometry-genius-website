let serial = 0;
// first operation
document.getElementById('first-calculate-btn').addEventListener('click',function(){
  serial+=1;
    // const productName = document.getElementById('first-name').innerText;
    // const productPrice = document.getElementById('first-price').innerText;
    // const productQuantity = document.getElementById('first-quantity').innerText;

    const pd = getAllData('rectangle-name','rectangle-first-input','rectangle-second');
    const priceTotal = (0.5)* parseFloat(pd.productPrice) * parseFloat(pd.productQuantity);
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);   

   
})
// second opearation
document.getElementById('second-calculate-btn').addEventListener('click',function(){
  serial+=1;
    // const productName = document.getElementById('second-name').innerText;
    // const productPrice = document.getElementById('second-price').innerText;
    // const productQuantity = document.getElementById('second-quantity').innerText;
    const pd = getAllData('second-name','second-price','second-quantity');
    const priceTotal = parseInt(pd.productPrice) - parseInt(pd.productQuantity);
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal);  

    disabledButton('second-card');
})
// third operation
document.getElementById('third-card').addEventListener('click',function(){
  serial+=1;
    // const productName = document.getElementById('third-name').innerText;
    // const productPrice = document.getElementById('third-price').innerText;
    // const productQuantity = document.getElementById('third-quantity').innerText;
    const pd = getAllData('third-name','third-price','third-quantity');
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal); 
    disabledButton('third-card');
})

// forth operation
document.getElementById('forth-card').addEventListener('click',function(){
  serial+=1;
    // const productName = document.getElementById('forth-name').innerText;
    // const productPrice = document.getElementById('forth-price').innerText;
    // const productQuantity = document.getElementById('forth-quantity').innerText;
    const pd = getAllData('forth-name','forth-price','forth-quantity')
    const priceTotal = parseInt(pd.productPrice) / parseInt(pd.productQuantity);
    displayData(pd.productName, pd.productPrice, pd.productQuantity, priceTotal); 
    disabledButton('forth-card');
})
// last operation
document.getElementById('last-card').addEventListener('click',function(){
  serial+=1;
    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('last-price').innerText;
    const productQuantity = document.getElementById('last-quantity').innerText;
    const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal); 
    disabledButton('last-card');
})
// create table
 function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>  
  `;
  container.appendChild(tr);
//   document.getElementById("total-product").innerText = serial;
};

// using common function

function getAllData(id1,id2,id3){
    const productName = document.getElementById(id1).innerText;
    const productPrice = document.getElementById(id2).value;
    const productQuantity = document.getElementById(id3).value;
    const pd = {
        productName: productName,
        productPrice:productPrice,
        productQuantity:productQuantity,
      };
      return pd;
}

