$(document).ready(function () {

    $(document).on("click", "#btn-add-paragraph", function () {
      $("#content").append("<p>Lorem ipsum&ensp;<button id='remove'>ELIMINAR</button></p>");
    });

    $(document).on("click", "#remove", function () {
        $(this).parent().remove()
        // $(this).closest("p").remove() - NAVEGA SIEMPRE HACIA ARRIBA Y EN ESTE CASO, AL "P" MÁS CERCANO
      });

  });