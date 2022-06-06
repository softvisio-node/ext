Ext.define( "Ext.locale.grid.menu.Groups", {
    "override": "Ext.grid.menu.Groups",

    "config": {
        "text": window.i18nd( "ext", "Groups" ),

        "menu": [
            {
                "text": window.i18nd( "ext", "Expand all" ),
            },
            {
                "text": window.i18nd( "ext", "Collapse all" ),
            },
        ],
    },
} );
