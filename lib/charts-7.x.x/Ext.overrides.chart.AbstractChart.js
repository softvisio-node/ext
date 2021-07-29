Ext.define( "Ext.overrides.chart.AbstractChart", {
    "override": "Ext.chart.AbstractChart",

    initialize () {
        window[Symbol.for( "EXT_CHARTS_REGISTRY" )].register( this );
    },

    doDestroy () {
        window[Symbol.for( "EXT_CHARTS_REGISTRY" )].unregister( this );
    },
} );
