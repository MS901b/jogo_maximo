var flag_flash = true;
var flag_doc = false;

Event.observe(document, 'flash:SalvaLocal', function(ev) {
    flag_flash = true;
    init_load();
});


Event.observe(window, 'load', function() {
    flag_doc = true;
    init_load();
});


function init_load() {
    if ((flag_flash) && (flag_doc)) {
        console.log("seta hex desafio");
        //if (getResp('desafio_1')<2) setResp('desafio_1',2);
        $('SalvaLocal').Salva(nomeSoft, 'desafio_1', '2');
        console.log("setadp hex deafio ok =]");

        switch (PosicaoAtual.Parte) {
            case 0:


                Event.observe('jogadaIndividutalButton', 'click', function(evento) {
                    pausaFazJogadas(1, 0.1, true);
                });

                Event.observe('10JogadasButton', 'click', function(evento) {
                    pausaFazJogadas(10, 0.1, true);
                });

                Event.observe('25JogadasButton', 'click', function(evento) {
                    pausaFazJogadas(25, 0.1, true);
                });

                Event.observe('zerarJogadasButton', 'click', function(evento) {
                    ApagarJogadas();
                });


                break;

        }
    }

    /*
    Veja que está sendo criada logo abaixo uma instância de "Blocao", uma classe de
    bloco de notas que permite tabelas no conteúdo. Se não for usar tabelas no Software,
    altere para "Bloco" (mesmo efeito, porém menor e não aceita tabelas).
    */
    BlocoNotas = new Bloco();
    //qq outra coisa que deva ser chamada após o load
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
function questoesCertas(parte) {

}