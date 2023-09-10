Ext.define( "Ext.overrides.field.Date", {
    "override": "Ext.field.Date",

    "config": {

        // force use date picker
        "editable": false,
    },

    "minDateMessage": window.l10n( "The date in this field must be equal to or after {0}", { "domain": "ext" } ),
    "maxDateMessage": window.l10n( "The date in this field must be equal to or before {0}", { "domain": "ext" } ),

    parseValue ( value, errors ) {

        // parse date on manual input
        if ( this.getEditable() ) return this.callParent( arguments );

        return this.getValue();
    },
} );
