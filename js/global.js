jQuery(document).ready(function($) {

    $('.terms-info a ').on('click', function() { $(window).scrollTo($(this).attr('href'), 1000); return false; });
    $('input, select').styler();

    $("input.load-image").change(function(e) {

        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

            var file = e.originalEvent.srcElement.files[i];

            var img = document.createElement("img");
            var reader = new FileReader();
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(file);
            $("input.load-image").after(img);
        }
    });

    

    $(document).on("click", ".close-popup", function(e) {
        e.preventDefault();
        $.fancybox.close()
    });

    $(document).on("click", ".user-name", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("open-menu");
        return false;
    });

    $(document).mouseup(function (e) {
        var container = $(".user-holder");
        if (container.has(e.target).length === 0){
            $('.user-holder').removeClass("open-menu");
        }
    });

    

    $(".btn-menu").click(function() {
        $(this).parents("body").toggleClass("menu-open");
        return false;
    });

    $(".link-copy").click(function() {
        $(this).parents(".row-frame").addClass("active");
        return false;
    });
    $(".block-profile .photos li").click(function() {
        $(this).toggleClass("tooltip-open");
        return false;
    });
    $(document).click(function(e) {
        var elem = $(".block-profile .photos li");
        if (e.target != elem[0] && !elem.has(e.target).length) {
            elem.removeClass("tooltip-open");
        }
    });
    $("#nav li").click(function() {
        $(this).toggleClass("drop-open");
        return false;
    });
    $(document).click(function(e) {
        var elem = $("#nav li");
        if (e.target != elem[0] && !elem.has(e.target).length) {
            elem.removeClass("drop-open");
        }
    });
    /*$('.bg').parallax("50%", -1.5); */
    $(".faq").accordion({
        active: 1,
        header: ".opener",
        collapsible: true
    });
    $(".accordion").accordion({
        heightStyle: "content"
    });
    $(".tab-area").tabs({
        active: 0
    });

    function initFancybox() {
        $(".fancybox").fancybox({
            toolbar: true,
            buttons: [
                'close'
            ]
        });
    }
    initFancybox();

});

function showhideBlocks(val) {
    $('.tab').css('display', 'none');

    /* $('[data-section="'+ val +'"]').css('display','block'); */
    $('[data-section="' + val + '"]').fadeIn(1000);

}
document.addEventListener('scroll', () => {
    const top = window.pageYOffset;
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');

    one.style.bottom = (-(top * 0.15) + 'px');
    two.style.bottom = (-(top * 0.2) + 'px');
    three.style.bottom = (-(top * 0.3) + 'px');
    four.style.bottom = (-(top * 0.4) + 'px');
    five.style.bottom = (-(top * 0.5) + 'px');
});