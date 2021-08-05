var botaoAdicionar = document.querySelector ('#buscar-pacientes');

botaoAdicionar.addEventListener ('click', function () {
	console.log ('botaoAdicionar')

	var xhr = new XMLHttpRequest (); // o objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript.
		//dado que temos um XMLHttpResquest, precisamos confirgurar nossa requisição para dizer para qual servidotr queremos enviá-la e tmb qual método HTTP devemos usar se é GET, POST etc.
	xhr.open ('GET', "https://api-pacientes.herokuapp.com/pacientes");
	
	xhr.addEventListener ('load', function(){
		var erroAjax = document.querySelector ('#erro-ajax');

		if (xhr.status == 200){ //200 é o código qdo a pag não tem erro
			erroAjax.classList.add ('invisivel');
			var pacientes = JSON.parse (xhr.responseText);

			pacientes.forEach (function(paciente) {
			adicionaPacienteNaTabela (paciente);
			});
		}else {
			console.log (xhr.status);
			console.log (xhr.responseText);

			erroAjax.classList.remove ('invisivel');
		}

	});

	xhr.send();
});