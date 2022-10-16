const a = window.document.querySelectorAll('.principal')
//a.addEventListener("click",clicar())
function clicar(t){
    if (t.classList.contains('pratoclicado')){
        t.classList.remove('pratoclicado')
    }
    else{
        t.classList.add('pratoclicado')
    }
    for (const i=0; i < 3; i=i+1){
        var selecionado = a[i].classList.contains('pratoclicado') 
        if ( selecionado !== null && a[i]!==t){
            a[i].classList.remove('pratoclicado')

        }

        

    }
    
}



    