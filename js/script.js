// loading画面============================

//ローディング画面の処理

/* /*  */
window.addEventListener('DOMContentLoaded', function () {
    const loadingElement = document.getElementById('loading');

    // ローディング画面を非表示にする関数
    function hideLoading() {
        loadingElement.style.transition = 'opacity 2s ease, visibility 1.5s ease';
        loadingElement.style.opacity = 0;
        loadingElement.style.visibility = 'hidden';
    }

    // ページが初回訪問かどうかをセッションストレージで確認
    if (!sessionStorage.getItem('firstVisit')) {
        // 初回訪問の場合、セッションストレージにフラグをセット
        sessionStorage.setItem('firstVisit', 'true');

        // ローディング画面を表示し、4秒後に非表示にする
        setTimeout(function () {
            hideLoading();
        }, 3000);

    } else {
        // 初回訪問ではない場合、ローディング画面を非表示にする
        loadingElement.style.display = 'none';
    }
});

//*  */





// navの色反転============================

jQuery(function ($) {
    var nav = jQuery('#nav'); // ナビゲーション要素
    var height = jQuery(window).height(); // ウィンドウの高さ
    var w = $(window).width(); // ウィンドウの幅
    var x = 960; // タブレットの画面幅
    var y = 560; // スマホの画面幅
    var footer = jQuery('#footer'); // フッター要素の追加
    var footerTop = footer.offset().top; // フッターの上部位置を取得

    function checkScroll() {
        var scrollTop = jQuery(window).scrollTop(); // 現在のスクロール位置を取得

        // デバッグ用にスクロール位置とフッター位置を出力
        console.log('スクロール位置:', scrollTop);
        console.log('フッター位置:', footerTop);

        if (w > x) { // 画面幅が961px以上のとき
            if (scrollTop > height && scrollTop < footerTop) {
                nav.addClass('invert'); // スクロールが画面の高さを越え、フッターに到達していない場合にクラスを追加
            } else {
                nav.removeClass('invert'); // それ以外の場合はクラスを削除
            }
        } else if (x >= w && w > y) { // 画面幅が561px以上960px以下のとき
            if (scrollTop > 500 && scrollTop < footerTop) {
                nav.addClass('invert'); // スクロールが500pxを越え、フッターに到達していない場合にクラスを追加
            } else {
                nav.removeClass('invert'); // それ以外の場合はクラスを削除
            }
        } else { // 画面幅が560px以下のとき
            if (scrollTop > 250 && scrollTop < footerTop) {
                nav.addClass('invert'); // スクロールが250pxを越え、フッターに到達していない場合にクラスを追加
            } else {
                nav.removeClass('invert'); // それ以外の場合はクラスを削除
            }
        }
    }

    jQuery(window).scroll(checkScroll); // スクロールイベントに関数をバインド
    jQuery(window).resize(function () { // ウィンドウリサイズ時にフッターの位置を再取得
        w = $(window).width(); // ウィンドウの幅を再取得
        footerTop = footer.offset().top; // フッターの上部位置を再取得
        checkScroll(); // 初期のスクロール状態をチェック
    });

    checkScroll(); // ページ読み込み時に初期状態をチェック
});



// ハンバーガー ============================

$(function () {
    $('.btn-gNav').on('click', function () {        // js-btnクラスをクリックすると、
    $(' nav , .btn-gNav').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
})
});

//   ページ内リンククリックで閉じる
$(function () {
    // ハンバーガーボタンクリックで実行
    $('.nav-hover-style, .gnav-list .btn').click(function () {
        $(this).toggleClass('open');
        $(' nav , .btn-gNav').toggleClass('open');
    });
    
    $('.drawer__nav__link').click(function () {
        $(' nav , .btn-gNav').removeClass('open');
        $(' nav , .btn-gNav').removeClass('open');
    });
    
});

// ハンバーガーを開いたときスクロールを無効にする
$(function () {
    $('.btn-gNav').on('click', function () {        // js-btnクラスをクリックすると、
        // 現在のbodyタグのoverflowスタイルを確認
        if ($("body").css("overflow") === "hidden") {

            // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
            $("body").css({ height: "", overflow: "" });

        } else {

            // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
            $("body").css({ height: "100%", overflow: "hidden" });

        }
    });
});



// MenuSlider ============================
$(function () {
    $('.MenuSlider').slick({
        autoplay: true, // 自動でスクロール
        autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
        speed: 10000, // スライドが流れる速度を設定
        cssEase: "linear", // スライドの流れ方を等速に設定
        slidesToShow: 9, // 表示するスライドの数
        swipe: false, // 操作による切り替えはさせない
        arrows: false, // 矢印非表示
        pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
        pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
                }
            }
        ]
    });
});



// car

/* 

const image = document.getElementById('car'); // ロゴ画像

// 画像を左端から右に動かす
image.animate(
    // 途中の状態を表す配列
    [
        { transform: 'translate(40%, -40%)'}, // 開始時の状態（左端）
        { transform: 'translate(250%, -40%)' } // 終了時の状態（左端から--の位置）
    ], 
    // タイミングに関する設定
    {
        fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
        duration: 6500, // 再生時間（1000ミリ秒）
        iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
        delay: 1000, // 再生までの待機時間（1000ミリ秒）
        easing: 'cubic-bezier(0.5, 0, 0.5, 1)', // 最初に加速するように設定
    },
);

 */




