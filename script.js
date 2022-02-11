const bar =document.getElementById('bar')
const nav =document.getElementById('nav-bar')
const closeef =document.getElementById('closef')

if(bar) {

bar.addEventListener('click', () =>{
    nav.classList.add('active')
})

}



if(closef) {

    closef.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
    


}
    