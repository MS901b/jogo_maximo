// Javascript

var valoresDados = [ 1, 1 ];


function rollDice(){
	return (Math.ceil(Math.random()*6));
}

//Adiciona uma linha na tabela utilizada pela parte1, parte2 e desafio.
function addRow(valorMax,valorVenc,valorDado1,valorDado2){

	var tbody = document.getElementById("tabelaDados").getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");

	//Adiciona os dois primeiros dados
	td = document.createElement("TD");	
	doc = document.createTextNode(valorDado1);td.appendChild(doc);
    row.appendChild(td);	
	td = document.createElement("TD");	
	doc = document.createTextNode(valorDado2);	td.appendChild(doc);	
	
    row.appendChild(td);	
	

	//Adiciona os valores de Maximo e Vencedor
    td = document.createElement("TD");	
	doc = document.createTextNode(valorMax); td.appendChild(doc);	
    row.appendChild(td);	
    td = document.createElement("TD");	
	doc = document.createTextNode(valorVenc); td.appendChild(doc);	
    row.appendChild(td);	
	
	// Adiciona a row no tbody.
    tbody.appendChild(row);

	// Atualiza o camp que informa o total de jogadas.
	var td = document.getElementById( 'nTotalJogadas' );
	td.innerHTML = (tbody.rows.length);
}


function validacaoRespostaNumericaSimples(id,casas) {

	valor = $(id).value;
	if (valor.strip().empty()) valor=NaN;
	if (isNaN(valor) || (valor==null)) {
		$(id).value='';
		return false;
	} else {
		$(id).value=roundNumber(valor,casas);
	}
}
function validacaoRespostaNumerica(id,casas) {
	valor = $(id).value;
	
	if (valor.strip().empty()) valor=NaN;
	
	valor = processaNumero(valor);

	if (isNaN(valor) || (valor==null)) {
		$(id).value='';
		return false;
	} else {
		if ($(id).value.indexOf('%')>-1) 
		{
			$(id).value=roundNumber(valor*100,0)+'%';
		} else
		if ($(id).value.indexOf('/')>-1) 
		{
			//Formato de fraÃ§Ã£o
		} 
		else
		{
			$(id).value=roundNumber(valor,casas);
		}
		return true;
	}
	
}



function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}

function pausaFazJogadas(nJogadas,pausa,desafio) {



	if (desafio==undefined) desafio=false;

	$("jogadaIndividutalButton").trava();
	$("10JogadasButton" ).trava();
	$( "zerarJogadasButton" ).trava();

	
	for (var i=nJogadas;i>0;i--) {
		setTimeout('fazJogadas(1,'+desafio+')',pausa*i*1000);		
	}
	setTimeout('fimpausaFazJogadas()',pausa*nJogadas*1000);			
}

function fimpausaFazJogadas() {
	$("jogadaIndividutalButton").destrava();
	$("10JogadasButton" ).destrava();
	$( "zerarJogadasButton" ).destrava();

};


// Realiza N jogadas e adiciona na tabela. tempoEspera espeficia quanto tempo para liberar os botoes
function fazJogadas(nJogadas,desafio){


	if (desafio==undefined) desafio = false;

	
	if ( desafio && 
	($('spinner1').getValue()==0) && ($('spinner2').getValue()==0) &&  ($('spinner3').getValue()==0) && 
	($('spinner4').getValue()==0) && ($('spinner5').getValue()==0) &&  ($('spinner6').getValue()==0) ) return;
	
// temporario
	var nDados =2;
	
	var dadosNumeros = new Array(nDados);

	// Para cada uma das Jogadas...
	for (var i=1;i<=nJogadas;i++){

	
		if (!desafio) {
			for (var k=0;k<nDados;k++){
					dadosNumeros[k]=rollDice();
			}
		} else {
			for (var k=0;k<nDados;k++){
				dadosNumeros[k]=rollDiceWeight($('spinner1').getValue(),$('spinner2').getValue(),$('spinner3').getValue(),$('spinner4').getValue(),$('spinner5').getValue(),$('spinner6').getValue());
			}
		}
	
		// Pega o valor máximos dos que foram selecionados para os Dados
		var maximo=Math.max.apply(Math, dadosNumeros);
	
		// Decide quem foi o ganhador desse jogo
		if (maximo<5) {
			var vencJogo="Jogador 1";
		} else {
			var vencJogo="Jogador 2";
		}

	
		// Envia o resultado para o applet do Geogebra
		//Nao funcionando com o novo 3.2 assinado por algum motivo. Eh free object mas da erro de circular
		//applet.evalCommand("n"+maximo+" = n"+maximo+"+1");  
		
		var applet = document.ggbApplet;
		var num_temp = 0;
		num_temp = applet.getValue("n"+maximo);
		num_temp++;
	  	applet.evalCommand("n"+maximo+" = "+String(num_temp));  
		
		// Chama addRow de acordo com quantos dados estão sendo usados (para parte2) 
		// * Melhorar essa chamada
		switch(nDados)
			{
			case 2:
				addRow(maximo,vencJogo,dadosNumeros[0],dadosNumeros[1],"-","-");
				break;
			case 3:
				addRow(maximo,vencJogo,dadosNumeros[0],dadosNumeros[1],dadosNumeros[2],"-");
				break;
			case 4:
				addRow(maximo,vencJogo,dadosNumeros[0],dadosNumeros[1],dadosNumeros[2],dadosNumeros[3]);
				break;
			};
	
		// Faz o scroll para baixo da tabela de jogadas.
		var divScroll = document.getElementById('listaJogadas');
		divScroll.scrollTop = divScroll.scrollHeight;
		
	
	// ... fim do for para cada jogada.
	};
	
}

