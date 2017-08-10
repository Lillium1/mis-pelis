$(document).ready(function() {
    $('select').material_select();
    $(".button-collapse").sideNav();

    $("#pau_btn-create").click(function(){
		
		if(!(/^([A-Z]{1}[a-z]{2,13})+$/.test($("#first_name").val()))) {
			$("#name").parent().append("<span>Ingrese nombre correcto.<br>La primera letra debe ser mayúscula.</span>");
		}
		$("#name").val("");
		
		if(!(/^([A-Z]{1}[a-z]{2,13})+$/.test($("#lastname").val()))) {
			$("#lastname").parent().append("<span>Ingrese apellido correcto.<br>La primera letra debe ser mayúscula.</span>");
		}
		$("#lastname").val("");
		
		if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($("#input-email").val()))) {
			$("#input-email").parent().append("<span>Ingrese un correo valido.</span>");
		}
		$("#input-email").val("");
		
		if(($("#input-password").val() == "password") || ($("#input-password").val() == 123456) || ($("#input-password").val() == 098754) || (($("#input-password").val()).length < 5)){
			$("#input-password").parent().append("<span>Ingrese una contraseña valida.</span>");
		}
		$("#input-password").val("");
		
		if($("select").val() === "0") {
   			$("select").parent().append("<span>Elija una las opciones.</span>");
  		}	
		$("select").val("0"); 
	});
});/*plugin side nav*/
