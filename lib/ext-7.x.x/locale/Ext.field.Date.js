Ext.define( "Ext.locale.field.Date", {
    "override": "Ext.field.Date",

    "config": {
        "altFormats": "",

        "minDateMessage": window.i18nd( "ext", "The date in this field must be equal to or after {0}" ),
        "maxDateMessage": window.i18nd( "ext", "The date in this field must be equal to or before {0}" ),
    },

    "updateValue": function ( value, oldValue ) {
        console.log( "--- update:", typeof value, value );

        this.callParent( [value, oldValue] );
    },
} );
