Ext.define( "Ext.avatar", {
    "extend": "Ext.Image",
    "xtype": "avatar",

    "defaultBindProperty": "src",

    "config": {
        "width": 32,
        "height": 32,
        "style": "border: 1px solid white; border-radius: 50%",
    },
} );
