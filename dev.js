
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var cor_verdadeira = '#f1abff'
var cor_falsa = '#98defb'
var true1 = false
var true2 = false
var true3 = false

/*se  true1 e true2 == true: true3 = false. significa que 1 e 2 vão ativar e o 3 vai ficar desativado;
se true1 e true3 == true: true2 = false
se true2 e true3 == true: true1 = false
se permanesse falso, fica com a cor padrão, se permanesse verdadeiro, fica rosa.
se um é ativado, o outro desativa. NÃO PODE SER TUDO
*/
