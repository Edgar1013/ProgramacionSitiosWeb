function calcular() {
    // Obtener los valores de los campos de texto
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const utilidad = parseFloat(document.getElementById("utilidad").value);
    const iva = parseFloat(document.getElementById("iva").value);

    // Calcular el valor de venta 
    const valorVenta = valorCompra * (1 + (utilidad / 100)) * (1 + (iva / 100));

    // Calcular la ganancia
    const ganancia = valorVenta - valorCompra;

    // Calcular el valor del IVA
    const valorIVA = valorVenta - valorVenta / (1 + (iva / 100));

    // Mostrar los resultados en la página
    mostrarResultado(valorVenta, ganancia, valorIVA);
}

function mostrarResultado(venta, ganancia, iva) {
    document.getElementById("valorVenta").value = "$" + venta;
    document.getElementById("ganancia").value = "$" + ganancia;
}

function limpiar() {
    // Obtener los campos
    const campos = ["valorCompra", "utilidad", "iva", "valorVenta", "ganancia", "valorIVA"];

    // Limpiar los campos
    campos.forEach((campo) => {
        document.getElementById(campo).value = "";
        document.getElementById(campo).innerHTML = "";
    });
}


