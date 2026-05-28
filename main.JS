const botoes= document.querySelector.All(".botão");
for(let i=0;i <botoes.lenght;i++){
    botoes[j].onclick=function(){
        for(let j=0;j<botoes.length;j++){
            botoes[j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
    }
}
