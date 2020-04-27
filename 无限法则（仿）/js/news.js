$(function () {

    //tab切换
    $.fn.extend({
        "tab": function (options) {
            var defaults = {
                hdActiveCls: 'active',
            };
            var options = $.extend(defaults, options);
            return this.each(function () {
                var $el = $(this);
                $el.find(options.bd).not($el.find(options.bd).eq(0)).hide();
                $el.on(options.model, options.hd, function () {
                    if ($(this).hasClass(options.hdActiveCls)) {
                        return false;
                    }
                    var idx = $(this).index(options.hd);
                    $(this).addClass(options.hdActiveCls).siblings().removeClass(options.hdActiveCls);
                    if (options.fade == true) {
                        $el.find(options.bd).eq(idx).fadeIn().siblings(options.bd).hide();
                    } else {
                        $el.find(options.bd).eq(idx).show().siblings(options.bd).hide();
                    }
                    return false;
                });
            })
        }
    })
})