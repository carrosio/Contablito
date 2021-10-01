
// declaro variables
let desc, type, sub, iva

let totSell, totBuy


// modifico variables
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

function enterProducts(desc, type, sub, iva){
    const createTr = document.createElement("tr")
    document.getElementById("tabla").appendChild(createTr)
    
    // crear productos //
    createTr.innerHTML = 
   ' <td> ' + desc + '</td>' +
   ' <td> ' + type + '</td>' +
   ' <td> ' + sub + '</td>' +
   ' <td> ' + iva * 100 + '</td>' +
   ' <td> ' + (sub * (1 + iva)) + '</td>'
}

function arrProducts(){

}

function totalSell(){

}

const sendButm = document.getElementById("btnIngresar")
sendButm.onclick = function ( ) {  
    readProducts()
    enterProducts(desc, type, sub, iva)
    console.log(desc)
    
}



