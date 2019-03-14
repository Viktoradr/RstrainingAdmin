var scope = this;

scope.options = {
    leftSideBar: {
        breakpointWidth: 1170
    },
    dropdownMenu: {
        effectIn: 'fadeIn',
        effectOut: 'fadeOut'
    }
};

scope.xxx = {
    /*close: function() {
        $body.removeClass('ls-closed');
        $openCloseBar.fadeOut();
    },*/
};

scope.leftSideBar = function() {
    var $body = $('body');
    var $overlay = $('.overlay');

    //Close sidebar
    $(document).on("click", function(e) {
        var $target = $(e.target);
        if (e.target.nodeName.toLowerCase() === 'i') {
            $target = $(e.target).parent();
        }

        if (!$target.hasClass('bars') && $('body').hasClass('overlay-open') && $target.parents('#leftsidebar').length === 0) {
            if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
            $body.removeClass('overlay-open');
        }
    });

    $(document).on('each', $('.menu-toggle.toggled'), function(i, val) {
        $(val).next().slideToggle(0);
        console.log("val", val);
    });

    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    console.log(path);

    $(document).on("click", '.menu-toggle', function() {
        var $this = $(this);
        var $content = $this.next();

        if ($($this.parents('ul')[0]).hasClass('list')) {
            var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

            $(document).on('each', $('.menu-toggle.toggled').not($not).next(), function(i, val) {
                console.log('aqui');
                if ($(val).is(':visible')) {
                    $(val).prev().toggleClass('toggled');
                    $(val).slideUp();
                }
            });
        }

        $this.toggleClass('toggled');
        $content.slideToggle(320);
    });

    //Set menu height
    scope.checkStatuForResize(true);
    $(window).resize(function() {
        scope.checkStatuForResize(false);
    });

    //Set Waves
    //Waves.attach('.sidebar-menu .nav a', ['waves-block']);
    //Waves.init();
};

scope.checkStatuForResize = function(firstTime) {
    var $body = $('body');
    var $openCloseBar = $('.navbar .navbar-header .bars');
    var width = $body.width();

    if (firstTime) {
        $body.find('main, .sidebar').addClass('no-animate').delay(1000).queue(function() {
            $(this).removeClass('no-animate').dequeue();
        });
    }

    if (width < scope.options.leftSideBar.breakpointWidth) {
        $body.addClass('ls-closed');
        $openCloseBar.fadeIn();
    } else {
        $body.removeClass('ls-closed');
        $openCloseBar.fadeOut();
    }
}

scope.navbar = function() {
    var $body = $('body');
    var $overlay = $('.overlay');

    $(document).on("click", '.bars', function() {
        $body.toggleClass('overlay-open');
        if ($body.hasClass('overlay-open')) { $overlay.fadeIn(); } else { $overlay.fadeOut(); }
    });

    $(document).on("click", '.nav [data-close="true"]', function() {
        var isVisible = $('.navbar-toggler').is(':visible');
        var $navbarCollapse = $('.navbar-collapse');
        if (isVisible) {
            $(document).on("slideUp", '.navbar-collapse', function() {
                $navbarCollapse.removeClass('in').removeAttr('style');
            });
        }
    });
};

$(function() {
    scope.leftSideBar();
    scope.navbar();
});