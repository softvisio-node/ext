Ext.define( null, {
    "override": "Ext.field.TextArea",

    "config": {
        "wrap": "soft", // "off", "soft", "hard"
    },

    "applyWrap": function ( wrap ) {

        // if (wrap !== null && typeof wrap !== 'number') {
        //     throw new Error(
        //         "Ext.field.TextArea: [applyWrap] trying to pass a value which is not allowed"
        //     );
        // }

        return wrap;
    },

    "updateWrap": function ( wrap ) {
        this.setInputAttribute( "wrap", wrap );
    },
} );
