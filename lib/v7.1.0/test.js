Ext.define('Ext.overrides.app.Application1', {
    override: 'Ext.app.Application',
    requires: ['Ext.viewport.Viewport'],
    uses: ['Ext.tip.Manager'],

    config: {
        /**
         * @cfg {Object} viewport
         * Any configuration to be passed on to the {@link Ext.Viewport}.
         *
         * @since 6.5.0
         */
        viewport: null
    },

    // @cmd-auto-dependency {defaultType: "Ext.tip.Manager"}
    /**
     * @cfg {Boolean/Object} quickTips
     * `true` to enable quick tips to be read from the DOM and displayed
     * by the `Ext.tip.Manager`. Pass the object form as a configuration
     * for `Ext.tip.Manager`.
     *
     * @since 6.2.0
     */
    quickTips: false,
})
