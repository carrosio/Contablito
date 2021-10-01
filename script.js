
// declaro variables
let desc, type, sub, iva

let totSell, totBuy


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

function enterProducts(desc, type, sub, iva){
    const createTr = document.createElement("tr")
    document.getElementById("tabla").appendChild(createTr)
    
    // crear productos //
    createTr.innerHTML = 
   ' <td> ' + desc + '</td>' +
   ' <td> ' + type + '</td>' +
   ' <td> ' + sub + '</td>' +
   ' <td> ' + Math.round((sub * iva)) + '</td>' +
   ' <td name="total"> ' + Math.round((sub * (1 + iva))) + '</td>'
}



function totalSell(){
    let table = document.getElementById("tabla")
    let rowLength = table.rows.length
    
    for (let i; i < rowLength; i++) {
        
    }


}

const sendButm = document.getElementById("btnIngresar")
sendButm.onclick = function ( ) {  
    readProducts()
    enterProducts(desc, type, sub, iva)
    totalSell()

    
}





