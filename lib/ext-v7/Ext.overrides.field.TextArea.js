Ext.define( "Ext.overrides.field.TextArea", {
    "override": "Ext.field.TextArea",

    "config": {
        "wrap": "soft", // "off", "soft", "hard"
    },

    "applyWrap": function ( wrap ) {
        // if (wrap !== null && typeof wrpa !== 'number') {
        //     throw new Error(
        //         "Ext.field.TextArea: [applyMaxRows] trying to pass a value which is not a number"
        //     );
        // }

        return wrap;
    },

    "updateWrap": function ( wrap ) {
        this.setInputAttribute( "wrap", wrap );
    },
} );
