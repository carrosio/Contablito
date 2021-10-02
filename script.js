
// declaro variables globales
let desc, type, sub, iva
let sellcount = 0
let buycount = 0

// asigno valores a las variables
function readProducts(){
    desc = document.getElementById("inputDesc").value
    type = document.getElementById("radioTrans1").checked ? "Compra" : "Venta"
    sub = document.getElementById("inputSub").value
    if (document.getElementById("radioIVA1").checked){
        iva = 0.22 
    }
    else if (document.getElementById("radioIVA2").checked){
        iva = 0.11
    }
    else {
        iva = 0
    }
}

//pongo los datos en la tabla
function enterProducts(desc, type, sub, iva){
    const createTr = document.createElement("tr")
    document.getElementById("tabla").appendChild(createTr)
    // crear productos //
    createTr.innerHTML = 
   ' <td> ' + desc + '</td>' +
   ' <td name="buyOrSell"> ' + type + '</td>' +
   ' <td> ' + sub + '</td>' +
   ' <td> ' + Math.round((sub * iva)) + '</td>' +
   ' <td name="total"> ' + Math.round((sub * (1 + iva))) + '</td>'
}

// sumo los items de compra y venta
function sum(){
    if (type == "Compra"){
        buycount = buycount + (sub * (1 + iva))
       }
    else {
        sellcount = sellcount + (sub * (1 + iva))
       }
}

// introduzco la suma en el total HTML
function enterSum(){
    const sell = document.getElementById("totSell")
    const buy = document.getElementById("totBuy")
    sell.innerHTML = 'Total Ventas $: ' + Math.round(sellcount) 
    buy.innerHTML = 'Total Compras $: ' + Math.round(buycount)
}




/* function totalSell(){
    
    let rows = document.getElementById("tabla").rows
    let filter = []
    for (z of rows) {
        filter
    }
    console.log(rows)

    let x = document.getElementsByName("total")
    let arr = []
    let sum = 0
    for (let i = 0; i < x.length; i++){
        arr.push(parseFloat(x[i].innerHTML))
    }
    for (let j = 0; j < arr.length; j++ ) {
        sum = sum + arr[j]
    }
    return sum
}
 */
const sendButm = document.getElementById("btnIngresar")
sendButm.onclick = function ( ) {  
    readProducts()
    enterProducts(desc, type, sub, iva)
    sum()
    enterSum()
}