function ApagarJogadas(){

	// Apaga, linha por linha, a tabela.
	// Uma solução mais simples substituindo innerHtml da tabela é possivel no Firefox. Mas não funciona no IE.
	var tbody = document.getElementById("tabelaDados").getElementsByTagName("TBODY")[0];
	for (var i=tbody.rows.length-1; i>=0; i--) {
		tbody.deleteRow(i);
		}
		
	// Zera os valores no applet do Geogebra.	
	var applet = document.ggbApplet;
	applet.evalCommand("n1 = 0");  
	applet.evalCommand("n2 = 0");  	
	applet.evalCommand("n3 = 0");  	
	applet.evalCommand("n4 = 0");  
	applet.evalCommand("n5 = 0");    
	applet.evalCommand("n6 = 0");  
	
	// Zera a linha de Total de Jogadas
	var td = document.getElementById( 'nTotalJogadas' );
	td.innerHTML = '0';
	
}	
  

function rollDice(){
	return (Math.ceil(Math.random()*6));
}



function getFlashMovie(movieName) {
  var isIE = navigator.appName.indexOf("Microsoft") != -1;
  return (isIE) ? window[movieName] : document[movieName];
 
 }

  function getResp(id)
 {
	return ( getFlashMovie('SalvaLocal').Pega(nomeSoft,id)=='undefined' ? '' : getFlashMovie('SalvaLocal').Pega(nomeSoft,id));
 }
 
  function setResp(id,valor)
 {
 	getFlashMovie('SalvaLocal').Salva(nomeSoft,id,valor);
 }

   function apagaTodasResp()
 {
 	return (getFlashMovie('SalvaLocal').ApagaTudo(nomeSoft));
 }
 
 function geraOcorrencias() {
 	var tbody = document.getElementById("tabelaDados").getElementsByTagName("TBODY")[0];
	var correto=false;
	var ocorrencias = [ [0,1],[0,2],[0,3],[0,4],[0,5],[0,6] ];
	for (i=0;i<ocorrencias.length;i++) {
		ocorrencias[i][0]=0;	
	}
	for (var i=tbody.rows.length-1; i>=0; i--) 
		ocorrencias[tbody.rows[i].cells[2].innerHTML-1][0]++;
	if (tbody.rows.length>0) {
		return ocorrencias
	} else return null;
}

function rollDiceWeight(p1,p2,p3,p4,p5,p6) {
	var numbers=["1", "2", "3", "4","5","6"]
	var numberweight=[p1,p2,p3,p4,p5,p6] 
	var totalweight=eval(numberweight.join("+")) 
	var weighednumbers=new Array() 
	var currentnumber=0
	
	while (currentnumber<numbers.length){
	for (i=0; i<numberweight[currentnumber]; i++)
	weighednumbers[weighednumbers.length]=numbers[currentnumber]
	currentnumber++
	}
	var randomnumber=Math.floor(Math.random()*totalweight);

	return (weighednumbers[randomnumber]);
}

function numero_jogadas(ocorrencias) {

	if ( !(ocorrencias==null)) {
		return ocorrencias[0][0]+ocorrencias[1][0]+ocorrencias[2][0]+ocorrencias[3][0]+ocorrencias[4][0]+ocorrencias[5][0];
	} else return -1;

}

