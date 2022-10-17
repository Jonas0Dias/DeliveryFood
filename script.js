




const a = window.document.querySelectorAll('.principal')
const b = window.document.querySelectorAll('.bebida')
const c = window.document.querySelectorAll('.sobremesa')
//a.addEventListener("click",clicar())
function clicarp(t){
    if (t.classList.contains('pratoclicado')){
        t.classList.remove('pratoclicado')
    }
    else{
        t.classList.add('pratoclicado')
    }
    for (let i=0; i < a.length; i=i+1){
        var selecionado = a[i].classList.contains('pratoclicado') 
        if ( selecionado !== null && a[i]!==t){
            a[i].classList.remove('pratoclicado')

        }
    }
}
function clicarb(y){
    if (y.classList.contains('pratoclicado')){
            y.classList.remove('pratoclicado')
        }
    else{
            y.classList.add('pratoclicado')
        }
    for (let i=0; i < b.length; i=i+1){
        var selecionado = b[i].classList.contains('pratoclicado') 
        if ( selecionado !== null && b[i]!==y){
            b[i].classList.remove('pratoclicado')

        }
    }
}
function clicars(u){
    if (u.classList.contains('pratoclicado')){
        u.classList.remove('pratoclicado')
    }
    else{
        u.classList.add('pratoclicado')
    }
    for (let i=0; i < c.length; i=i+1){
        var selecionado = c[i].classList.contains('pratoclicado') 
        if ( selecionado !== null && c[i]!==u){
            c[i].classList.remove('pratoclicado')

        }
    }
    
}

for (let i=0; i<a.length; i++){
    if( a[i].classList.contains('pratoclicado')!== null){
        const qq=1
    }
}

for (let i=0; i<b,length; i++){
    if( b[i].classList.contains('pratoclicado')){
        var bebida=1
    }
    else{
        
    }
}

for (let i=0; i<c.length; i++){
    if( c[i].classList.contains('pratoclicado')){
        var sobremesa=1
    }
    else{
        
    }
}



    