function inclui_nome() {/* */

    var nome_variavel= prompt("coloque seu nome:");/* */
    
    if(nome_variavel){/* */
        document.getElementById("marcação_nome").innerHTML = nome_variavel;
    }

    else{/* */
        alert ("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }

}

function funcao_resposta(){/* */

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    var contador = 0;

    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10){

        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!";
            contador = +1;
        }

        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada, porque não segue a fórmula padrão para encontrar as raízes de uma equação quadrática.";
        }

        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTMl = "Correta!";
            contador = +1;
        }

        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, ela não está relacionada ao discriminante e não é usada para determinar as raízes.";
        }

        if(resp3.value == "Correta!"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!";
            contador = +1;
        }
    
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, pois não refletem as possibilidades reais de soluções para equações do segundo grau. ";
        }

        if(resp4.value == "Correta!"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!";
            contador = +1;
        }

        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, ";
        }

        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!";
            contador = contador + 1;
        }

        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, ";
        }

        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!";
            contador = contador + 1;

        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada,a equação tem 2 soluções reais que podem ser representadas como 2 valores diferentes de x, essa alternativa não apresenta isso "; 
        }

        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!";
            contador = contador + 1;
        }

        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, a equação tem uma única solução real, essa alternativa não apresenta isso";
        }

        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada,a equação não possui soluções reais, mas sim raízes complexas, essa alternativa não apresenta isso ";
        }

        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!";
            contador = contador + 1;
        }

        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada,porque não reflete a relação correta entre as raízes e os coeficientes na fórmula geral de uma equa=ção="; 
        }

        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!";
            contador = contador + 1;
        }

        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada, ";
        }

        document.getElementById("quantos_acertos").innerHTML = " Você acertou " + contador + " questões! ";
    }

    else{/* */
        alert("não deixe questões em branco!");
    }

}

function verificarRespostas() {
    /*Equação 1*/
    var coefA1 = document.getElementById('coefA1').value;
    var coefB1 = document.getElementById('coefB1').value;
    var coefC1 = document.getElementById('coefC1').value;
    
    /*Equação 2*/
    var coefA2 = document.getElementById('coefA2').value;
    var coefB2 = document.getElementById('coefB2').value;
    var coefC2 = document.getElementById('coefC2').value;

    /*Verifique se todos os campos estão preenchidos*/
    if (coefA1 && coefB1 && coefC1 && coefA2 && coefB2 && coefC2) {
        /*Resolve as equações*/
        var discriminant1 = coefB1 * coefB1 - 4 * coefA1 * coefC1;
        var discriminant2 = coefB2 * coefB2 - 4 * coefA2 * coefC2;

        var result1 = document.getElementById('result1');
        var result2 = document.getElementById('result2');

        if (discriminant1 > 0) {
            result1.innerHTML = 'Equação 1: Duas raízes reais distintas.';
        } else if (discriminant1 == 0) {
            result1.innerHTML = 'Equação 1: Uma raiz real.';
        } else {
            result1.innerHTML = 'Equação 1: Nenhuma raiz real.';
        }

        if (discriminant2 > 0) {
            result2.innerHTML = 'Equação 2: Duas raízes reais distintas.';
        } else if (discriminant2 == 0) {
            result2.innerHTML = 'Equação 2: Uma raiz real.';
        } else {
            result2.innerHTML = 'Equação 2: Nenhuma raiz real.';
        }
    } else {
        alert('Não deixe campos em branco!');
    }
}

/*código da imagem dinamica*/
    function mudar(objeto , imagem){
        equacao.scr = imagem
    }