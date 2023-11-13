Ext.define( "Ext.grid.column.avatar.js", {
    "extend": "Ext.grid.column.Column",
    "xtype": "avatarcolumn",

    "config": {
        "width": 40,
        "align": "right",
        "src": "avatar_url",
    },

    applyCell ( cell, oldCell ) {
        return {
            "xtype": "widgetcell",
            "widget": {
                "xtype": "container",
                "layout": {
                    "type": "hbox",
                    "pack": this.getAlign() === "right" ? "end" : "start",
                },
                "items": [
                    {
                        "xtype": "avatar",
                        "bind": `{record.${this.getSrc()}}`,
                    },
                ],
            },
        };
    },
} );
