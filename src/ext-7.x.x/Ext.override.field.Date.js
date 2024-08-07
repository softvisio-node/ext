Ext.define( null, {
    "override": "Ext.field.Date",

    "config": {

        // force use date picker
        "editable": false,
    },

    "minDateMessage": l10n( "The date in this field must be equal to or after {0}" ),
    "maxDateMessage": l10n( "The date in this field must be equal to or before {0}" ),

    parseValue ( value, errors ) {

        // parse date on manual input
        if ( this.getEditable() ) return this.callParent( arguments );

        return this.getValue();
    },
} );
