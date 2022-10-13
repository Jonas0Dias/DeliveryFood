var a = window.document.querySelector('div.prato')
    a.addEventListener('touchstart', clicar)


function clicar(){
    a.classList.replace('prato' , 'pratoclicado');
}
    