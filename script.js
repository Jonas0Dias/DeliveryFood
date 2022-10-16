const a = window.document.querySelectorAll('.prato')
a.addEventListener("click",clicar())
function clicar(){
    if (a[0].classList.contains("pratoclicado")){
        a.classList.remove("pratoclicado")
    }
    else{
        a[0].classList.add('pratoclicado')
    }
    
}
    

    