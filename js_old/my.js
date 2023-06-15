$(document).ready(function() {
$('.bxslider').bxSlider({
  mode: 'fade',
  auto: true
});});

$(document).ready(function() {
ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [58.137489, 41.184531],
            zoom: 5
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
           
        }, {
          
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.790357, 49.154528], {
            balloonContent: 'г. Казань, Академическая улица, д. 2'
        }, {
			iconLayout: 'default#image',
            iconImageHref: 'images/mapicon.png',
			iconImageSize: [58, 58],
			iconImageOffset: [-29, -58]
            
        }))
        .add(new ymaps.Placemark([55.569291, 37.589707], {
            balloonContent: 'г. Москва, Старокачаловская улица, д. 8'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/mapicon.png',
			iconImageSize: [58, 58],
			iconImageOffset: [-29, -58]
        }))
        .add(new ymaps.Placemark([59.872959, 30.325309], {
            balloonContent: 'г. Санкт-Петербург, Яковлевский переулок, д. 11'
        }, {
             iconLayout: 'default#image',
            iconImageHref: 'images/mapicon.png',
			iconImageSize: [58, 58],
			iconImageOffset: [-29, -58]
        }))
       
}});



$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        show: {
            effect: "fade",
            duration: 200
        },
        hide: {
            effect: "drop",
            duration: 250
        }
    });
	$("#dialog1, #dialog2, #dialog3, #dialog4, #dialog5, #dialog6, #dialog7, #dialog8, #dialog9, #dialog10, #dialog11, #dialog12, #dialog13, #dialog14, #dialog15, #dialog16, #dialog17, #dialog18").dialog({
        autoOpen: false,
        modal: true,
        width: 920,
		height: 600,
        show: {
            effect: "fade",
            duration: 200
        },
        hide: {
            effect: "drop",
            duration: 250
        }
    });
	
 $(".order").click(function () {
  
        $("#dialog").dialog("open");
    }); 
 $(".c1").click(function () {
  
        $("#dialog1").dialog("open");
    });
 $(".c2").click(function () {
  
        $("#dialog2").dialog("open");
    });
 $(".c3").click(function () {
  
        $("#dialog3").dialog("open");
    });
 $(".c4").click(function () {
  
        $("#dialog4").dialog("open");
    });
 $(".c5").click(function () {
  
        $("#dialog5").dialog("open");
    });
 $(".c6").click(function () {
  
        $("#dialog6").dialog("open");
    });
 $(".c7").click(function () {
  
        $("#dialog7").dialog("open");
    });
 $(".c8").click(function () {
  
        $("#dialog8").dialog("open");
    });
 $(".c9").click(function () {
  
        $("#dialog9").dialog("open");
    });
 $(".c10").click(function () {
  
        $("#dialog10").dialog("open");
    });
 $(".c11").click(function () {
  
        $("#dialog11").dialog("open");
    });
 $(".c12").click(function () {
  
        $("#dialog12").dialog("open");
    });
 $(".c13").click(function () {
  
        $("#dialog13").dialog("open");
    });
 $(".c14").click(function () {
  
        $("#dialog14").dialog("open");
    });
 $(".c15").click(function () {
  
        $("#dialog15").dialog("open");
    });	
$(".c16").click(function () {
  
        $("#dialog16").dialog("open");
    });
$(".c17").click(function () {
  
        $("#dialog17").dialog("open");
    });
$(".c18").click(function () {
  
        $("#dialog18").dialog("open");
    });
	  });
	
$(document).ready(function () {
    if (!Modernizr.input.placeholder) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    }
});

$(function () {

    $("#moreeeeid").click(function(){
        var tel = $('#tel').val();
        var uname = $('#uname').val();
        var text = $('#text').val();
        if (tel != '' && uname != '' && text != '') {
            $.ajax({
                type: "POST",
                url: "send_mail.php",
                data: { tel: tel, uname: uname, text: text, type: 1},
                dataType: "html"
            }).done(function( msg ) {
                var price = msg;
                if (price == 0) {
                    alert('Произошла ошибка!');
                } else {
                    $("#dialog").dialog("close");
                    $('#tel').val('');
                    $('#uname').val('');
                    $('#text').val('');
                    alert('Ваше сообщение отправлено! В ближайшее время с Вами свяжется наш менеджер.')
                }
            });
        } else {
            alert('Введите номер телефона, имя и сообщение!');
        }
        return true;
    });
});

 