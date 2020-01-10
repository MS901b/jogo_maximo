// Javascript

valoresDados = [ 1, 1 ];

function jogarIntro(){
	$('botaoJogar').trava();

	// Mostra a animação da dado rodando (dice0.gif)
	document.getElementById( "dado1" ).setAttribute( 'src', 'imgs/dice0.gif'); 
	document.getElementById( "dado2" ).setAttribute( 'src', 'imgs/dice0.gif');
//	document.getElementById( "dado3" ).setAttribute( 'src', 'dice0.gif');

	// Carrega valores aleatórios nos dados.
	valoresDados[0]=rollDice();
	valoresDados[1]=rollDice();
//	valoresDados[2]=rollDice();
	
	// Gera 3 valores de timeout para os dados, entre 4 e 12
	timeout1=Math.ceil(Math.random()*8)+4;
	timeout2=Math.ceil(Math.random()*8)+4;
//	timeout3=Math.ceil(Math.random()*8)+4;
	
	// Baseado nos valores de timeout, chama as funções que irão mostrar o valor dos dados. 
	// Cria uma chamada com o valor maximo desses timeout para finalizar a jogada e mostrar o vencedor ao jogador.
	setTimeout('showDado("dado1",0)',timeout1*150);
	setTimeout('showDado("dado2",1)',timeout2*150);
//	setTimeout('showDado("dado3",2)',timeout3*150);
	setTimeout('fimJogadaIntro()',Math.max(timeout1,timeout2)*150);
}

// Funcao chamada ao terminar a jogada chamada na página de Introdução
function fimJogadaIntro(){

	// Habilita o botão de jogar
	$('botaoJogar').destrava();

	// Baseado no valor maximo dos dados, atualiza o texto com id 'total' com esse valor.
	var maximo=Math.max.apply(Math, valoresDados);
	document.getElementById('total').innerHTML=maximo;
	// Se maximo <5, atualiza elemento com tag 'vencedor' para mostrar que o jogador ganhou. Atualiza para Computador caso o contrário.
	if (maximo<5) {
		document.getElementById('vencedor').innerHTML='Primeiro Jogador';
		} else { document.getElementById('vencedor').innerHTML='Segundo Jogador'};
}

// Atualiza a imagem com id 'idImg' com o valor do dado numDado (pego na array valroesDados
function showDado(idImg,numDado) {
	document.getElementById( idImg ).setAttribute( 'src', 'imgs/dice'+valoresDados[numDado]+'.gif');
}

function rollDice(){
	return (Math.ceil(Math.random()*6));
}
