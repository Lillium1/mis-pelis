$(document).ready(function() {
	$('select').material_select();
	$(".button-collapse").sideNav();

    /****************** INDEX CREATE ACCOUNT - VALIDACION **************/
    
    // Comienzan el boton de crear cuenta desactivado
    $('.mar_btn-create').addClass('disabled');

    /*----------* NAME *----------*/
    $("input#name").blur(function() {
    	if($(this).val()==''){
    		$(this).addClass('invalid');
    	}
    	else {
    		$(this).addClass('valid');
    		$('input#username').removeClass('disabled');
    	}
    });

    /*----------* USERNAME *----------*/
    $("input#username").blur(function() {
    	if($(this).val()==''){
    		$(this).addClass('invalid');
    	}
    	else {
    		$(this).addClass('valid');
    		$('input#email').removeClass('disabled');
    	}
    });

    /*----------* EMAIL *----------*/
    $("input#email").blur(function() {
    	if($(this).val()==''){
    		$(this).addClass('invalid');
    	}
    	else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#email").val()))){
    		$(this).addClass('invalid');
    		$(this).val("");
    	}
    	else {
    		$(this).addClass('valid');
    		$('input#country').removeClass('disabled');
    	}
    });

    /*----------* COUNTRY *----------*/
    $("input#country").blur(function() {
    	if($(this).val()==''){
    		$(this).addClass('invalid');
    	}
    	else {
    		$(this).addClass('valid');
    		$('.mar_btn-create').removeClass('disabled');
    	}
    });

    /*----------* PASS *----------*/
    $("input#pass").blur(function() {
        if($(this).val()==''){
            $(this).addClass('invalid');
        }
        else {
            $(this).addClass('valid');
            $('.mar_btn-create').removeClass('disabled');
        }
    }); 
    // ALERTA VALIDACION
    $('.tooltipped').tooltip({delay: 50});


    /**************** ESTILOS INDEX PROFILE *****************/


    /* --- LOCAL STORAGE---- 
    $('#create-boton').click(function(){ 

      var nom= $('#name').val();
      var nomUs= $('#username').val();    
      var ciud= $('#country').val();

      localStorage.setItem(“Nombre”, nom); 
      localStorage.setItem(“UserName”, nomUs);
      localStorage.setItem(“Ciudad”, ciud);

		var nombre = localStorage.getItem(“Nombre”);
		var nombreUsuario = localStorage.getItem(“UserName”);
		var ciudad = localStorage.getItem(“Ciudad”);

		$('#usernamelab').append(nombreUsuario);
		$('#namelab').append(nombre);
		$('#ciudadlab').append(ciudad);
	});
    */
    /**************** ESTILOS INDEX movies *****************/

    pelis.forEach(function(element){
      $('.car_contenedorpeli').append('<div class="container-fluid"><div class="row"><div class="col xs12"><ul class="collapsible" data-collapsible="accordion"><li><div class="collapsible-header"><div class="primeralinea"><h1 class="car_name"><strong>'+element.show_title+'</strong></h1><h1 class="car_ano">'+ element.release_year +'</h1><h1 class="car_categoria">'+ element.category +'</h1></div><div class="segundalinea"><h2 class="car_duracion"><i class="fa fa-clock-o" aria-hidden="true"></i>'+element.runtime+'</h2><h2 class="car_director"><i class="fa fa-desktop" aria-hidden="true"></i>'+element.director +'</h2><div class="txt-center"><form><div class="rating"><input id="star5" name="star" type="radio" value="5" class="radio-btn hide" /><label for="star5" >☆</label><input id="star4" name="star" type="radio" value="4" class="radio-btn hide" /><label for="star4" >☆</label><input id="star3" name="star" type="radio" value="3" class="radio-btn hide" /><label for="star3" >☆</label><input id="star2" name="star" type="radio" value="2" class="radio-btn hide" /><label for="star2" >☆</label><input id="star1" name="star" type="radio" value="1" class="radio-btn hide" /><label for="star1" >☆</label><div class="clear"></div></div></form></div></div></div><div class="collapsible-body"><img src='+element.poster+'><p class="summary">'+element.summary+'</p></div></li></ul></div></div></div></div>');
     });

    $('.container-fluid').on('click', function(){
        window.location = "index-details.html";   
    });

    $('.container-fluid').on('click', function(){
        var descripcion = "";
        var imagen ="";
        var titulo = "";
        var titulo = $(this).find(".car_name").text();
        var imagen = $(this).find("img").attr("src");
        var descripcion = $(this).find(".summary").text();
        console.log(imagen);

    //$('.car_detailpeli').append('<img src='+ "http://netflixroulette.net/api/posters/60032563.jpg"  +'class="car_imgpeli">');
    });
    
});/*plugin side nav*/

