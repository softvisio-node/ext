Ext.define( null, {
    "override": "Ext.Video",

    "template": [
        {
            "tag": "video",
            "preload": "metadata",
            "reference": "media",
            "classList": [ Ext.baseCSSPrefix + "media" ],
        },
        {
            "reference": "ghost",
            "classList": [ Ext.baseCSSPrefix + "video-ghost" ],
        },
    ],
} );
