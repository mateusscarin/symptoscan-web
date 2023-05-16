function fonte(e){
	var elemento = document.getElementsByClassName("mudarfonte");
	var atual = elemento[0].style.fontSize;
	
	if(e == 'a'){
		atual = parseInt(atual)+2+'px';
	}else if(e == 'b'){
		atual = parseInt(atual)-2+'px';
	}else if(e == 'c'){
		atual = 18+'px';
	}
	
		
	elemento[0].style.fontSize=atual;
	elemento[1].style.fontSize=atual;
	elemento[2].style.fontSize=atual;
}

function alto_contraste(){
	document.getElementById('conteudo').style.background = '#000';
	document.getElementById('conteudo').style.color = '#fff';
	document.getElementById('noticias').style.background = '#000';
	document.getElementById('noticias').style.color = '#fff';
	document.getElementById('rodape').style.background = '#000';
	document.getElementById('rodape').style.color = '#fff';
}

function cor_original(){
	document.getElementById('conteudo').style.background = '#fff';
	document.getElementById('conteudo').style.color = '#000';
	document.getElementById('noticias').style.background = '#fff';
	document.getElementById('noticias').style.color = '#000';
	document.getElementById('rodape').style.background = '#fff';
	document.getElementById('rodape').style.color = '#000';
}