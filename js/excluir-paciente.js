/*var pacientes = document.querySelectorAll ('.paciente');


pacientes.forEach (function (paciente) {
 	paciente.addEventListener ('dblclick', function(){
		this.remove();
 	});
})*/

var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener ('dblclick', function(x){
	//x.target.remove(); // a propriedade target nos informa o alvo clicado dentro da tabela.
	// Alvo do evento = x.target | remove td
	// Pai do evento = x.target.parentNode | remove tr 
	//x.target.parentNode.remove(); | com o remove a linha desaparece instantaneamente, então vamos criar uma classe no CSS para desvanecer a linha
	x.target.parentNode.classList.add('fadeOut');
	setTimeout(function(){
		x.target.parentNode.remove();
	},500);
});
