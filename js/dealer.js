// Map Display
{
    var body = document.querySelector('body');
    var viewMap = document.querySelectorAll('.view_map');
    var map = document.querySelector('.map-img');
    var dealerInfo = document.querySelector('.dealer-name-info')
    var viewDealer = document.querySelector('.view-dealer');

    viewMap.forEach(function (e) {
        e.addEventListener('click',()=>{
            map.style.display = 'block';
            viewDealer.style.display = 'block'
            setInterval(() => {
                if(body.clientWidth > 860){
                    window.location.reload(true);
                    viewDealer.style.display = 'none'

                }
            }, 50);
            setTimeout(() => {
                dealerInfo.style.transition = '0.5s';
                dealerInfo.style.right = '100%';
                dealerInfo.style.display = 'none';
                
            }, 0.5);
            setTimeout(() => {
                map.style.transition = '0.5s';
                map.style.left = '0%';  
                map.style.opacity = '100%';
            }, 0.5);
            
        })
    })

    
    viewDealer.addEventListener('click',()=>{
        dealerInfo.style.display = 'block';
        setTimeout(() => {
            dealerInfo.style.transition = '0.5s';
            dealerInfo.style.right = '0%';

        }, 0.5);

            setTimeout(() => {
                map.style.transition = '0.5s';
                map.style.left = '100%';  
                map.style.opacity = '0%';
                map.style.display = 'none';
            }, 0.5);
        
     
    })



}
// End Of Map Display