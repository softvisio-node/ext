const formatCache = {};

Ext.define( null, {
    "override": "Ext.field.Number",

    "config": {
        "format": null,
    },

    updateDecimals ( decimals ) {
        const format = { ...Ext.util.Format.parseFormat( this.getFormat(), formatCache ) };

        if ( decimals ) {
            format.minimumFractionDigits = decimals;
            format.maximumFractionDigits = decimals;
        }
        else {
            format.minimumFractionDigits = 0;
            format.maximumFractionDigits = 0;
        }

        this.setFormat( Ext.util.Format.buildFormat( format ) );

        this.callParent( arguments );
    },

    applyInputValue ( value ) {
        if ( typeof value === "number" ) {
            value = Ext.util.Format.number( value, this.getFormat() );
        }

        return value;
    },
} );
