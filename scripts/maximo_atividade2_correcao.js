var flag_flash = false;
var flag_doc = false;

Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag_flash = true;
	init_load();
});


Event.observe(window, 'load', function(){
	flag_doc = true;
	init_load();
});



var offsetColuna = 0;
var offsetLinha = 0;


function init_load()
{
	if ( (flag_flash) && (flag_doc) )
	{

		setAtividade('atividade_2',2,false);
		offsetColuna = $('seta_coluna').positionedOffset().left;
		offsetLinha = $('seta_linha').positionedOffset().top;
		apagaSelecaoTabela();
			
		

		Event.observe('botaoJogar', 'click', function(evento){
				jogarTabela();
			});

			Event.observe('botaoApagarSelecao', 'click', function(evento){
				apagaSelecaoTabela();
			});

			Event.observe('botaoZerarTabela', 'click', function(evento){
				zeraTabela();
			});


		// switch para a tabela
		switch (PosicaoAtual.Parte) {
		case 0:

			
			
			for (var i=1;i<=6;i++) {
				for (var k=1;k<=6;k++) {
					$('input'+i+k).value=getResp('tabela'+i+k);
					Event.observe('input'+i+k, 'change', function(evento){
					verificaValorTabela(this.id);
					});
					verificaValorTabela('input'+i+k);
				}
			}

				
			
			break;
		case 1: case 2: case 3:

		
		
			for (var i=1;i<=6;i++) {
				for (var k=1;k<=6;k++) {
					Event.observe('input'+i+k, 'change', function(evento){
					verificaValorTabela(this.id);
					corrigirTabela();
					
					});
				}
			}
		
			for (var i=1;i<=6;i++) {
				for (var k=1;k<=6;k++) {
					$('input'+i+k).value=Math.max(i,k);
					verificaValorTabela('input'+i+k) 
				}
			}
			corrigirTabela();

			break;		

		}

		// switch para campos
		switch (PosicaoAtual.Parte) 
		{
			case 1:
			
				$('parte2_q2_a').value = getResp('atividade2_parte2_q2_a');
				$('parte2_q2_b').value = getResp('atividade2_parte2_q2_b');
				$('parte2_q2_c').value = getResp('atividade2_parte2_q2_c');
				$('parte2_q2_d').value = getResp('atividade2_parte2_q2_d');
				$('parte2_q2_e').value = getResp('atividade2_parte2_q2_e');
				$('parte2_q2_f').value = getResp('atividade2_parte2_q2_f');
			
				Event.observe('parte2_q2_a', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_a',0);
				setResp('atividade2_parte2_q2_a',$('parte2_q2_a').value);
				});
			
				Event.observe('parte2_q2_b', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_b',0);
				setResp('atividade2_parte2_q2_b',$('parte2_q2_b').value);
				});

				Event.observe('parte2_q2_c', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_c',0);
				setResp('atividade2_parte2_q2_c',$('parte2_q2_c').value);
				});
				
				Event.observe('parte2_q2_d', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_d',0);
				setResp('atividade2_parte2_q2_d',$('parte2_q2_d').value);
				});
				
				Event.observe('parte2_q2_e', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_e',0);
				setResp('atividade2_parte2_q2_e',$('parte2_q2_e').value);
				});
				
				Event.observe('parte2_q2_f', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte2_q2_f',0);
				setResp('atividade2_parte2_q2_f',$('parte2_q2_f').value);
				});
			break;
			case 2:
			
				$('parte3_q3_a').value = getResp('atividade2_parte3_q3_a');
				$('parte3_q3_b').value = getResp('atividade2_parte3_q3_b');
			
				Event.observe('parte3_q3_a', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte3_q3_a',0);
				setResp('atividade2_parte3_q3_a',$('parte3_q3_a').value);
				});

				Event.observe('parte3_q3_b', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte3_q3_b',0);
				setResp('atividade2_parte3_q3_b',$('parte3_q3_b').value);
				});
				
		}	
		



		/*
		Veja que está sendo criada logo abaixo uma instância de "Blocao", uma classe de
		bloco de notas que permite tabelas no conteúdo. Se não for usar tabelas no Software,
		altere para "Bloco" (mesmo efeito, porém menor e não aceita tabelas).
		*/
		BlocoNotas = new Bloco();
		//qq outra coisa que deva ser chamada após o load
	}
};


/*
	As funções a abixo são usadas para corrigir as questões. Em geral elas devem
	devolver um array com o resultado de cada input do item da questão. Cada tipo
	de questão, porém, possui certas peculiaridades. O padrão de resposta para
	cada campo é:
		- true, se está correto;
		- false, se está certo;
		- null, se não deve ser aplicada nenhuma correção
	
	Estudem esse código pra ver cada caso.
	A variável valor é sempre um Array com os valores dos inputs. Não é obrigatório
	o seu uso, visto que cada input possui um ID. Mas pode ser usado por conveniencia.
*/

//Um input de texto cuja resposta correta é 'qwe'
function corrige_q_1_a(valor)	{

	return ([corrigirTabela()]);

} 

function corrige_q_2_a(valor)
{
	return ([valor[0]==1]);
} 
function corrige_q_2_b(valor)
{
	return ([valor[0]==3]);
} 
function corrige_q_2_c(valor)
{
	return ([valor[0]==5]);
} 
function corrige_q_2_d(valor)
{
	return ([valor[0]==7]);
} 
function corrige_q_2_e(valor)
{
	return ([valor[0]==9]);
} 
function corrige_q_2_f(valor)
{
	return ([valor[0]==11]);
} 

function corrige_q_3_a(valor)
{
	return ([valor[0]==16]);
} 

function corrige_q_3_b(valor)
{
	return ([valor[0]==20]);
} 

function corrigirTabela() {
	var erros=0;
	var vazios=0;	
	for (i=1;i<=6;i++) {
		for (k=1;k<=6;k++) {
			idInput='input'+i+k;			
			max = Math.max(i,k);
			if ($(idInput).value!="") {
				if ($(idInput).value!=max) {
					erros++;
					$(idInput).removeClassName('correto');					
					$(idInput).addClassName('incorreto');
				} else {
					$(idInput).removeClassName('incorreto');				
					$(idInput).addClassName('correto');
				}
			} else {
				$(idInput).removeClassName('incorreto');
				$(idInput).removeClassName('correto');
				vazios++;
			};
		}
	}
	

	if ((erros==0) && (vazios==0)) {
		return true;
	} else return false;
}

function verificaValorTabela(idInput) {

//	cel=document.getElementById(idCelula);

	idCelula = 'tab'+idInput.charAt(5)+idInput.charAt(6);
	
	input = $(idInput);
	cel = $(idCelula);

	
	if (cel!=null) {
	
		input.removeClassName('incorreto');
		input.removeClassName('correto');
	
		if (isNaN(input.value)) {
			input.value="";
		};

		if ((input.value>6) || (input.value<1)) {
			input.value="";
		};

		setResp('tabela'+idInput.charAt(5)+idInput.charAt(6),input.value);
		
		if (input.value!="") {
			if (input.value>=5) {
				cel.removeClassName("jogador2");
				cel.addClassName('jogador1');
			} else {
				cel.removeClassName("jogador1");			
				cel.addClassName('jogador2');	
			}
		} else {
			cel.removeClassName("jogador1");			
			cel.removeClassName("jogador2");
		}

	}

}

function tudoCerto() {


		switch (PosicaoAtual.Parte) {
			case 0: 
				break;
			case 1: 
				break;
			case 2: 
				setAtividade('atividade_2',3,true);
				setAtividade('desafio',1,false);
			break;
	
		}
}



