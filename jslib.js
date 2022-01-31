// slider project
$(document).ready(function(){
    
    // define flag and check variable
    let slideMeghdar =0;
    let countClick = 0 ;
    let slideMeghdarpx = 0 ;
    // end define flag and check variable



    //this code must be in windows resize event and must be excecute once
            let widthSlider = $('.fatherSlider').width();
            let widthSliderpx = widthSlider + 'px';
            $('.slider').css({'width': widthSliderpx});
            

            //slider parent how many child for get width of father height
            let SliderParent = $('.SliderParent').children().length ; //ok
            let SliderParentWidth = widthSlider * SliderParent ;
            SliderParentWidth = SliderParentWidth + 'px';
            $('.SliderParent').css({
                'width':SliderParentWidth
            });

            //end slider parent how many child for get width of father height
    // end this code must be in windows resize event




    // make infinity loop for slider spine
        setInterval(function(){
            console.log('set interval');

            //     slide slider in 5s
                slideMeghdar = slideMeghdar - widthSlider ;
                countClick = countClick + 1; 

                
                
                if(countClick == SliderParent ){
                    countClick = 0 ;
                    slideMeghdar = 0 ;   
                }
                slideMeghdarpx = slideMeghdar + 'px';    
                $('.SliderParent').css({
                    'left':slideMeghdarpx
                });
            // end slide slider in 5s


        }, 5000);
    // end make infinity loop for slider spine

    
    // windows resize event for responsive slider 
            $(window).resize(function(){
                
                


                //this code must be in windows resize event
                    widthSlider = $('.fatherSlider').width();
                    widthSliderpx = widthSlider + 'px';
                    $('.slider').css({'width': widthSliderpx});
                // end this code must be in windows resize event

                //slider parent how many child for get width of father height
                    SliderParent = $('.SliderParent').children().length ; //ok
                    SliderParentWidth = widthSlider * SliderParent ;
                    SliderParentWidth = SliderParentWidth + 'px';
                    $('.SliderParent').css({
                        'width':SliderParentWidth
                    }); 
                //end slider parent how many child for get width of father height
                
                //  do responsive image in slider when window resize
                    if(countClick == 0){
                        console.log('countClick equal zero!');
                    }else{
                        slideMeghdar = widthSlider * countClick ;
                    }
                    slideMeghdarpx =  slideMeghdar + 'px';
                    slideMeghdarpx = '-' + slideMeghdarpx ;
                    $('.SliderParent').css({
                        'left':slideMeghdarpx
                    });
                //  end do responsive image in slider when window resize
            
            });
    // end windows resize event for responsive slider
    
    //  left slide click and right slide click for slider
    $('.leftSlideClick').click(function(){
          
        slideMeghdar = slideMeghdar - widthSlider ;
        countClick = countClick + 1; 

        
        
        if(countClick == SliderParent ){
            countClick = 0 ;
            slideMeghdar = 0 ;   
        }
         slideMeghdarpx = slideMeghdar + 'px';    
        $('.SliderParent').css({
            'left':slideMeghdarpx
        });
   
        
    });

    $('.rightSlideClick').click(function(){

        countClick = countClick - 1 ; 
        if(countClick < 0){
            countClick = SliderParent -1 ;
            console.log('you must reverse : ',countClick);
            slideMeghdar = widthSlider * ( SliderParent - 1) ; 
            slideMeghdarpx = slideMeghdar + 'px';
            slideMeghdarpx = '-' + slideMeghdarpx ;
            $('.SliderParent').css({
                'left':slideMeghdarpx
            });
            slideMeghdar = slideMeghdar - (slideMeghdar * 2);
           
        }else{
            slideMeghdar = slideMeghdar + widthSlider ;
            slideMeghdarpx = slideMeghdar + 'px';
            slideMeghdarpx =  slideMeghdarpx ;
            $('.SliderParent').css({
                'left':slideMeghdarpx
            });
            
            
        }
        



    });
    // end left slide click and right slide click for slider
    

    //end document
})
// end slider project