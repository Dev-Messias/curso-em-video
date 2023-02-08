function verificar(){
    var data = new Date();
    var ano = data.getFullYear();//pegando o ano com 4 digitos
    //pegando dados do input
    var fano = document.getElementById('textano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano ) {
        alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/img/bebe-homem.png');

            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', './assets/img/homem-joven.png');
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', './assets/img/homem-adulto.png');
            } else {
                //idoso
                img.setAttribute('src', './assets/img/homem-idoso.png');
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './assets/img/mulher-bebe.png');
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', './assets/img/mulher-jovem.png');
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', './assets/img/mulher-adulta.png');
            } else {
                //idoso
                img.setAttribute('src', './assets/img/mulher-idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}