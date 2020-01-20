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

var Questoes = 
[
	{//Parte 1
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Realize pelo menos dez jogadas. A seguir, observando os registros gerados, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_1_a,
					enunciado: 'Qual foi o máximo que mais vezes apareceu?',
					msgErro: 'Você pode obter essa informação a gráfico de cima. Caso haja haja mais de uma face aparecendo com a maior frequência, escolha apenas uma delas. <br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				}
			]
		},
		parte1_q2: //Questão 2
		{
			enunciadoGeral: 'Com base nas mesmas jogadas, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					enunciado: 'Quantas vezes o número 1 foi o maior valor gerado pelo lançamento dos dados?',
					msgErro: 'Você pode obter essa informação no gráfico de cima.<br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_2_b,
					enunciado: 'Em que proporção a face de número 1 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas.<br /><br/>Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%.<br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_2_c,
					enunciado: 'Quantas vezes o número 6 foi o maior valor gerado pelo lançamento dos dados?',
					msgErro: 'Você pode obter essa informação no gráfico de cima.<br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				},
				{//D
					tipo: 'input',
					corrigir: corrige_q_2_d,
					enunciado: 'Em que proporção a face de número 6 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas.<br /><br/>Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%.<br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				},
				{//C
					tipo: 'multipla_escolha',
					corrigir: corrige_q_2_e,
					enunciado: 'Qual jogador venceu mais vezes?' ,
					dados:	[
						{value: 'primeiro_jogador', label: 'Primeiro Jogador'},
						{value: 'segundo_jogador', label: 'Segundo Jogador'},
						{value: 'empate', label: 'Empate'}
					],
					msgErro: 'Você pode obter essa informação no gráfico de baixo. <br /> <br />Lembre-se de que é necessário realizar pelo menos 10 jogadas para responder a essa pergunta.'
				}
			]
		}
	},
	{ //Parte 2
		parte2_q3: 
		{
		enunciadoGeral: 'Com base nos resultados registrados na tabela e nos gráficos, responda:',
			itens: 
			[
				{//A	
					tipo: 'input',
					corrigir: corrige_q_3_a,
					enunciado: 'Em que proporção a face de número 1 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas.<br /> </br /> Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%. <br /> </br /> Lembre-se de que é necessário realizar pelo menos 30 jogadas para responder a essa pergunta.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_3_b,
					enunciado: 'Em que proporção a face de número 6 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas.<br /> </br /> Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%. <br /> </br /> Lembre-se de que é necessário realizar pelo menos 30 jogadas para responder a essa pergunta.'
				},
				{//C
					tipo: 'multipla_escolha',
					corrigir: corrige_q_3_c,
					enunciado: 'Qual jogador venceu mais vezes?',
					dados:	[
						{value: 'primeiro_jogador', label: 'Primeiro Jogador'},
						{value: 'segundo_jogador', label: 'Segundo Jogador'},
						{value: 'empate', label: 'Empate'}
					],
					msgErro: 'Você pode obter essa informação no gráfico de baixo.<br /> <br />Lembre-se que você precisar ter no mínimo 30 jogadas na tabela para responder essa pergunta.'
				}
			]
		}
	},
	{ //Parte 3
		parte3_q4: 
		{
			enunciadoGeral: 'Com base nos resultados registrados na tabela e nos gráficos, responda:',
			itens: 
			[
				{//A	
					tipo: 'input',
					corrigir: corrige_q_4_a,
					enunciado: 'Em que proporção a face de número 1 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas. <br /> <br />Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%.<br /> <br /> Lembre-se de que é necessário realizar pelo menos 100 jogadas para responder a essa pergunta.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_4_b,
					enunciado: 'Em que proporção a face de número 6 foi o máximo?',
					msgErro: 'Proporção é o número de vezes que certo resultado acontece em relação ao total de simulações realizadas. <br /> <br />Por exemplo, se, tendo sido realizadas 12 simulações, a face de número 4 tiver aparecido três vezes, então a proporção será 3 em 12, ou seja, 3/12 = ¼ = 0,25 ou 25%.<br /> <br /> Lembre-se de que é necessário realizar pelo menos 100 jogadas para responder a essa pergunta.'
				},
				{//C
					tipo: 'multipla_escolha',
					corrigir: corrige_q_4_c,
					enunciado: 'Qual jogador venceu mais vezes?',
					dados:	[
						{value: 'primeiro_jogador', label: 'Primeiro Jogador'},
						{value: 'segundo_jogador', label: 'Segundo Jogador'},
						{value: 'empate', label: 'Empate'}
					],
					msgErro: 'Você pode obter essa informação no gráfico de baixo. <br /> <br /> Lembre-se de que é necessário realizar pelo menos 100 jogadas para responder a essa pergunta.'
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
);

