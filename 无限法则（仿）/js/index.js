function domAwardAppend() {
    var domTmpl = function (i) {
        var rootUrl = './image/roe/'
        return '<li><span class="num">' + i + '</span><img  class="swiper-lazy" src="' +
            rootUrl + i + '.png" alt=""></li>'


    }

    var tmp = ''
    for (var i = 0; i < 10; i++) {
        tmp += '<ul class="reward-list">'

        for (var a = i * 10 + 1; a <= i * 10 + 10; a++) {

            tmp += domTmpl(a)
        }
        tmp += '</ul>'
        console.log(tmp);
        // console.log(tmp);
        // console.log(i);

        // console.log(1);
    }

    $('.reward-list-wrap').html(tmp)
}
domAwardAppend()