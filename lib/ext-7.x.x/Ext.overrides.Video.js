Ext.define( "Ext.overrides.Video", {
    "override": "Ext.Video",

    "template": [
        {
            "tag": "video",
            "reference": "media",
            "classList": [Ext.baseCSSPrefix + "media"],
        },
        {
            "reference": "ghost",
            "classList": [Ext.baseCSSPrefix + "video-ghost"],
        },
    ],
} );
