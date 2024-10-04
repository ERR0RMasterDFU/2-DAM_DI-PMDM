$(document).ready(function () {

    let numeroFila = 1;  
    let numeroCol = 1;

    $(document).on("click", "#row", function () { 

        $("table").append("<tr id='" + numeroFila + "'><td>Fila " + numeroFila + " <button id='btn-del-row'>ELIMINAR FILA</button></td></tr>");
        
        numeroFila++;
    });

    $(document).on("click", "#btn-del-row", function () { 

        $(this).parent().parent().remove();

    });

    $(document).on("click", "#col", function () { 

        $("table").append("<th id='" + numeroCol + "'><td>Columna " + numeroCol + " <button id='btn-del-col'>ELIMINAR COLUMNA</button></td></tr>");
        
        numeroCol++;
    });
});