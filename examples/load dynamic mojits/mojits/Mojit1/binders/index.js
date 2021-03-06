/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('mojit1-binder-index', function(Y, NAME) {

/**
 * The home-binder-index module.
 *
 * @module home-binder-index
 */

    /**
     * Constructor for the HomeBinderIndex class.
     *
     * @class HomeBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            var instance = this;
            instance.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var instance = this,
                count = 0;
            instance.mytimer = Y.later(
                1000,
                null,
                function() {
                    node.set('text', 'This is Mojit 1, count: '+(++count));
                },
                null,
                true
            );
        },

        onRefreshView: function (node) {
            var instance = this;
            instance.destructor();
            instance.bind(node);
        },

        destructor: function() {
            var instance = this;
            instance.mytimer.cancel();
        }

    };

}, '0.0.1', {requires: ['mojito-client', 'node-event-delegate', 'scrollview']});
