import locale from "#vue/locale";

Ext.define( null, {
    "override": "Ext.panel.TimeView",

    "config": {
        "hourDisplayFormat": "ext:G",
        "meridiem": locale.hour12,
        "defaultButtons": [
            {
                "text": "Ok",
                "handler": "up.onConfirm",
            },
            {
                "text": l10n( "Cancel" ),
                "handler": "up.onDecline",
            },
        ],
    },
} );
