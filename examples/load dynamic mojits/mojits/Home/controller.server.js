/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('home', function(Y, NAME) {

/**
 * The home module.
 *
 * @module home
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.assets.addCss('./index.css');
            ac.done();
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'itsa-mojitonthefly-addon']});
