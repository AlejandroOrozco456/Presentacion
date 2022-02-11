 function calculadora(){

    var n1  = document.getElementById('n1').value;
    var n2  = document.getElementById('n2').value;


    var divi = parseInt(n1) / parseInt(n2);
    document.getElementById('divi').value = divi;

    var res = parseInt(n1) + parseInt(n2);
    document.getElementById('suma').value = res;

    var multi = parseInt(n1) * parseInt(n2);
    document.getElementById('multiplica').value = multi;
}
