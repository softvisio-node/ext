Ext.define( "Ext.locale.picker.Date", {
    "override": "Ext.picker.Date",

    "config": {
        "monthText": window.i18nd( "ext", "Month" ),
        "dayText": window.i18nd( "ext", "Day" ),
        "yearText": window.i18nd( "ext", "Year" ),
    },
} );
