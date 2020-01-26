Ext.define( "Ext.overrides.util.Format", {
    "override": "Ext.util.Format",

    label ( text, color ) {
        return '<span style="padding:2px 10px;background-color:' + color + ';">' + text + "</span>";
    },
} );
