addEventListener('DOMContentLoaded',() => {
    document.getElementById('carouselExampleIndicators').classList.toggle('show')
    const btn_menu = document.querySelector(".btn-menu")
    if(btn_menu){
        
        btn_menu.addEventListener('click',() => {
            const menu_items = document.querySelector('.menu_items')
            if(menu_items.classList.toggle('show')){
                document.getElementById('carouselExampleIndicators').style.display='none'
            }else{
                document.getElementById('carouselExampleIndicators').style.display='block'
            }
        })
    }
    
})