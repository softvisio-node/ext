Ext.define( "Ext.locale.field.Date", {
    "override": "Ext.field.Date",

    "config": {

        // force use date picker
        "editable": false,
    },

    "minDateMessage": window.i18nd( "ext", "The date in this field must be equal to or after {0}" ),
    "maxDateMessage": window.i18nd( "ext", "The date in this field must be equal to or before {0}" ),

    parseValue ( value, errors ) {

        // parse date on manual input
        if ( this.getEditable() ) return this.callParent( arguments );

        return this.getValue();
    },
} );
