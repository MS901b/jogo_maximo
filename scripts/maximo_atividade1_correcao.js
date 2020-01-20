var flag_flash = true;
var flag_doc = false;


Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag_flash = true;
	init_load();
});


Event.observe(window, 'load', function(){
	flag_doc = true;
	init_load();
});

function init_load()
{
					
	if ( (flag_flash) && (flag_doc) )
	{
		setAtividade('atividade_1',2,false);
		switch (PosicaoAtual.Parte) {
		case 0:
			//Carrega valores iniciais
			$('parte1_q1_a').value = getResp('atividade1_parte1_q1_a');
			$('parte1_q2_a').value = getResp('atividade1_parte1_q2_a');
			$('parte1_q2_b').value = getResp('atividade1_parte1_q2_b');
			$('parte1_q2_c').value = getResp('atividade1_parte1_q2_c');
			$('parte1_q2_d').value = getResp('atividade1_parte1_q2_d');
			$('parte1_q2_e_1').checked = (getResp('atividade1_parte1_q2_e')=='primeiro_jogador');
			$('parte1_q2_e_2').checked = (getResp('atividade1_parte1_q2_e')=='segundo_jogador');
			$('parte1_q2_e_3').checked = (getResp('atividade1_parte1_q2_e')=='empate');

			Event.observe('parte1_q1_a', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte1_q1_a',0);
				setResp('atividade1_parte1_q1_a',$('parte1_q1_a').value);
			});
			
			Event.observe('parte1_q2_a', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte1_q2_a',0);
				setResp('atividade1_parte1_q2_a',$('parte1_q2_a').value);
			});

			Event.observe('parte1_q2_b', 'change', function(evento){
				validacaoRespostaNumerica('parte1_q2_b',2);
				setResp('atividade1_parte1_q2_b',$('parte1_q2_b').value);
			});

			Event.observe('parte1_q2_c', 'change', function(evento){
				validacaoRespostaNumericaSimples('parte1_q2_c',0);
				setResp('atividade1_parte1_q2_c',$('parte1_q2_c').value);
			});

			Event.observe('parte1_q2_d', 'change', function(evento){
				validacaoRespostaNumerica('parte1_q2_d',2);
				setResp('atividade1_parte1_q2_d',$('parte1_q2_d').value);
			});

			
			Event.observe('parte1_q2_e_1', 'change', function(evento){
				setResp('atividade1_parte1_q2_e',$('parte1_q2_e_1').value);
			});
			
			Event.observe('parte1_q2_e_2', 'change', function(evento){
				setResp('atividade1_parte1_q2_e',$('parte1_q2_e_2').value);
				
			});
			Event.observe('parte1_q2_e_3', 'change', function(evento){
				setResp('atividade1_parte1_q2_e',$('parte1_q2_e_3').value);
				
			});

			Event.observe('jogadaIndividutalButton', 'click', function(evento){

				pausaFazJogadas(1,1);
			});

			Event.observe('10JogadasButton', 'click', function(evento){
				pausaFazJogadas(10,0.1);
			});

			Event.observe('zerarJogadasButton', 'click', function(evento){
				ApagarJogadas();
			});
			
			
			break;
		case 1:
			//Carrega valores iniciais
			$('parte2_q3_a').value = getResp('atividade1_parte2_q3_a');
			$('parte2_q3_b').value = getResp('atividade1_parte2_q3_b');
			$('parte2_q3_c_1').checked = (getResp('atividade1_parte2_q3_c')=='primeiro_jogador');
			$('parte2_q3_c_2').checked = (getResp('atividade1_parte2_q3_c')=='segundo_jogador');
			$('parte2_q3_c_3').checked = (getResp('atividade1_parte2_q3_c')=='empate');

			Event.observe('parte2_q3_a', 'change', function(evento){
				validacaoRespostaNumerica('parte2_q3_a',2);
				setResp('atividade1_parte2_q3_a',$('parte2_q3_a').value);
			});
			
			Event.observe('parte2_q3_b', 'change', function(evento){
				validacaoRespostaNumerica('parte2_q3_b',2);
				setResp('atividade1_parte2_q3_b',$('parte2_q3_b').value);
			});

			Event.observe('parte2_q3_c_1', 'change', function(evento){
				setResp('atividade1_parte2_q3_c',$('parte2_q3_c_1').value);
			});
			
			Event.observe('parte2_q3_c_2', 'change', function(evento){
				setResp('atividade1_parte2_q3_c',$('parte2_q3_c_2').value);
				
			});
			Event.observe('parte2_q3_c_3', 'change', function(evento){
				setResp('atividade1_parte2_q3_c',$('parte2_q3_c_3').value);
				
			});

			Event.observe('jogadaIndividutalButton', 'click', function(evento){
				pausaFazJogadas(1,1);
			});

			Event.observe('10JogadasButton', 'click', function(evento){
				pausaFazJogadas(10,0.1);
			});

			Event.observe('zerarJogadasButton', 'click', function(evento){
				ApagarJogadas();
			});
			break;		
		case 2:
			//Carrega valores iniciais
			$('parte3_q4_a').value = getResp('atividade1_parte3_q4_a');
			$('parte3_q4_b').value = getResp('atividade1_parte3_q4_b');
			$('parte3_q4_c_1').checked = (getResp('atividade1_parte3_q4_c')=='primeiro_jogador');
			$('parte3_q4_c_2').checked = (getResp('atividade1_parte3_q4_c')=='segundo_jogador');
			$('parte3_q4_c_3').checked = (getResp('atividade1_parte3_q4_c')=='empate');

			Event.observe('parte3_q4_a', 'change', function(evento){
				validacaoRespostaNumerica('parte3_q4_a',2);
				setResp('atividade1_parte3_q4_a',$('parte3_q4_a').value);
			});
			
			Event.observe('parte3_q4_b', 'change', function(evento){
				validacaoRespostaNumerica('parte3_q4_b',2);
				setResp('atividade1_parte3_q4_b',$('parte3_q4_b').value);
			});

			Event.observe('parte3_q4_c_1', 'change', function(evento){
				setResp('atividade1_parte3_q4_c',$('parte3_q4_c_1').value);
			});
			
			Event.observe('parte3_q4_c_2', 'change', function(evento){
				setResp('atividade1_parte3_q4_c',$('parte3_q4_c_2').value);
				
			});
			Event.observe('parte3_q4_c_3', 'change', function(evento){
				setResp('atividade1_parte3_q4_c',$('parte3_q4_c_3').value);
				
			});

			Event.observe('jogadaIndividutalButton', 'click', function(evento){
				pausaFazJogadas(1,1);
			});

			Event.observe('10JogadasButton', 'click', function(evento){
				pausaFazJogadas(10,0.1);
			});

			Event.observe('zerarJogadasButton', 'click', function(evento){
				ApagarJogadas();
			});
			break;		

			case 3:
			break;		

		}
			
		/*
		Veja que está sendo criada logo abaixo uma instância de "Blocao", uma classe de
		bloco de notas que permite tabelas no conteúdo. Se não for usar tabelas no Software,
		altere para "Bloco" (mesmo efeito, porém menor e não aceita tabelas).
		*/
		BlocoNotas = new Bloco();
		//qq outra coisa que deva ser chamada após o load
	}


}


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
	ocorrencias=geraOcorrencias();
	
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=10)) {
	
	
		var ocorrenciasSorted=ocorrencias.slice();

		ocorrenciasSorted.sort();

		while (ocorrenciasSorted[0][0]<ocorrenciasSorted[ocorrenciasSorted.length-1][0]) {
			ocorrenciasSorted.shift();	
		}

		var ocorrenciasMax = new Array();
		for (i=0;i<ocorrenciasSorted.length;i++) {
			ocorrenciasMax.push(ocorrenciasSorted[i][1]);
		}
		
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
				correto = ( (ocorrenciasMax.indexOf(Number(valor))>-1) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];



} 

