/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/
var Partes = ['1', '2', '3', '4'];
var nomeSoft = 'maximo';

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'instrucao',
					corrigir: corrige_q_1_a,
					enunciado: 'Com base nas instruções dadas acima, preencha toda a tabela. Se você quiser, pode preencher as células diretamente, sem realizar as jogadas.',
					msgErro: 'As células devem ser preenchidas com o maior número que aparecer nos dados lançados.<br /> Não se esqueça de que é preciso preencher a tabela inteira.'	
				}
			]
		}
	},
	{//Parte 2
		parte2_q2: //Questão 2
		{
			enunciadoGeral: 'Com base na tabela que você preencheu anteriormente, responda as próximas questões:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 1?',
					msgErro: 'Basta contar as células preenchidas com o número 1.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_2_b,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 2?',
					msgErro: 'Basta contar as células preenchidas com o número 2.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_2_c,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 3?',
					msgErro: 'Basta contar as células preenchidas com o número 3.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_2_d,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 4?',
					msgErro: 'Basta contar as células preenchidas com o número 4.'
				},
				{//E
					tipo: 'input',
					corrigir: corrige_q_2_e,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 5?',
					msgErro: 'Basta contar as células preenchidas com o número 5.'
				},
				{//F
					tipo: 'input',
					corrigir: corrige_q_2_f,
					enunciado: 'Quantas vezes o maior valor obtido nos dados foi o número 6?',
					msgErro: 'Basta contar as células preenchidas com o número 6.'
				}
			]
		}
	},
	{ //Parte 3
		parte3_q3: 
		{
			enunciadoGeral: 'Com base nas regras do jogo, analise a tabela ao lado e responda:',
			itens: 
			[
				{//A	
					tipo: 'input',
					corrigir: corrige_q_3_a,
					enunciado: 'Quantas jogadas foram vencidas pelo primeiro jogador?',
					msgErro: 'Basta contar as células de cor azul claro, pois essa cor indica que um valor menor ou igual a 4 foi inserido na célula.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_3_b,
					enunciado: 'Quantas jogadas foram vencidas pelo segundo jogador?',
					msgErro: 'Basta contar as células de cor azul escuro, pois essa cor indica que a célula foi preenchida com 5 ou 6.'
				}
			]
		}
	}	

]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array(
	'Jogo do Máximo'
);

