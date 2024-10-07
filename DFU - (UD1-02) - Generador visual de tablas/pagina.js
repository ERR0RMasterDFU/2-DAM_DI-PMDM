$(document).ready(function () {

    let numeroFila = 1;  
    let numeroCol = 1;
    let rowExists = false;
    let colRestantes = 0;

    // AGREGAR FILA
    $(document).on("click", "#row", function () { 
        $("tbody").append(`<tr id='${numeroFila}' class='fila'><td>Fila ${numeroFila} <button id='btn-del-row' class='btn btn-danger'>ELIMINAR FILA</button></td></tr>`);
        numeroFila++;
    });

    // ELIMINAR FILA
    $(document).on("click", "#btn-del-row", function () { 
        $(this).parent().parent().remove();
    });

    // AGREGAR COLUMNA
    $(document).on("click", "#col", function () { 

        if (rowExists == false) {

            $("thead").append(`<tr id='rowThead'><th></th></tr>`);
            $("#rowThead").append(`<th id='${numeroCol}'>Columna ${numeroCol} <button id='btn-del-col' class='btn btn-dark'>ELIMINAR COLUMNA</button></th>`);          

            numeroCol++;
            rowExists = true;
            colRestantes++;
        }else{
            
            $("#rowThead").append(`<th id='${numeroCol}'>Columna ${numeroCol} <button id='btn-del-col' class='btn btn-dark'>ELIMINAR COLUMNA</button></th>`);
            numeroCol++;
            colRestantes++;
        }
    });

    // ELIMINAR COLUMNA
    $(document).on("click", "#btn-del-col", function () {
        $(this).parent().remove();
        colRestantes--;

        if(colRestantes <= 0) {
            $("#rowThead").remove();
            rowExists = false;
        }
    })

})