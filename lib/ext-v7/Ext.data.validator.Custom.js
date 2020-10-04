/*
 * "validators": {
 *     "type": "custom",
 *     "message": `Must be valid URL`,
 *     validator ( val, record ) {
 *         return false;
 *     },
 *  }
 */

Ext.define( "Ext.data.validator.Custom", {
    "extend": "Ext.data.validator.Validator",

    "alias": "data.validator.custom",

    "type": "custom",

    "config": {
        "message": "Is in the wrong format",

        "validator": null,
    },

    // <debug>
    "constructor": function () {
        this.callParent( arguments );

        if ( !this.getValidator() ) {
            Ext.raise( "validator.Custom must be configured with a validator" );
        }
    },

    // </debug>

    "validate": function ( value, record ) {
        var validator = this.getValidator(),
            result = validator && validator( value, record );

        return result ? result : this.getMessage();
    },
} );
