$(document).ready(function () {

    let noche = false; // Estado inicial: día 

    $(document).on("click", "#btn", function () { 

        noche = !noche; // Cambia el estado

        if(noche) {

            $("body").addClass("fondo");
            $("h1").html("MODO NOCHE ACTIVADO");
            $(".color").attr("style", "color:white");
            $("#btn").removeClass("btn-outline-dark");
            $("#btn").addClass("btn-outline-light");
            $("#icono").removeClass("bi-moon-fill");
            $("#icono").addClass("bi-sun-fill");
            $("span").html("MODO DÍA");

        } else {
        
            $("body").removeClass("fondo");
            $("h1").html("MODO DÍA ACTIVADO");
            $(".color").attr("style", "color:black");
            $("#btn").addClass("btn-outline-dark");
            $("#btn").removeClass("btn-outline-light");
            $("#icono").addClass("bi-moon-fill");
            $("#icono").removeClass("bi-sun-fill");
            $("span").html("MODO NOCHE");
        
        }
            
    });

});