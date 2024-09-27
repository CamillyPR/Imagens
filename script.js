function mudarImagem(img){
    let body = document.body;

    switch(img){
        case 'montanha':body.style.backgroundImage = "url('montanha.jpg')";break;
        case 'buraco':body.style.backgroundImage = "url('buraco.jpg')";break;
        case 'ceu':body.style.backgroundImage = "url('ceu.jpg')";break;
        case 'bonito':body.style.backgroundImage = "url('bonito.jpg')";break;
        case 'simples':body.style.backgroundImage = "url('simples.jpg')";break;
        default: body.style.backgroundColor = 'black';
    }
}

//case 'id imagem':body.style.backgroundImagem = "url('xxx.jpg')"