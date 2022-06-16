import locale from "../locale.js";

Ext.define( "Ext.locale.panel.TimeView", {
    "override": "Ext.panel.TimeView",

    "config": {
        "hourDisplayFormat": "ext:G",
        "meridiem": locale.hour12,
        "defaultButtons": [
            {
                "text": window.i18nd( "ext", "Ok" ),
                "handler": "up.onConfirm",
            },
            {
                "text": window.i18nd( "ext", "Cancel" ),
                "handler": "up.onDecline",
            },
        ],
    },
} );
