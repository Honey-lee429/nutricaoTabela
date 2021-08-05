var titulo = document.querySelector (".titulo");
titulo.textContent = "Hanna Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
	var pesoPaciente = pacientes[i].querySelector (".info-peso");
	var peso = pesoPaciente.textContent;
	var alturaPaciente = pacientes[i].querySelector(".info-altura");
	var altura = alturaPaciente.textContent;
	var imcPaciente = pacientes[i].querySelector (".info-imc");

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if (!pesoValido) {//(peso <= 0 || peso >= 700) 
		pesoValido = false;
		imcPaciente.textContent = "Peso Inválido!";
		//pacientes[i].style.color = "red"; melhor alterar estilos visuais no CSS
		pacientes[i].classList.add('paciente-invalido'); //classList é uma propriedade que nos dá acesso a lista das classes de um HTML, selecionado pela função querySelectorAll. add serve para adicionar uma segunda classe, pois já existe classe 'paciente'.
	}

	if (!alturaValida) { //(altura <= 0 || altura >= 3.00)
		alturaValida = false;
		imcPaciente.textContent = "Altura Inválida!"
		paciente.classList.add('paciente-invalido');
	}

	if (pesoValido && alturaValida) {
		imc = calculaImc(peso,altura);
		imcPaciente.textContent = imc;
	}
}

//cria uma função para chamar no form.js para validar os dados qdo inseridos no formulário.
function validaPeso(peso) {
	if(peso >= 0 && peso <= 700) {
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura) {
	if (altura >=0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}


function calculaImc(peso,altura) {
	var	imc = peso/(altura*altura)
		return imc.toFixed(2);
}





