$(document).ready(function() {
  // Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});
  // tabs switcher
  $('.i-tab__navigate').on('click', 'a:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('.i-tab').find('.i-tab__item').removeClass('active').eq($(this).index()).addClass('active');
    $(this).closest('.i-tab').find('.i-tab__names h2').removeClass('active').eq($(this).index()).addClass('active');
	});

          var error=0;
          var error2=0;
          var error3=0;
          var min=0;
          var sum=0;
          var tempmin=0;
          $('.zakaz-kamen').click(function(){
              $('.fixed-overlay').show();
              $('.form-zakaz-kamen').show();
              $('.change-title').html($(this).attr('data-package'));
          });
          $(document).ajaxStop(function(){
              $('.close-form-kamen').click(function(){
              $('.form-zakaz-kamen').hide();
              $('.fixed-overlay').hide();
          });
          });
          $('.close-form-kamen').click(function(){
              $('.form-zakaz-kamen').hide();
              $('.fixed-overlay').hide();
          });
           $('.button-zakaz').click(function(){
               if($('.zakaz-name').val()==''){
                   $('.error-name').show();
               }
               else{
                    $('.error-name').hide();
                    error=1;
               }
               if($('.zakaz-phone').val()==''){
                   $('.error-phone').show();
               }
               else{
                   $('.error-phone').hide();
                   error2=1;
               }




               if((error==1)&&(error2==1)){
                   var	datazakaz="name=" + $('.zakaz-name').val() + "&phone=" + $('.zakaz-phone').val() + "&mail=" + $('.zakaz-mail').val();
                   $.ajax({
							  type: "POST",
							  url: "/ajax/mail-zakaz.php",
							  dataType: "json",
							  data: datazakaz,
							  success: function(responsezakaz){
							      if (responsezakaz.success) {
							          $('.form-zakaz-kamen').html('Ваш заказ отправлен. В ближайшее время с Вами свяжется наш менеджер. <span class="close-form-kamen"><i class="fa fa-times" aria-hidden="true"></i></span>');

							  }
							  }
                   });
               }
           });
      	$(function(){
 if ($(window).scrollTop()>="250") $("#ToTop").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()<="250") $("#ToTop").fadeOut("slow")
   else $("#ToTop").fadeIn("slow")
 });

 if ($(window).scrollTop()<=$(document).height()-"999") $("#OnBottom").fadeIn("slow")
 $(window).scroll(function(){
  if ($(window).scrollTop()>=$(document).height()-"999") $("#OnBottom").fadeOut("slow")
   else $("#OnBottom").fadeIn("slow")
 });

 $("#ToTop").click(function(){$("html,body").animate({scrollTop:0},"slow")})
 $("#OnBottom").click(function(){$("html,body").animate({scrollTop:$(document).height()},"slow")})
});
    // Раскрывающиеся меню  11,12,13,14,15,20
/*   var arr = [76,11,12,13,14,15,20,628,'info','catalog','articles'];
   arr.forEach(function(a, i, arr) {
       // i++;
        $(".toggle-" + a).click(function() {
        $(this).closest('.toggle-' + a).find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-' + a).find('.caret').slideToggle(0);
        $(".nav-" + a).slideToggle("slow");
        });
    });
*/
    $(".toggle-info").click(function() {
        $(this).closest('.toggle-info').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-info').find('.caret').slideToggle(0);
        $(".nav-info").slideToggle("slow");
    });


    $(".toggle-catalog").click(function() {

        $(this).closest('.toggle-catalog').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-catalog').find('.caret').slideToggle(0);
        $(".nav-catalog").slideToggle("slow");
    });

    $(".toggle-articles").click(function() {
        $(this).closest('.toggle-articles').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-articles').find('.caret').slideToggle(0);
        $(".nav-articles").slideToggle("slow");
    });
    $(".toggle-stolesh").click(function() {
        $(this).closest('.toggle-stolesh').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-stolesh').find('.caret').slideToggle(0);
        $(".nav-stolesh").slideToggle("slow");
    });
     $(".toggle-podok").click(function() {
        $(this).closest('.toggle-podok').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-podok').find('.caret').slideToggle(0);
        $(".nav-podok").slideToggle("slow");
    });
    $(".toggle-resep").click(function() {
        $(this).closest('.toggle-resep').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-resep').find('.caret').slideToggle(0);
        $(".nav-resep").slideToggle("slow");
    });
    $(".toggle-stoiki").click(function() {
        $(this).closest('.toggle-stoiki').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-stoiki').find('.caret').slideToggle(0);
        $(".nav-stoiki").slideToggle("slow");
    });
    $(".toggle-paneli").click(function() {
        $(this).closest('.toggle-paneli').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-paneli').find('.caret').slideToggle(0);
        $(".nav-paneli").slideToggle("slow");
    });
    $(".toggle-stoly").click(function() {
        $(this).closest('.toggle-stoly').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-stoly').find('.caret').slideToggle(0);
        $(".nav-stoly").slideToggle("slow");
    });
    $(".toggle-lestnicy").click(function() {
        $(this).closest('.toggle-lestnicy').find('.caret-default').slideToggle(0);
        $(this).closest('.toggle-lestnicy').find('.caret').slideToggle(0);
        $(".nav-lestnicy").slideToggle("slow");
    });

    // Выпадающая форма "Мы перезвоним"

   $(".callback-toggle").click(function() {
        $(".callback-wrapp").slideToggle(400);
        return false;
    });

    // Слайдер

    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        mode: 'fade',
        controls: false,
        auto: true,
        autoStart: true,
    });

    // Карусель

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 2,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 3,
                nav: false
            },
            992: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    });

});
	$(document).ready(function() {


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});
	   setTimeout( function(){
	       if($('audio').is($('#sound-link'))){
            var audio = $('#sound-link')[0];
            audio.play();
            $('.right-box-stock').show();
	       }

    }, 3000);
    setTimeout( function(){
	       if($('audio').is($('#sound-link'))){
            $('.right-box-stock').animate({height: 'hide'}, 500);
	       }

    }, 15000);
    $(".fa-times").click(function() {
        $(".right-box-stock").hide();

    });
    function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
	var idpage = getUrlVars()["limit"];

	if($('.btn-more').css('display')=='none')
	{$('.btn-all').hide();}

    if(idpage==500)
    {
        $('.btn-all').hide();
    }
});
