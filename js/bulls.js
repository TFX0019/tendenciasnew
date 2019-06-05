$(document).ready(function() {
	//Resize 
	 var resize = {
        video: function(){
            if ($(document).height() >= 768) {
             $(".full-video-screen").height($(window).height());
         	}
         	else{
         		$(".full-video-screen").height($(window).height()-100);
         	}
        },
        imageHeight: function(){
        	
	    		$(".full-image-height").height($(window).innerHeight());
	    		
             
        },
       	imageHeightSlider: function(){
        //It is not relevant in the code	
	    		$(".full-image-height-slider").height($(window).innerHeight()-80);
	    		
             
        },
        divBackground: function(){
             $(".full-div-background").height($(window).innerHeight());
            
        },
        collajeHeight: function(){
        //It is not relevant in the code	
	    		$(".full-collaje-height").height($(window).innerHeight()-240);
	    		if ($(window).height() >= 600) {
	    			
	    			$(".full-collaje-height").css("height", "").removeClass("full-collaje-height");
	    			
	    		}
	    		if ($(window).height() <= 600) {
	    			
	    			$(".element-center").addClass("full-collaje-height").height($(window).innerHeight()-240);

	    		}
             
        },
    }
    //Position
    var position = {
    	center: function(){
    		$(".element-center").addClass("element-center");
    	}
    }
    //Size
    var size = {
    	autoWidth: function(){
    		if ($(window).height() <= 600) {
    			$(".auto-width").addClass("auto-w");
    		}
    		if ($(window).height() > 600) {
    			$(".auto-width").removeClass("auto-w");
    		}
    	}
    }
    resize.video();
    resize.imageHeight();
    resize.divBackground();
    resize.collajeHeight();
    resize.imageHeightSlider();
    position.center();
   	size.autoWidth();
    $(window).resize(function(){
	    resize.video();
	    resize.imageHeight();
	    resize.divBackground();
	    resize.collajeHeight();
	    resize.imageHeightSlider();
	    size.autoWidth();
    });

   



});