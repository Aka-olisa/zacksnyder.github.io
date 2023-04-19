window.addEventListener('click',(e)=>{
      console.log(e.path[0].className)
})

// Nav Display
{

    let nav = document.getElementsByClassName('fa-bars')[0]
    let body = document.getElementsByClassName('container')[0]
    let cancel = document.getElementsByClassName('fa-times')[0]
    let nav_display = document.querySelector('.med-view')
    // console.log(body.clientWidth);
    cancel.style.display = 'none'
    setInterval(() => {
        if (body.clientWidth > 840) {
            nav_display.style.display = 'none'
            cancel.style.display = 'none'
        }

    }, 0.1);
    nav.addEventListener('click',()=>{
        nav.style.display = 'none'
        cancel.style.display = 'block'
        nav_display.style.display = 'block'
        nav_display.style.display = 'flex'
        cancel.style.display = 'flex'


        setTimeout(
            display
            ,100)
            function display() {
                nav_display.style.transition = '0.5s'
                nav_display.style.opacity = '100%'
                nav_display.style.left = '0%'
            

            }
    })
    cancel.addEventListener('click',()=>{
    console.log('in')
        nav.style.display = 'block'
        cancel.style.display = 'none'
        nav.style.display = 'flex'
        nav_display.style.transition = '0.5s'
        nav_display.style.opacity = '0%'
        nav_display.style.left = '100%'

        setTimeout(
            remove
            ,200)
            function remove() {
                nav_display.style.display = 'none'
            

            }
})

}
// End of nav display


// Carousel Display
{
    let slide = document.querySelector('.slideCon')
    let img = document.querySelectorAll('.box')

    // buttons
    const next = document.querySelector('.next')
    const prev = document.querySelector('.back')

    // Counter
    let counter = 1
    let size = img[0].clientWidth
    slide.style.transform = 'translateX(' + (-size *counter)+'px)'
    next.addEventListener('click',()=>{
        if (counter >= img.length - 1)return;
        slide.style.transition = 'transform 0.5s ease-in-out'
        counter++
        slide.style.transform = 'translateX(' + (-size *counter)+'px)'

    })

    prev.addEventListener('click',()=>{
        if (counter <= 0)return;
        slide.style.transition = 'transform 0.5s ease-in-out'
        counter--
        slide.style.transform = 'translateX(' + (-size *counter)+'px)'


        
    })
    
    slide.addEventListener('transitionend',()=>{
        if (img[counter].id ==='first') {
            slide.style.transition = 'none'
            console.log(img.length)
           counter = img.length - 2 ;
        //    console.log(counter)
        //    console.log(size)

           slide.style.transform = 'translateX(' + (-size *counter)+'px)'
     
        }
        if (img[counter].id ==='last') {
            slide.style.transition = 'none'
           counter = img.length - counter;
           slide.style.transform = 'translateX(' + (-size *counter)+'px)'          
        }
   

    })



}
// End of Carousel Display






