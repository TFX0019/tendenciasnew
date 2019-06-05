$(document).ready(function() {
    // play video de index
   var btnVideo = $('#btn_play_i');
    var videoI = $('#videoI');
    
    btnVideo.click(function() {
        if(videoI.get(0).paused) {
            btnVideo.css('display', 'none');
            videoI.get(0).play();
        }
    })
    
    videoI.click(function() {
        if(!videoI.get(0).paused) {
            btnVideo.css('display', 'block');
            videoI.get(0).pause();
        }
    })
    
    // mision y vision 
    
    var no = {
        textMision: $('.text_mision'),
        textVision: $('.text_vision'),
        btnMision : $('#mision'),
        btnVision: $('#vision'),
        lineVision: $('#lineVision div'),
        lineMision: $('#lineMision div')
    }
    
    var nof = {
        nosotroStart: function() {
            nof.changeMision();
            nof.changeVision();
        },
        changeMision: function() {
            no.btnVision.click(function() {
                no.textMision.css('display', 'none');
                no.textVision.css('display', 'block');
                no.lineVision.css('display', 'block');
                no.lineMision.css('display', 'none');

            })
        },
         changeVision: function() {
            no.btnMision.click(function() {
                no.textMision.css('display', 'block');
                no.textVision.css('display', 'none');
                no.lineVision.css('display', 'none');
                no.lineMision.css('display', 'block');

            })
        }

       
    }
    
    nof.nosotroStart();
    
    // menu footer
    var fo = {
        btnCollapse: $('#bar_footer'),
        infoCollapse: $('.colapse_footer')
    }
    
    var fof = {
        footerStart: function() {
            fo.btnCollapse.click(function(e) {
                fo.infoCollapse.slideToggle('fast');
            })
        }
    }
    
    fof.footerStart();
    
    // mostar search
    $('#btn_search_main').click(function() {
        $('.bar_search').slideToggle('fast');
    })
    
    //menu mobil
    var mm = {
        menu: false,
        btnBar: $('#btn_main_p'),
        btnClose: $('#close_main_movil_list'),
        listMenu: $('div.menu_movil_list'),
        menuStart: function() {
            mm.openMain();
            mm.closeMain();
        },
        openMain: function() {
            mm.btnBar.click(function() {
                mm.listMenu.addClass('menu_movil_list_des')
            })
        },
        closeMain: function() {
            mm.btnClose.click(function() {
                mm.listMenu.removeClass('menu_movil_list_des');
            })
        }
    }
    
    mm.menuStart();



    //categorias
    var cate = {
        menu: false,
        btnCate: $('#open__categorias'),
        btnCloseCa: $('#close_categorias'),
        listCate: $('div.categorias__movil'),
        cateStart: function() {
            cate.cateMainOpen();
            cate.cateMainClose();
        },
        cateMainOpen: function() {
            cate.btnCate.click(function() {
                cate.listCate.addClass('cate__actv')
                cate.btnCate.hide();
            })
        },
        cateMainClose: function() {
            cate.btnCloseCa.click(function() {
                cate.listCate.removeClass('cate__actv');
                cate.btnCate.show();
            })
        }
    }
    
    cate.cateStart();
    
    // fixed
    $('.item_p').click(function(e) {
        e.preventDefault();
         tarjeta: $('div#visualizador__img div.tarjeta').removeClass('img__rotada');
        var srcI = $(this).children();
         $('.img_vista').css('transition', 'all ease .5s');
        $('.img_vista').attr('src', srcI.attr('src'));


    })

    // carousel 

    var rot = {
        btnRotateNext: $('#btnVisualNext'),
        btnRotateBack: $('#btnVisualBack'),
        tarjeta: $('div#visualizador__img div.tarjeta'),
        rotar: false,
        rotarStart: function() {
            rot.rotarNext();
            rot.rotarBack();
        },
        rotarNext: function() {
            rot.btnRotateNext.click(function(e) {
                e.preventDefault();
            if (rot.rotar === false) {
                rot.tarjeta.addClass('img__rotada');
                rot.rotar = true;
            } else {
                rot.tarjeta.removeClass('img__rotada');
                rot.rotar = false;
            }
            
            })
        }, // end totate next
        rotarBack: function() {
            rot.btnRotateBack.click(function(e) {
                e.preventDefault();
            if (rot.rotar === false) {
                rot.tarjeta.addClass('img__rotada');
                rot.rotar = true;
            } else {
                rot.tarjeta.removeClass('img__rotada');
                rot.rotar = false;
            }
            
            })
        } // end rotar back


    }

    rot.rotarStart();

    var mod = {
        item: $('.item_p'),
        visualizador: $('#visualizador__img'),
        contenedorV: $('div.mod__visual'),
        btncloseVisualizador: $('#close__visualizador'),
        modalStart: function() {
            mod.openVisualizador();
            mod.closeVisualizador();
        },
        openVisualizador: function() {
            if ($(document).innerWidth() <= 768) {
                mod.item.click(function() {
                    mod.visualizador.css('position', 'fixed');
                    mod.visualizador.addClass('openedVisual');
                    mod.contenedorV.addClass('visualEnd');
                    mod.btncloseVisualizador.css('display', 'block');
                })
            }
        },
        closeVisualizador: function() {
             mod.btncloseVisualizador.click(function() {
                 mod.visualizador.removeClass('openedVisual');
                 mod.btncloseVisualizador.css('display', 'none');
             })
        }
    }

    mod.modalStart();
    /*
    var resize = {
        Start: function(){
             $(".fuerza_venta").height($(window).innerHeight());
             $(".img__cartera").height($(window).innerHeight());
             $(".full-video-screen").height($(window).height());
        }
    }

    resize.Start();
     $(window).resize(function(){

    var wt = $(window).width();
     var ht = $(window).height();
     var fv = $(".fuerza_venta").outerHeight(true);
     var tfuerza =  calc.pixelToEm(fv);
     $(".fuerza_venta").height($(window).innerHeight());
     $(".img__cartera").height($(window).innerHeight());
     $(".full-video-screen").height($(window).height());
     var vidh = $("#myVideo").outerHeight(true);
     var vidh1 = $("#myVideo").outerWidth(true);
     var tvideo = calc.pixelToEm(vidh);
     var tvideo1 =  calc.pixelToEm(vidh1);
     
    });
     */
     var letters = {
        adjust: function(){
            if ($(window).height() >= 600) {

                $(".carteras h4, .ropa__intima h4").removeClass("letters-section-h4");
                $(".carteras p, .ropa__intima p").removeClass("letters-section-p");
            }
            if ($(window).height() <= 600) {

                $(".carteras h4, .ropa__intima h4").addClass("letters-section-h4");
                $(".carteras p, .ropa__intima p").addClass("letters-section-p");
            }
        }
     }
   
     letters.adjust();

    $(window).resize(function(){       
         letters.adjust();
    });
    /*
     setTimeout(function(){
     var secdata = $('section.active').data('index');
     $("section[data-index='6']").addClass("hola");
             console.log(secdata); 
      }, 2000);
     var sl $('section.active').data('index').change();
     $("body").on('DOMSubtreeModified', "section.active", function() {
             console.log('por aca ando');
    });
     $('section.active').bind("DOMSubtreeModified",function(){
      console.log('por aca ando');
    });
    $('section.active').change(function(){
        setTimeout(function(){
             var secdata = $('.section').data('index');
             console.log(secdata);  
        }, 2000);
     });
     */
     var office = $("#office");
    
        $('.slidebttn').hover(
            function () {
                var $this         = $(this);
                var $slidelem     = $('.slidebttn');
                
                $slidelem.stop().animate({'width':'195px','margin-right':'0px','display':'initial',borderTopLeftRadius: 25,borderTopRightRadius: 0,borderBottomLeftRadius: 25,borderBottomRightRadius: 0 },300);
                $slidelem.find('span').stop(true,true).delay( 800 ).fadeIn();
                
                $this.removeClass('button_c');
            },
            function () {
                var $this         = $(this);
                var $slidelem     = $('.slidebttn');
                
                $slidelem.stop().animate({'width':'55px','border-radius':'50%','margin-right':'10px'},600);
                
                $slidelem.find('span').stop(true,true).fadeOut("fast");
                
                $this.addClass('button_c');
                
            }
        );
      $(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: false,
        loop: true,
        beforeMove: function(index) {
            if(index == 1){
                var $this         = $(this);
                var $slidelem     = $('.slidebttn');
                
                $slidelem.stop().animate({'width':'195px','margin-right':'0px','display':'initial',borderTopLeftRadius: 25,borderTopRightRadius: 0,borderBottomLeftRadius: 25,borderBottomRightRadius: 0 },300);
                $slidelem.find('span').stop(true,true).delay( 800 ).fadeIn();
            }
            if(index > 1){
                var $this         = $(this);
                var $slidelem     = $('.slidebttn');
                $slidelem.css("display","initial");
                $slidelem.stop().animate({'width':'55px','border-radius':'50%','margin-right':'10px'},400);
                
                $slidelem.find('span').stop(true,true).fadeOut();
            }
            
            if(index == 6){
                $(".main").addClass("fixFooter");
               
            }
            else{
                $(".main").removeClass("fixFooter");
            }
          

        },
      });
    });
    $("#modalScroll").on("click", function(){
        if (!$("body").hasClass("disabled-onepage-scroll")) {
             $(window).on("keydown", function(e) {
                  switch(e.which) {
                    case 38:
                        
                       $(".main").moveTo(5);
                    break;
                    case 40:
                       $(".main").moveTo(5);
                    break;
                    case 32: //spacebar
                       $(".main").moveTo(5);
                    break;
                    default: return;
                  }
              });
        }

         $(window).on('mousewheel', function(e){

                if(e.originalEvent.wheelDelta /120 > 0) {

                      $(".main").moveTo(5);
                        
                }
                else{

                     $(".main").moveTo(5);
                      
                }
            });

    });
    $("#exampleModal").on('hidden.bs.modal', function() {        
         $(window).off('mousewheel');
         $(window).off('keydown');      
    });

   var $win = $('section');
   var $pos = $(window).innerHeight() * 5;
   console.log($pos);
    console.log($win.scrollTop());
  $win.scroll(function () {

     if ($win.scrollTop() >= $pos){
         console.log('si paso');
       $("section[data-index='5']").addClass('fijar');

     }

   });
     
    
    var calc = {
        pixelToEm: function(num){
            var calcs = num / 16;
            return calcs;
        }
    } 


});