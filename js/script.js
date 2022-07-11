$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});

//画像のモーダル
$(".gallery").modaal({
    type: 'image',
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
        $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
        $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
});