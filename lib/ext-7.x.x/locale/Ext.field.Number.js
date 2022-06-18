Ext.define( "Ext.local.field.Number", {
    "override": "Ext.field.Number",

    "config": {
        "format": null,

        "minValueText": window.i18nd( "ext", "The minimum value for this field is {0}" ),
        "maxValueText": window.i18nd( "ext", "The maximum value for this field is {0}" ),
        "decimalsText": window.i18nd( "ext", "The maximum decimal places is {0}" ),
        "badFormatMessage": window.i18nd( "ext", "Value is not a valid number" ),
    },

    updateDecimals ( decimals ) {
        if ( decimals ) {
            this.setFormat( `minimumFractionDigits:${decimals},maximumFractionDigits:${decimals}` );
        }
        else {
            this.setFormat( null );
        }

        this.callParent( arguments );
    },

    applyInputValue ( value ) {
        if ( typeof value === "number" ) {
            value = Ext.util.Format.number( value, this.getFormat() );
        }

        return value;
    },
} );