function jogarTabela(){

	$( "botaoJogar" ).trava();
	$( "botaoApagarSelecao" ).trava();
	$( "botaoZerarTabela" ).trava();

	
	// Mostra a animação da dado rodando (dice0.gif)
	$( "dado1" ).setAttribute( 'src', 'imgs/dice0.gif'); 
	$( "dado2" ).setAttribute( 'src', 'imgs/dice0.gif');

	// Carrega valores aleatórios nos dados.
	valoresDados[0]=rollDice();
	valoresDados[1]=rollDice();
	
	// Gera 2 valores de timeout para os dados, entre 4 e 12
	timeout1=Math.ceil(Math.random()*8)+4;
	timeout2=Math.ceil(Math.random()*8)+4;
	
	// Baseado nos valores de timeout, chama as funções que irão mostrar o valor dos dados. 
	// Cria uma chamada com o valor maximo desses timeout para finalizar a jogada e mostrar o vencedor ao jogador.
	setTimeout('showDado("dado1",0)',timeout1*150);
	setTimeout('showDado("dado2",1)',timeout2*150);
	setTimeout('fimJogadaTabela()',Math.max(timeout1,timeout2)*150);
}

// Funcao chamada ao terminar a jogada chamada na página de Introdução
function fimJogadaTabela(){
	// Habilita o botão de jogar
	$( "botaoJogar" ).destrava();
	$( "botaoApagarSelecao" ).destrava();
	$( "botaoZerarTabela" ).destrava();
	
	selecionaLinhaColTabela(valoresDados[0],valoresDados[1]);
}

// Atualiza a imagem com id 'idImg' com o valor do dado numDado (pego na array valroesDados
function showDado(idImg,numDado) {
	$(idImg).setAttribute( 'src', 'imgs/dice'+valoresDados[numDado]+'.gif');
}


function selecionaLinhaColTabela (linha, coluna) {
		$('seta_linha').setStyle({top: offsetLinha+28*(linha-1)+'px', display: 'block' });
		
		var deltasColunas = [35,34,35,34,34]; // colocado dessa forma até estabilizar o layout
		var deltaColuna = 0;
		for (var i=0;i<coluna-1;i++) {
			deltaColuna += deltasColunas[i];
		}
		
		$('seta_coluna').setStyle({left: offsetColuna+deltaColuna+'px', display: 'block' });
}

function apagaSelecaoTabela () {
		$('seta_linha').setStyle({top: offsetLinha, display: 'none' });
		$('seta_coluna').setStyle({left: offsetColuna, display: 'none' });
}

function zeraTabela() {
	apagaSelecaoTabela();
		for (var i=1;i<=6;i++) {
			for (var k=1;k<=6;k++) {
				$('input'+i+k).value='';
				$('input'+i+k).removeClassName('correto');
				$('input'+i+k).removeClassName('incorreto');				
				$('tab'+i+k).removeClassName('jogador1');			
				$('tab'+i+k).removeClassName('jogador2');			

			}
		}
	

}


function processaNumero(respStr) 
{	
	var respStrSplited = respStr.split('/');
	
	var respostaValida = true;
	if (respStrSplited.length>1) 
	{
		
		for (var i=0;i<respStrSplited.length;i++)
		{	
			respStrSplited[i]=processaNumero(respStrSplited[i]);
			if (respStrSplited[i]==null) respostaValida=false;
			if (respostaValida) 
			{
				if (i==0) 
				{
					var resp=respStrSplited[i];
				} 
				else 
				{
					resp=resp/respStrSplited[i];
				}
				
			}
		}
		if (respostaValida) return resp;
		else return null;
	} 
	else
	{
		if (respStr.indexOf('%')>-1) 
		{
			respStr=respStr.replace(/%/,'');
			var porcento=true;
		} else var procento=false;
		
		respStr=respStr.replace(/,/g,'.');
		if ( !isNaN(respStr) && (respStr.length>0) ) 
		{
			if (porcento) respStr=respStr/100;
		} else respStr=null;
		return respStr;
	}

}

function setAtividade(nome,estado,forcar)
{
	if (forcar==undefined) forcar=false;
	
	if (!forcar) 
	{
		if ((getResp(nome)<estado) || getResp(nome)=='') setResp(nome,estado);
	} 
	else setResp(nome,estado);


}

