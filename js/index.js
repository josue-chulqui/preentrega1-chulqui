
function pedirPresupuesto(codigo) {// codigo: traerá el id del producto
    switch(codigo) { 
        case 1:
            alert("El sedan cuesta us$ 5000")
            precio = 5500
            break
        case 2:
            alert("La utilitaria cuesta us$ 7500")
            precio = 4000
            break
        case 3:
            alert("El minibus cuesta us$ 10000")
            break
        case 4:
            alert("El Camión cuesta us$ 70000")
            break
        default:
            alert("😥😑😖😔😏😅 No entendimos tu pedido.")
    }
}

function consultarVehiculo() {
    let preguntar = true

    while(preguntar) {
        let codigoPrecio = prompt("Ingresa el código numérico del vehiculo a consultar:")

        if (codigoPrecio !== '' && codigoPrecio !== null) {
            pedirPresupuesto(parseInt(codigoPrecio))
           
        } else {
            console.warn("Ingresa un código de vehiculo válido.")
        }
        preguntar = confirm("¿Deseas conocer el precio de otro vehiculo?")
    }
}
