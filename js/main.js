$(document).ready(function()
{
    $('a.menu-item').click(function ()
    {
        $('html, body').animate({scrollTop: $($(this).attr('href')).position().top - 60}, 2000);
    });

    $('.gallery').lightGallery
    ({
        selector: 'a'
    });

    $(".input-file").before(
        function()
        {
            if ( ! $(this).prev().hasClass('input-ghost') )
            {
                var element = $("<input type='file' class='input-ghost' style='visibility:hidden; height:0' multiple>");
                element.attr("name",$(this).attr("name"));
                element.change(function()
                {
                    element.next(element).find('input').val((element.val()).split('\\').pop());
                    $('.btn-reset').css('display','block');
                });
                $(this).find("button.btn-choose").click(function()
                {
                    element.click();
                });
                $(this).find("button.btn-reset").click(function()
                {
                    element.val(null);
                    $(this).parents(".input-file").find('input').val('');
                    $('.btn-reset').css('display','none');
                });
                $(this).find('input').css("cursor","pointer");
                $(this).find('input').mousedown(function()
                {
                     $(this).parents('.input-file').prev().click();
                     return false;
                });
                return element;
            }
        });
});


