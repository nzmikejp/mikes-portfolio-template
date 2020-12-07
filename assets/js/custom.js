
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

        $('.mobile-menu a').on('click', function(){
            $('.menu-btn').removeClass('open')
            $('.wrap').removeClass('open')
            $('body').removeClass('hidden')
            
            isOpen = false
        })

        $('.nav-menu .menu a').on('click', function(){
            $('.nav-menu .menu a').removeClass('active')
            $(this).addClass('active')
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
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            autoHeight: true,
            slidesPerView: 1,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
             
        });


    })

})(jQuery)