Ext.define( "Ext.locale.picker.Picker", {
    "override": "Ext.picker.Picker",

    "applyDoneButton": function ( config, oldButton ) {
        if ( config ) {
            if ( config === true ) {
                config = {};
            }

            if ( typeof config === "string" ) {
                config = {
                    "text": config,
                };
            }

            Ext.applyIf( config, {
                "align": "right",
                "text": window.i18nd( "ext", "Done" ),
            } );
        }

        return Ext.factory( config, "Ext.Button", oldButton );
    },

    "applyCancelButton": function ( config, oldButton ) {
        if ( config ) {
            if ( Ext.isBoolean( config ) ) {
                config = {};
            }

            if ( typeof config === "string" ) {
                config = {
                    "text": config,
                };
            }

            Ext.applyIf( config, {
                "align": "left",
                "text": window.i18nd( "ext", "Cancel" ),
            } );
        }

        return Ext.factory( config, "Ext.Button", oldButton );
    },
} );
