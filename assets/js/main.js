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

    /*----------* NAME *----------*/
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

    // ALERTA VALIDACION
    $('.tooltipped').tooltip({delay: 50});


/**************** ESTILOS INDEX PROFILE *****************/
  
	/* --- LOCAL STORAGE---- */
	$('#create-boton').click(function(){ 

		var nom= $('#first_name').val();
		var nomUs= $('#username').val();    
		var ciud= $('#country').val();

		localStorage.setItem(“Nombre”, nom); 
		localStorage.setItem(“UserName”, nomUs);
		localStorage.setItem(“Ciudad”, ciud);

		/*$('#first_name').val()= ""; 
		$('#username').val()= "";
		$('#country').val()= "";  }*/

		var nombre = localStorage.getItem(“Nombre”);
		var nombreUsuario = localStorage.getItem(“UserName”);
		var ciudad = localStorage.getItem(“Ciudad”);

		$('#usernamelab').append(nombreUsuario);
		$('#namelab').append(nombre);
		$('#ciudadlab').append(ciudad);
	});

    
});/*plugin side nav*/

