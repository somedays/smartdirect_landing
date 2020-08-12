(function ($)
{
    $.fn.pageNav = function (User_Settings)
    {
// Settings
        var $Navigation = this;
        var Settings = $.extend(
            {
                'scroll_shift': 0,
                'active_shift': 0,
                'duration':     900
            }, User_Settings);
// Animation
        $($Navigation).click(function ()
        {
            var Scroll = $($(this).attr('href')).offset().top - Settings['scroll_shift'];
            $('html,body').animate({'scrollTop': Scroll + 'px'}, Settings['duration']);
            return false;
        });
// Backlight
        var Sizes = [];
        $Navigation.each(function (Key, Value)
        {
            Sizes[Key] = [];
            Sizes[Key]['id'] = $(Value).attr('href');
            Sizes[Key]['value'] = $(Sizes[Key]['id']).offset().top - Settings['scroll_shift'] - Settings['active_shift'];
            Sizes[Key]['height'] = Sizes[Key]['value'] + $(Sizes[Key]['id']).outerHeight();
        });
    };
})(jQuery);