function corrige_q_2_a(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null)) {
		if ( (!(isNaN(valor[0]))) &&  (valor[0]!=null))
			{
				correto = ( (ocorrencias[0][0]==(Number(valor[0]))) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];
} 

function corrige_q_2_b(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=10)) {
	
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
			
				proporcao = ocorrencias[0][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

		
} 
function corrige_q_2_c(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=10)) {
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
				correto = ( (ocorrencias[5][0]==(Number(valor[0]))) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

} 
function corrige_q_2_d(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null)) {
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
				proporcao = ocorrencias[5][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];


} 

function corrige_q_2_e(valor)
{
	ocorrencias=geraOcorrencias();
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=10)) {
		var Jogador1=ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0];
		var Jogador2=ocorrencias[4][0]+ocorrencias[5][0];
		return [valor[0]?(Jogador1>Jogador2):null, valor[1]?(Jogador1<Jogador2):null, valor[2]?(Jogador1==Jogador2):null];
	} else return[null,null,null];
} 

function corrige_q_3_a(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=30)) {
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
				proporcao = ocorrencias[0][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

} 

function corrige_q_3_b(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=30)) {
		if ( (!(isNaN(valor[0]))) && (valor[0]!=null))
			{
				proporcao = ocorrencias[5][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

} 

function corrige_q_3_c(valor)
{
	ocorrencias=geraOcorrencias();
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=30)) {
		var Jogador1=ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0];
		var Jogador2=ocorrencias[4][0]+ocorrencias[5][0];
		return [valor[0]?(Jogador1>Jogador2):null, valor[1]?(Jogador1<Jogador2):null, valor[2]?(Jogador1==Jogador2):null];
	} else return[null,null,null];
} 

