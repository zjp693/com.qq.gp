$(document).ready(function () {
    //    添加小圆点
    $(".lang-box").on('click', function () {
        if ($(this).hasClass("lang-box-active")) {
            $(this).removeClass("lang-box-active")

        } else {
            $(this).addClass("lang-box-active")
        }
    })


    // 回调
    // 页面动一下
    obBox()
    // 我的小圆点
    domAwardAppend()

    // 滑动分页可点击
    var mySwiper = new Swiper('.reward-inner', {
        wrapperClass: 'reward-list-wrap',
        slideClass: 'reward-list',
        pagination: {
            el: '.reward-dot',
            bulletElement: 'span',
            bulletActiveClass: 'active',
            clickable: true
        },
        navigation: {
            nextEl: '.reward-btn-r',
            prevEl: '.reward-btn-l'
        },
        lazy: {
            loadPrevNext: true
        }
        //loop: true
        // Optional parameters
    })
});





// 点击播放视频

$('.videolist').each(function () { //遍历视频列表
    $(this).click(function () { //这个视频被点击后执行
        var img = $(this).attr('vpath');//获取视频预览图
        var video = $(this).attr('ipath');//获取视频路径
        $('.videos').html("<video id=\"video\" poster='" + img + "' style='width: 75%;padding-top: 40px;' src='" + video + "' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"close1()\" class=\"vclose\" src=\"./image/Snipaste_X.png\"/>");
        $('.videos').show();
    });
});

function close1() {
    var v = document.getElementById('video');//获取视频节点
    $('.videos').hide();//点击关闭按钮关闭暂停视频
    v.pause();
    $('.videos').html();
}


// 封装小圆点的函数
function domAwardAppend() {
    var domTmpl = function (i) {
        var rootUrl = './image/roe/'
        return '<li><span class="num">' + i + '</span><img  class="swiper-lazy" src="" data-src="' +
            rootUrl + i +
            '.png" alt="award"></li>'
    }
    var tmp = ''
    for (var i = 0; i < 10; i++) {
        tmp += '<ul class="reward-list">'

        for (var a = i * 10 + 1; a <= i * 10 + 10; a++) {
            tmp += domTmpl(a)
        }
        tmp += '</ul>'
    }
    $('.reward-list-wrap').html(tmp)
}



// 封装页面动一下的函数
function obBox() {
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > 0 && !$(entry.target).hasClass('ob-active')) {
                $(entry.target).addClass("ob-active")
            }
        })
    }, {
        threshold: [0.5]

    })

    var ele = document.getElementsByClassName("ob-box");
    for (var i = 0; i < ele.length; i++) {
        io.observe(ele[i])
    }
}