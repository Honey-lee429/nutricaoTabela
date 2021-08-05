var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener ('input', function(){
	// a função addEventListener recebe dois parâmetros, e serve para que o número de caracteres seja atualiazado conforme o usuário escreva dentro do input.	
	console.log(this.value);

	var pacientes = document.querySelectorAll ('.paciente');

	if (this.value.length > 0) {
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector ('.info-nome');
			var nome = tdNome.textContent;
			var expressao = new RegExp (this.value, "i") //Expressões Reguralres, auxiliar a busca por strings, ou seja, ele busca por letras dentro das palavras. Case insensitive ('i') para buscar palavras tanto com letras maíusculas ou minusculas, e passaremos a letra 'i' como segundo parâmetro.
			if (!expressao.test (nome)) {
				paciente.classList.add ('invisivel');
			}else {
				paciente.classList.remove ('invisivel');
			}
			
			//dentro desse for quando mesmo que o input não tem nada digitado, ou seja, nome é diferente this.value, então ele deixa a tabela interia invisíel. 
			// Neste caso teremos que fazer outra função if(this.value.length > 0) e colocar o for para informar qdo o input estiver vazio, retornar toda a tabela na pag.
		}
	} else {
		for (var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];paciente.classList.remove ('invisivel');
			paciente.classList.remove ('invisivel');
		}
	}

});