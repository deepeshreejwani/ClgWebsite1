$(document).ready(function(){

    /* Quick Links Tab */

        flag=0;

        $(".qlTab").click(function(){
            if(flag==0){
                $(".qlMenu").css("animation","slideIn2 1s forwards");
                $(".qlTab").css("animation","slideIn1 1s forwards");
                $(".qlTabImg").css("animation","rotateCC 1s forwards");
                $(".div2-1").css("animation","fadeOut 1s forwards");
                $(".div2-2").css("animation","fadeOut 1s forwards");
                $(".div2-3").css("animation","fadeOut 1s forwards");
                flag=1;
            }
            else if(flag==1){
                $(".qlMenu").css("animation","slideOut2 1s forwards");
                $(".qlTab").css("animation","slideOut1 1s forwards");
                $(".qlTabImg").css("animation","rotateC 1s forwards");
                $(".div2-1").css("animation","fadeIn 1s forwards");
                $(".div2-2").css("animation","fadeIn 1s forwards");
                $(".div2-3").css("animation","fadeIn 1s forwards");
                flag=0;
            }
        })

        $(document).mouseup(function(e){
            var container = $(".qlDiv");
        
            // If the target of the click isn't the container
            if(!container.is(e.target) && container.has(e.target).length === 0){
            $(".qlMenu").css("animation","slideOut2 1s forwards");
            $(".qlTab").css("animation","slideOut1 1s forwards");
            $(".qlTabImg").css("animation","rotateC 1s forwards");
            $(".div2-1").css("animation","fadeIn 1s forwards");
            $(".div2-2").css("animation","fadeIn 1s forwards");
            $(".div2-3").css("animation","fadeIn 1s forwards");
            }
        })

    /* Quick Links Tab ends*/

    /* Black Film Main */

        $(".black").mouseover(function(){
            $(".black").css("animation","blackFilm1 1s forwards");
        })

        $(".black").mouseout(function(){
            $(".black").css("animation","blackFilm2 1s forwards");
        })

    /* Black Film Main ends*/

    /* Facebook Twitter Film */

        $(".black1-1").mouseover(function(){
            $(".black1-1").slideUp();
        })

        $(".black1-2").mouseover(function(){
            $(".black1-2").slideUp();
        })

        $(".fbContent").mouseout(function(){
            $(".black1-1").slideDown();
        })

        $(".twitterContent").mouseout(function(){
            $(".black1-2").slideDown();
        })
    /* Facebook Twitter Film ends*/

    /* Media Coverage */
        $(".black2").mouseover(function(){
            $(".black2").css("animation","opacityIn 1s forwards");
            $(".mediaImg").css("animation","blurOut 1s forwards");
        })
        $(".black2").mouseout(function(){
            $(".black2").css("animation","opacityOut 1s forwards");
            $(".mediaImg").css("animation","blurIn 1s forwards");
        })
    /* Media Coverage ends*/

    /* Photo blur */
        $(".div1-1-1").mouseover(function(){
            $(".imgDiv1-1").css("animation","onlyBlurOut 1s forwards");
        })
        $(".div1-1-1").mouseout(function(){
            $(".imgDiv1-1").css("animation","onlyBlurIn 1s forwards");
        })
    /* Photo blur ends*/

    /* aboutBtn Pop Up */


        flag1=0;
        flag2=0;

        $(".aboutBtn").click(function(){
            if((flag1==0)&&(flag2==0)){
                $(".popUpAbout").css("animation","comeIn 1s forwards");
                flag1=1;
            }
            else if((flag1==1)&&(flag2==0)){
                $(".popUpAbout").css("animation","goOut 1s forwards");
                flag1=0;
            }
            else if((flag1==0)&&(flag2==1)){
                $(".popUpAbout").css("animation","comeIn 0.5s forwards");
                $(".popUpAcademics").css("animation","goOut 0.5s forwards");
                flag1=1;
                flag2=0;
            }
        })

        $(".academicsBtn").click(function(){
            if((flag2==0)&&(flag1==0)){
                $(".popUpAcademics").css("animation","comeIn 1s forwards");
                flag2=1;
            }
            else if((flag2==1)&&(flag1==0)){
                $(".popUpAcademics").css("animation","goOut 1s forwards");
                flag2=0;
            }
            else if((flag2==0)&&(flag1==1)){
                $(".popUpAcademics").css("animation","comeIn 0.5s forwards");
                $(".popUpAbout").css("animation","goOut 0.5s forwards");
                flag2=1;
                flag1=0;
            }
        })

    /* aboutBtn Pop Up ends*/

    /* Video Slider */
        var Page = (function() {
          
          var $navArrows = $( '#nav-arrows' ).hide(),
              $shadow = $( '#shadow' ).hide(),
              slicebox = $( '#sb-slider' ).slicebox( {
                onReady : function() {
                  
                  $navArrows.show();
                  $shadow.show();
                  
                },
                orientation : 'r',
                cuboidsRandom : true,
                disperseFactor : 30
              } ),
              
              init = function() {
                
                initEvents();
                
              },
              initEvents = function() {
                
                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {
                  
                  slicebox.next();
                  return false;
                  
                } );
                
                $navArrows.children( ':last' ).on( 'click', function() {
                  
                  slicebox.previous();
                  return false;
                  
                } );
                
              };
          
          return { init : init };
          
        })();
        
        Page.init();
    /* Video Slider ends*/

})