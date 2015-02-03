modules.define('page', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl('page', {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this,
                    sections = this.findBlocksInside('section'),
                    anchors = sections.map(function(block) { return block.getMod('type'); }),
                    fullpage = this.elem('inner').fullpage;

                _this.anchors = anchors;

                this._slidesNumber = sections.length;

                this.elem('inner').fullpage({
                    navigation: true,
                    css3: true,
                    resize: false,
                    verticalCentered: false,
                    // responsive: 1200,
                    anchors: anchors,
                    afterRender: function() {
                        var currentSection = window.location.hash.substr(1);

                        _this._targetSlideIndex = anchors.indexOf(currentSection);
                        _this._targetSlideIndex = _this._targetSlideIndex > -1 ? _this._targetSlideIndex : 0;
                        _this._updateNav(_this._targetSlideIndex);
                        fullpage.moveTo(_this._targetSlideIndex + 1);
                    },
                    onLeave : function(index, nextIndex) {
                        _this._targetSlideIndex = nextIndex - 1;

                        _this._updateNav(_this._targetSlideIndex);
                    }
                });

                this.bindTo(this.elem('nav'), 'click', function(e) {
                    var dir = this.getMod($(e.currentTarget), 'next') ? 'next' : 'prev';

                    _this._targetSlideIndex += dir === 'next' ? 1 : -1;

                    fullpage.moveTo(_this._targetSlideIndex + 1);
                });
            }
        }
    },

    // индекс слайда, к которому происходит скролл
    _targetSlideIndex : 0,
    // количество слайдов
    _slidesNumber : 0,

    _updateNav : function(index) {
        this.elem('nav', 'next', true).css({ bottom : -index * 100 + '%' });
        this.elem('nav', 'prev', true).css({ top : index * 100 + '%' });

        this.setMod('num', index);

        this.elem('nav', 'next', true).children().html(this.anchors.slice(index + 1).reverse().map(function(v) {
            return '<span>'+v+'</span>';
        }));
        this.elem('nav', 'prev', true).children().html(this.anchors.slice(0, index).map(function(v) {
            return '<span>'+v+'</span>';
        }));

        this.setMod(this.elem('nav', 'next', true),
            'visible', this._slidesNumber <= 1 || index === this._slidesNumber - 1 ? '' : true);
        this.setMod(this.elem('nav', 'prev', true),
            'visible', this._slidesNumber <= 1 || index === 0 ? '' : true);
    }
}));

});
