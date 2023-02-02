function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12 ){
        //Bom dia
        img.src = './img/manha-r.png';
        document.body.style.background = '#c9913a'
    }else if(hora >= 12 && hora < 18 ){
        //Boa tarde
        img.src = './img/tarde-r.png';
        document.body.style.background = '#dd8464'
    }else{
        //boa noite
        img.src = './img/noite-r.png';
        document.body.style.background = '#193038'
    }
}