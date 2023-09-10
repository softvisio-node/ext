import locale from "#vue/locale";

Ext.define( "Ext.overrides.panel.TimeView", {
    "override": "Ext.panel.TimeView",

    "config": {
        "hourDisplayFormat": "ext:G",
        "meridiem": locale.hour12,
        "defaultButtons": [
            {
                "text": window.l10n( "Ok", { "domain": "ext" } ),
                "handler": "up.onConfirm",
            },
            {
                "text": window.l10n( "Cancel", { "domain": "ext" } ),
                "handler": "up.onDecline",
            },
        ],
    },
} );