function corrige_q_4_a(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=100)) {
		if ( (!(isNaN(valor[0]))) &&  (valor[0]!=null))
			{
				proporcao = ocorrencias[0][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

} 

function corrige_q_4_b(valor)
{
	ocorrencias=geraOcorrencias();
	valor[0]=processaNumero(valor[0]);
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=100)) {
		if ( (!(isNaN(valor[0]))) &&  (valor[0]!=null))
			{
				proporcao = ocorrencias[5][0] / (ocorrencias[0][0] + ocorrencias[1][0] + ocorrencias[2][0] + ocorrencias[3][0] + ocorrencias[4][0] + ocorrencias[5][0]);
				correto = ( (roundNumber(proporcao,2)==roundNumber(valor[0],2)) ? true : false );
			} 
			else correto = false;
		return [ correto ] ;
	} else return [null];

} 

function corrige_q_4_c(valor)
{
	ocorrencias=geraOcorrencias();
	
	if (!(ocorrencias==null) && (numero_jogadas(ocorrencias)>=100)) {
		var Jogador1=ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0];
		var Jogador2=ocorrencias[4][0]+ocorrencias[5][0];
		return [valor[0]?(Jogador1>Jogador2):null, valor[1]?(Jogador1<Jogador2):null, valor[2]?(Jogador1==Jogador2):null];
	} else return[null,null,null];
} 


function tudoCerto() {
	
	if (PosicaoAtual.Parte!=3) var ocorrencias=geraOcorrencias(); 
	
	
	if (ocorrencias!=null) {
		var Jogador1=ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0];
		var Jogador2=ocorrencias[4][0]+ocorrencias[5][0];
		var TotalJogadas = ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0]+ocorrencias[4][0]+ocorrencias[5][0];
		switch (PosicaoAtual.Parte) {
			case 0: 
//			BlocoNotas.novaNota('Parte '+(parte+1)+': Para '+TotalJogadas+' jogadas, o Jogador 1 ganhou '+Jogador1+' vezes, enquanto que o Jogador 2 ganhou '+Jogador2+' vezes');
				break;
			case 1: 
			
			//BlocoNotas.novaNota('Parte '+(parte+1)+': Para '+TotalJogadas+' jogadas, o Jogador 1 ganhou '+Jogador1+' vezes, enquanto que o Jogador 2 ganhou '+Jogador2+' vezes');
				break;
			case 2: 
			setAtividade('atividade_1',3,true);
			setAtividade('atividade_2',1,false);
//			BlocoNotas.novaNota('Parte '+(parte+1)+': Para '+TotalJogadas+' jogadas, o Jogador 1 ganhou '+Jogador1+' vezes, enquanto que o Jogador 2 ganhou '+Jogador2+' vezes');

				break;
	
		}
	}
}	



