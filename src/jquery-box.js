
(function( $ ){

  var closeContext = function() {
    $('.context-mask, .context').remove()
  };

    // default actions.
    $('.context .close, .context-mask').live('click', closeContext);
    $(document).keydown(function(ev) {
        if (ev.keyCode == 27) {
            closeContext();
        }
    });
    
    var inverse = function(v) {
        switch(v) {
            case 'top': return 'bottom';
            case 'bottom': return 'top';
            case 'left': return 'right';
            case 'right': return 'left';
        }
    };
    
    $.fn.contextfy = function(options) {
        var options = options || {};
        var afteropen = options['afteropen'] || function() {};
        $(this).each(function(i, e) {
            var tmpl = $(e).data('contextTmpl');
            var position = $(e).data('contextPosition') || 'top';
            var t = $('#' + tmpl)
            $(e).click(function() {
                // console.debug($(e).data())
                var d = $('<div class="context"><div class="inner"></div><div class="point"></div></div>').appendTo(document.body);
                d.css('zIndex', 10001);
                var content = t.tmpl( $(this).data() ).appendTo( d.children('.inner') );
                $('<div class="context-mask"></div>').appendTo(d.parent()).css('zIndex', 10000);
                var positions = position.split("-");
                var ypos = positions[0];
                var xpos = positions[1] || 'center';
                
                d.addClass(ypos);
                // console.debug(xpos)
                
                if ( ypos == 'top' || ypos == 'bottom' ) {
                    d.position({
                        of: $(e),
                        my: xpos + ' ' + ypos,
                        at: xpos + ' ' + inverse(ypos)
                    });
                    if (xpos == 'center') {
                      d.children('.point').css('left', parseInt((d.width() / 2) - 10));
                    } else if (xpos == 'right') {
                      d.children('.point').css('right', ($(e).outerWidth() / 2) - 10);
                    } else if (xpos == 'left') {
                      d.children('.point').css('left', ($(e).outerWidth() / 2) - 10);
                    }
                } else {
                    d.position({
                        of: $(e),
                        my: ypos + ' center',
                        at: inverse(ypos) + ' center'
                    });
                    d.children('.point').css('top', parseInt((d.height() / 2) - 10));
                }
                afteropen(content);
            });
        });
    };
})(jQuery);

$(function() {
    $('*[data-context-tmpl]').contextfy();
});