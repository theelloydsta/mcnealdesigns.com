/* entry site for my app */

/* ES5 module pattern for JS objects */

var app = ( function ( doc ) {

    function init () {
        console.log( 'app ready' );
    }

    return {

        init: init

    };

} )(document);
