var botaoAdicinar = document.querySelector('#adicionar-paciente');

botaoAdicinar.addEventListener ('click', function(event) {
	event.preventDefault();

	var form = document.querySelector ('#form-adiciona');
	paciente = obtemPacienteDoFormulario(form);
	
	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
		exibeMensagensDeErro (erros);
		return;
	}

	adicionaPacienteNaTabela ();

	form.reset();
	var mensagensErro = document.querySelector('#mensagens-erro');
	mensagensErro.innerHTML = '';
});	

// extraindo informações do paciente dentro do form pegar o 'name' e o valor que foi inserido
	/*var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;*/
	
	// form.js
	function obtemPacienteDoFormulario(form) {

	    var paciente = {
	        nome: form.nome.value,
	        peso: form.peso.value,
	        altura: form.altura.value,
	        gordura: form.gordura.value,
	        imc: calculaImc(form.peso.value, form.altura.value)
	    }

	    return paciente;
	}



//cria a tr e a td do paciente
	//var pacienteTr = document.createElement ('tr');

	function montaTr(paciente) {
    //Cria TR
	    var pacienteTr = document.createElement("tr");
	    pacienteTr.classList.add("paciente");
	    //Cria as TD's e a adiciona dentro da TR
	    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
	    // retorna a TR
	    return pacienteTr;  
	}

	function adicionaPacienteNaTabela(paciente) {
	var pacienteTr = montaTr (paciente);
	var tabela = document.querySelector('#tabela-pacientes');
 	tabela.appendChild (pacienteTr);
 }


	function montaTd(dado, classe) {
	    var td = document.createElement("td");
	    td.classList.add(classe);
	    td.textContent = dado;

	    return td;
	}

		/*var nomeTd = document.createElement ('td');
		var pesoTd = document.createElement ('td');
		var alturaTd = document.createElement ('td');
		var gorduraTd = document.createElement ('td');
		var imcTd = document.createElement ('td');

	//bota os valores dentro do td
		nomeTd.textContent = nome;
		pesoTd.textContent = peso;
		alturaTd.textContent = altura;
		gorduraTd.textContent = gordura;
		imcTd.textContent = calculaImc(peso,altura);

	//add o td dentro da tabela
		pacienteTr.appendChild (nomeTd);
		pacienteTr.appendChild (pesoTd);
		pacienteTr.appendChild (alturaTd);
		pacienteTr.appendChild (gorduraTd);
		pacienteTr.appendChild (imcTd);

		return pacienteTr;
	}*/

	/* add o paciente na tabela
	var tabela = document.querySelector('#tabela-pacientes');

	tabela.appendChild(pacienteTr);
})*/

function validaPaciente(paciente) {
	
	var erros = [];

	if (paciente.nome.length == 0) {
		erros.push ('insira nome');
	}

	if (!validaPeso(paciente.peso)) {
		erros.push ('peso inválido');
	}

	if (!validaAltura(paciente.altura)) {
		erros.push ('altura inválida');
	}

	if (paciente.gordura.length == 0) {
		erros.push ('insira gordura');
	}

	if (paciente.peso.length == 0) {
		erros.push ('insira peso');
	}

	if (paciente.altura.length == 0) {
		erros.push ('insira altura');
	}

	return erros;
}

function exibeMensagensDeErro(erros) {
	var ul = document.querySelector ('#mensagens-erro');
	ul.innerHTML = ''; //para não acumular as msg de erro na página.
	erros.forEach (function (erro) {
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
	});
}