/*index*/
/*pagos*/
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}
var getData = function (){
	var nombre =  document.getElementById("nombre").value;
	var edad = document.getElementById("edad").value;
	var cedula = document.getElementById("cedula").value;
	var cantidad = document.getElementById("cantidad").value;
	var sexo = document.getElementById("sexo").value;
	var vmad = document.getElementById("vmad").value;
	
	
	
	if (nombre == ""){
		document.getElementById("nombre").focus();
		alert("Aun no ingrese su nombre");
	}
	else if(edad==""){
		document.getElementById("edad").focus();
		alert("Aun no ingrese su edad");

	}
	else if(cedula==""){
		document.getElementById("cedula").focus();
		alert("Aun no ingrese su cedula");

	}
	else if(cantidad==""){
		document.getElementById("cantidad").focus();
		alert("Aun no ingrese su cantidad");

	}
	else if(sexo=="" || sexo=="Genero"){
		document.getElementById("cantidad").focus();
		alert("Aun no ingrese su Genero");

	}
	else if(vmad==""){
		document.getElementById("vmad").focus();
		alert("Aun no ingrese su Genero");

	}


	var tot = 0;
	/*Descuento Masculino*/
	if(sexo=="Masculino"){
		if(edad>=62){
			tot= vmad * cantidad;
			tot = vmad - (vmad*0.15);
			tot =tot + (tot*0.07);
		}
		else{
			tot = vmad*cantidad;
		}
	}
	/*Descuento Femenino*/
	else if(sexo=="Femenino"){
			if(edad>=62){
			tot= vmad * cantidad;
			tot = vmad - (vmad*0.15);
			tot =tot + (tot*0.07);
		}
		else{
			tot = vmad*cantidad;
		}
	}
	
	
	top = roundToTwo(top);

	impresion.innerHTML= "Ha realizado el pedido";
	impresion2.innerHTML= cantidad + "*" + vmad + "| total: B/." + tot;
}


