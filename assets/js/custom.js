
(function($){
    $(function(){
        
        //--- Menu Button
        var bIsOpen = false

        $('.menu-btn').on('click',function(){

            if(bIsOpen == false){
                $(this).addClass('open')
            
                bIsOpen = true
    
            }else {
                $('.menu-btn').removeClass('open')
                            
                bIsOpen = false
            }
        })


        //--- Sticky header
        ScrollTrigger.create({
            start: 'top -130',
            end: 99999,
            toggleClass: {className: 'main-header--scrolled', targets: '.main-header'}
        });

    })

})(jQuery)