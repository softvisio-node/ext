Ext.define( "Ext.local.field.Number", {
    "override": "Ext.field.Number",

    "config": {
        "minValueText": window.i18nd( "ext", "The minimum value for this field is {0}" ),
        "maxValueText": window.i18nd( "ext", "The maximum value for this field is {0}" ),
        "decimalsText": window.i18nd( "ext", "The maximum decimal places is {0}" ),
        "badFormatMessage": window.i18nd( "ext", "Value is not a valid number" ),
    },
} );
