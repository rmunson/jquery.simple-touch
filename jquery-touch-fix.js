/**
 * Very basic extension to jQuery events to ensure touches are monitored.  Simply for support right now
 * but possibly an avenue for further extension at one point. 
 * @author rmunson
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function (jQuery) {
            return factory(jQuery);
        });
    } else if (typeof module !== 'undefined' && module.exports) {
		var jQuery = require('jquery');
		module.exports = factory( jQuery );
	} else{
    	factory(jQuery);
    }
}(this,function(jQuery){
    if(jQuery && jQuery.event && jQuery.event.mouseHooks){
    	jQuery.event.touchHooks=jQuery.extend(true,{},jQuery.event.mouseHooks,{props:['touches']});

    	jQuery.each('touchstart touchend touchmove touchcancel pinch'.split(' '),function(i,name) {
			jQuery.event.fixHooks[name] = jQuery.event.touchHooks;
	    });
    }
    return jQuery;
}));