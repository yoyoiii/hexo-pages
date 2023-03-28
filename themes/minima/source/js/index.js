import $ from 'jquery';
import Typed from 'typed.js';

let page = {
    init: () => {
        page.descShow();
        page.event();
    },
    descShow: () => {
        new Typed('#descTyped', {
            stringsElement: '#typedStrings',
            typeSpeed: 80,
            startDelay: 20,
        });
    },
    event: () => {
        $(".my-theme-color").on("click", ".icon-color", function () {
            const $tcolor = $(this).data("tcolor");
            localStorage.setItem('preferredThemeColor', $tcolor);
            $('body').attr("theme", $tcolor );
        })
    }
}

page.init();