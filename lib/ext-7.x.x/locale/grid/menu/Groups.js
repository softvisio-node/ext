Ext.define( "Ext.locale.grid.menu.Groups", {
    "override": "Ext.grid.menu.Groups",

    "config": {
        "text": window.i18n( "Groups" ),

        "menu": [
            {
                "text": window.i18n( "Expand all" ),
            },
            {
                "text": window.i18n( "Collapse all" ),
            },
        ],
    },
} );
