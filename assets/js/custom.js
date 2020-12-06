
(function($){
    $(function(){
        
        //--- Menu Button
        var isOpen = false

        $('.menu-btn').on('click',function(){

            if(isOpen == false){
                $(this).addClass('open')
                $('.wrap').addClass('open')
                $('body').addClass('hidden')
            
                isOpen = true
    
            }else {
                $('.menu-btn').removeClass('open')
                $('.wrap').removeClass('open')
                $('body').removeClass('hidden')
                
                isOpen = false
            }
        })

        //--- Menu Responsive Check
        function showWidth(display) {
            if(display) {
                $(window).resize(function(){
                    var width = $(window).innerWidth()
                    
                    if(width > 1041 && isOpen === true ){
                        $('.menu-btn').removeClass('open')
                        $('.wrap').removeClass('open')
                        $('body').removeClass('hidden')  
        
                        isOpen = false
                    }
                }) 
            }
        }

        $(document).ready(function(){
            showWidth(true)
        })

        gsap.registerPlugin(ScrollTrigger);

        //--- Sticky header
        ScrollTrigger.create({
            start: 'top -130',
            end: 99999,
            toggleClass: {
                className: 'main-header--scrolled',
                targets: '.main-header'
            },
        });

        //--- Swiper
        import Swiper from 'swiper/bundle';
        import 'swiper/swiper-bundle.css';

        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
              },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            
        });


    })

})(jQuery)