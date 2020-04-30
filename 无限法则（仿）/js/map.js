// 鼠标经过出现对应的视频
function oTabs(name) {
    $(name).on("mouseenter", "a", function () {
        var _this = $(this),
            _index = _this.parent("li").index() + 1,
            _name = _this.data().name,
            _txt = _this.data().txt,
            _dialogBox = $("#djDialog"),
            _top = _this.offset().top,
            _left = _this.offset().left;
        _dialogBox.show()
        _dialogBox.find("h3").text(_name);
        _dialogBox.find("p").text(_txt);
        _dialogBox.find("img").attr("src", "./image/dj-" +
            _index +
            "-b.jpg")
        _dialogBox.css({
            "top": _top + 28,
            "left": _left - 500 - 12
        })
    }).on("mouseleave", function () {
        $(".dialog-box").hide()
    })
}
oTabs('#djList')
oTabs('#djList1')




//数据
var mapPointArr = [{
    left: 650,
    top: 145,
    name: "造船厂"
}, {
    left: 835,
    top: 805,
    name: "度假村"
}, {
    left: 395,
    top: 620,
    name: "费舍曼城"
}, {
    left: 275,
    top: 865,
    name: "海湾城"
}, {
    left: 300,
    top: 295,
    name: "海底"
}, {
    left: 835,
    top: 535,
    name: "海鲜集市"
}, {
    left: 380,
    top: 380,
    name: "海洋公园"
}, {
    left: 250,
    top: 205,
    name: "海湾工业区"
}, {
    left: 565,
    top: 870,
    name: "伽利略港"
}, {
    left: 860,
    top: 270,
    name: "天使镇"
}, {
    left: 645,
    top: 660,
    name: "马里乌斯天文台"
}, {
    left: 685,
    top: 375,
    name: "图灵市"
}, {
    left: 205,
    top: 455,
    name: "西顿堡遗迹"
}]

var mapPointArr1 = [{
    left: 151,
    top: 191,
    name: "切洛尼陆军基地"
},
{
    left: 446,
    top: 146,
    name: "北部前哨站"
},
{
    left: 411,
    top: 317,
    name: "弹坑"
},
{
    left: 411,
    top: 587,
    name: "训练靶场"
},
{
    left: 320,
    top: 798,
    name: "罗莎保护区"
},
{
    left: 570,
    top: 730,
    name: "汽车处理厂"
},
{
    left: 722,
    top: 412,
    name: "文托化工厂"
},
{
    left: 932,
    top: 162,
    name: "货运站"
},
{
    left: 897,
    top: 390,
    name: "塔内霍镇"
},
{
    left: 948,
    top: 595,
    name: "波瑞德镇"
},
{
    left: 738,
    top: 745,
    name: "雷达站"
},
]
// 对应的视频
var mapPoint = {
    setMapPoint: function () {
        var html = "";
        for (var i = 0; i < mapPointArr.length; i++) {
            html += '<div data-index="' + (i + 1) + '"  id="point' + (i + 1) +
                '" class="map-point" style="left:' + (mapPointArr[i].left -
                    20) +
                'px;top:' +
                (mapPointArr[i].top - 10) + 'px">' + mapPointArr[i].name + '</div>'
        }
        $("#map").append(html)


        var html1 = "";
        for (var i = 0; i < mapPointArr1.length; i++) {
            html1 += '<div data-index="' + (i + 1) + '"  id="points' + (i + 1) +
                '" class="map-point" style="left:' + (mapPointArr1[i].left -
                    20) +
                'px;top:' +
                (mapPointArr1[i].top - 10) + 'px">' + mapPointArr1[i].name + '</div>'
        }
        $("#map1").append(html1)
    },
    bindMapPoint: function (mapName, path) {
        $(mapName).on("mouseenter", "div", function () {
            var _this = $(this),
                _name = _this.text(),
                _index = _this.data().index,
                _dialogBox = $("#mapDialog"),
                _top = _this.offset().top,
                _left = _this.offset().left,
                ww = $("body").width(),
                wh = $(window).height();
            console.log(_top, _left, _dialogBox.outerWidth(true), ww, _left + _dialogBox
                .width());
            _dialogBox.find("h3").text(_name);
            _dialogBox.find("video").attr("src",
                path + _index +
                ".mp4")
            var dialogT = 0,
                dialogL = 0;
            if (_left + _dialogBox.width() > ww) {
                dialogL = _left - _dialogBox.width()
            } else {
                dialogL = _left + 50
            }
            if (_top + _dialogBox.height() - $(window).scrollTop() > wh) {
                dialogT = _top - _dialogBox.height() - 20

            } else {
                dialogT = _top + 50
            }
            _dialogBox.css({
                "top": dialogT,
                "left": dialogL
            })
            _dialogBox.find("video")[0].play()
            _dialogBox.show()
        }).on("mouseleave", "div", function () {
            $("#mapDialog").hide();
            $("#mapDialog").find("video")[0].pause()
        })
    },
    tabMap: function () {
        var changeMap = function (idx) {
            $(".left-bar-list li").eq(idx).addClass("active").siblings("li").removeClass("active");
            $('.cont-wrap').find('.inner-cont').eq(idx).addClass('on').siblings(
                ".inner-cont")
                .removeClass('on');
        }
        $('.left-bar-list li').click(function () {
            var oIndex = $(this).index();
            changeMap(oIndex)
        })
        changeMap(1)
    },
    init: function () {
        this.tabMap();
        this.setMapPoint();
        this.bindMapPoint('#map', './video/cop/');
        this.bindMapPoint('#map1', './video/rot/');
    }
}
mapPoint.init()