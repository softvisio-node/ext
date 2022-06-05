Ext.define( "Ext.locale.picker.Date", {
    "override": "Ext.picker.Date",

    "config": {
        "monthText": window.i18n( "Month" ),
        "dayText": window.i18n( "Day" ),
        "yearText": window.i18n( "Year" ),
    },
} );
