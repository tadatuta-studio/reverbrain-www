modules.define('page', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl('page', {
    onSetMod: {
        js: {
            inited: function() {
                var fullpage = this.elem('inner').fullpage;

                this.elem('inner').fullpage({
                    navigation: true,
                    css3: true,
                    resize: false,
                    verticalCentered: false,
                    // responsive: 1200,
                    anchors: ['reverbrain', 'elliptics', 'eblob', 'rift', 'about'],
                    // afterLoad: function(anchorLink, index) {
                    //    console.log('anchorLink', anchorLink, 'index', index);
                    // },
                    afterRender: function() {
                        var currentSection = window.location.hash.substr(1);

                        currentSection && fullpage.moveTo(currentSection);
                    }
                });
            }
        }
    }
}));

});
