import locale from "#vue/locale";

Ext.define( "Ext.overrides.panel.TimeView", {
    "override": "Ext.panel.TimeView",

    "config": {
        "hourDisplayFormat": "ext:G",
        "meridiem": locale.hour12,
        "defaultButtons": [
            {
                "text": window.l10n( "Ok" ),
                "handler": "up.onConfirm",
            },
            {
                "text": window.l10n( "Cancel" ),
                "handler": "up.onDecline",
            },
        ],
    },
} );
