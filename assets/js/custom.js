
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

    })

})(jQuery)