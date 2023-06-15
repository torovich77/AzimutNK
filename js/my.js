$(document).ready(function() {
$('.bxslider').bxSlider({
  mode: 'fade',
  auto: true
});});





	
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
                    $('#tel').val('');
                    $('#uname').val('');
                    $('#text').val('');
                    alert('Ваше сообщение отправлено! В ближайшее время с Вами свяжется наш менеджер.');
                    $.fancybox.close();
                }
            });
        } else {
            alert('Введите номер телефона, имя и сообщение!');
        }
        return true;
    });
    $("#moreeeeid2").click(function(){
        var tel = $('#tel2').val();
        var uname = $('#uname2').val();
        var text = $('#text2').val();
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
                    //$("#dialog").dialog("close");
                    $('#tel2').val('');
                    $('#uname2').val('');
                    $('#text2').val('');
                    window.location.replace("blagodarnost.html");
                }
            });
        } else {
            alert('Введите номер телефона, имя и сообщение!');
        }
        return true;
    });
});


const input = document.getElementById('tel2');

input.addEventListener('keydown', function(event) {
    // Разрешаем: backspace, delete, tab и escape
    if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
        // Разрешаем: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
        // Разрешаем: home, end, влево, вправо
        (event.keyCode >= 35 && event.keyCode <= 39)) {

        // Ничего не делаем
        return;
    } else {
        // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
        if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
            event.preventDefault();
        }
    }
});




























 