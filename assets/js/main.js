$(document).ready(function() {
	$('select').material_select();
	$(".button-collapse").sideNav();


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

