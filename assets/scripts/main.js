const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
});

ityped.init(document.querySelector("#ityped"), {
    strings: ['POSSE3.0', 'ANYONE','VALUE'],
    typeSpeed:  500,   
    backSpeed:  150, 
    startDelay: 600,  
    backDelay:  700 
})



// ティンダー風画面のJavaScript動作　コード
$('.gallery').slick({
    infinite: true,
    fade: true, 
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
});

  //選択画像の設定
$('.choice-btn').slick({
    infinite: true, 
    slidesToShow: 8, 
    focusOnSelect: true, 
    asNavFor: '.gallery', 
});
    

$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var index = nextSlide; 
    $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});


//ページトップ　ボタン　実装部分
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
//JavaScript タイピング風アニメーション　仮関数　実際には使用しない
// const typing = (element, sentence) => {
//     [...sentence].forEach((character, index) => {
//         setTimeout(() => {
//         document.querySelector(element).textContent += character;
//       }, 100 * ++index);
//     });
// }

// function textAni (i) {
//     for (let i = 0; i < 100; i ++) {
//         const typing = (element, sentence) => {
//             [...sentence].forEach((character, index) => {
//                 setTimeout(() => {
//                 document.querySelector(element).textContent += character;
//               }, 100 * ++index);
//             });
//         }
//     }
//     typing('#typing', 'POSSE3.0', 'PERSON');
// }
// textAni(99);


lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
})