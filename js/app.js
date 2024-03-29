$(document).ready(function() {
/*    console.log($.cookie('msjOficina'))
    if($.cookie('msjOficina') == 'erase') {
        $(this).css('display', 'none');
        alert(Cookies.get('msjOficina'))
    }*/
    
    $('.msj_oficina').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('oficina_hide');
        setTimeout(() => {
            $(this).css('display', 'none');
            $.cookie('msjOficina', 'erase', {expires: 7});
        },500)
    })
        if (window.innerHeight > 680) {
        $('.collaje').addClass('rev_up');
    } else {
        $('.collaje').addClass('rev_down');
    }

   setTimeout(function() {
        $('.figure__').css('visibility', 'visible');
   },1500)

    // play video de index
    var btnVideo = $('#btn_play_i');
    var videoI = $('#videoI');

    btnVideo.click(function() {
        if (videoI.get(0).paused) {
            btnVideo.css('display', 'none');
            videoI.get(0).play();
        }
    })

    videoI.click(function() {
        if (!videoI.get(0).paused) {
            btnVideo.css('display', 'block');
            videoI.get(0).pause();
        }
    })

    $('.Search_td img').on('click', function() {
        $('.Search_td').toggleClass('SearchAnima');
    })

    // button categorias plus
    var cate_p = true;
    $('.categorias_title').on('click', function() {
        if (cate_p == true) {
            $('.categorias_c').addClass('animCateg_C');
            $('.categorias_title img').css('transform', 'rotate(0deg)');
            $('.categorias_title span').css('display', 'block');
            $('.accordion').hide('fast');
            $('.categorias_title span').fadeOut('fast');
            cate_p = false;
        } else {
            $('.categorias_c').removeClass('animCateg_C');
            $('.categorias_title img').css('transform', 'rotate(45deg)');
            $('.accordion').show('fast');
            $('.categorias_title span').fadeIn('fast');
            cate_p = true;
        }
    })

    // mision y vision 

    var no = {
        textMision: $('.text_mision'),
        textVision: $('.text_vision'),
        btnMision: $('#mision'),
        btnVision: $('#vision'),
        lineVision: $('#lineVision div'),
        lineMision: $('#lineMision div'),
        zonaScroll: $('#zona_scroll_mv'),
        condScroll: 1,
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
        },
        changeVisionScroll: function() {
            no.condScroll = 0;
            no.zonaScroll.on('scroll', function() {
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
        adjust: function() {
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

    $(window).resize(function() {
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

    $(document).ready(function() {
        $(".main").onepage_scroll({
            sectionContainer: "section",
            responsiveFallback: false,
            loop: false,
            beforeMove: function(index) {
                $('#go_top').on('click', function() {
                    $(".main").moveTo(1);
                })

                if (index != 2) {
                    $('.wowbook-thumbnails').css('display', 'none');
                }

                console.log();
                if (index == 1) {
                    $('#go_top').css('bottom', '-60px')
                    //animar portafolio
                    $('.btn_portafolio').removeClass('PortafolioAnimation');
                    $('.btn_portafolio').find('span').removeClass('spanPortafolio')
                    //animacion del buscador
                    $('.Search_td').removeClass('SearchAnima');
                    $('.Search_td img').css('margin-left', '-12px');
                    //animacion contenedor de categorias
                    $('.categorias_c').removeClass('animCateg_C');
                    $('.categorias_title img').css('transform', 'rotate(45deg)');
                    $('.categorias_title img').css('margin-left', '0');
                    $('.accordion').show('fast');
                    $('.categorias_title span').fadeIn('fast');
                    cate_p = false;
                    
                        // $('.visual_Cont').removeClass('fixedV'); 
                }

                if (index == 1 || index == 4) {
                    $('.visual_Cont').removeClass('fixedV'); 
                } else {
                    // fijar visualizador
                    setTimeout(() => {
                        $('.visual_Cont').addClass('fixedV'); 
                    }, 800);
                }

                if (index > 1) {
                    $('#go_top').css('bottom', '20px')
                    //animar portafolio
                    $('.btn_portafolio').addClass('PortafolioAnimation');
                    $('.btn_portafolio').find('span').addClass('spanPortafolio')
                    //animacion del buscador
                    $('.Search_td').addClass('SearchAnima');
                    $('.Search_td img').css('margin-left', '-12px');
                    //animacion contenedor de categorias
                    $('.categorias_c').addClass('animCateg_C');
                    $('.categorias_title img').css('transform', 'rotate(0deg)');
                    $('.categorias_title').css('padding-left', '17px');
                    $('.accordion').hide('fast');
                    $('.categorias_title span').fadeOut('fast');
                    cate_p = false;
                }
                

                // if (pagin == 'contacto' && index == 2) {
                //     $(".main").addClass("fixFooter");
                // } else {
                //     $(".main").removeClass("fixFooter");
                // }



                switch (pagin) {
                    case 'index':
                        if (index == 6) {
                            $(".main").addClass("fixFooter");
                        } else {
                            $(".main").removeClass("fixFooter");
                        }
                        break
                    case 'nosotros':
                        if (index == 6) {
                            $(".main").addClass("fixFooter");
                        } else {
                            $(".main").removeClass("fixFooter");
                        }
                        break
                    case 'familia':
                        if (index == 4) {
                            $(".main").addClass("fixFooter4");
                        } else {
                            $(".main").removeClass("fixFooter4");
                        }
                        break
                    case 'contacto':
                        if (index == 2) {
                            $(".main").addClass("fixFooter2");
                        } else {
                            $(".main").removeClass("fixFooter2");
                        }
                        break
                    case 'premios':
                        if (index == 4) {
                            $(".main").addClass("fixFooter4");
                        } else {
                            $(".main").removeClass("fixFooter4");
                        }
                        break
                }

            },
        });
    });

    $("#modalScroll").on("click", function() {
        if (!$("body").hasClass("disabled-onepage-scroll")) {
            $(window).on("keydown", function(e) {
                switch (e.which) {
                    case 38:

                        $(".main").moveTo(5);
                        break;
                    case 40:
                        $(".main").moveTo(5);
                        break;
                    case 32: //spacebar
                        $(".main").moveTo(5);
                        break;
                    default:
                        return;
                }
            });
        }

        $(window).on('mousewheel', function(e) {

            if (e.originalEvent.wheelDelta / 120 > 0) {

                $(".main").moveTo(5);

            } else {

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
    $win.scroll(function() {

        if ($win.scrollTop() >= $pos) {
            console.log('si paso');
            $("section[data-index='5']").addClass('fijar');

        }

    });


    var calc = {
        pixelToEm: function(num) {
            var calcs = num / 16;
            return calcs;
        }
    }

    var pvi = {
        btnimg: $('.select_items_collec .item a'),
        visorIMG: $('.visualizador'),
        ItemIMG: $('.article a'), // ejemplo
    }

    var mvi = {
        initVisualiz: function() {
            pvi.btnimg.on('click', mvi.mostrarIMG);
            pvi.ItemIMG.on('click', mvi.mostarIMGItem);
        },
        mostrarIMG: function(e) {
            e.preventDefault();
            pvi.visorIMG.attr('src', $(this).attr('href'))
        },
        // este metodo tiene que ser una llamada ajax al backend
        mostarIMGItem: function(e) {
            e.preventDefault();
            pvi.visorIMG.attr('src', $(this).attr('href'));
        }
    }

    mvi.initVisualiz();

    // premios rezise
    $('#thumbs').on('click', function() {
        $('.catalogo').toggleClass('catalogo_thumb');
    })
});