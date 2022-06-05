Ext.define( "Ext.locale.grid.plugin.ViewOptions", {
    "override": "Ext.grid.plugin.ViewOptions",

    "config": {
        "sheet": {
            "lazy": true,
            "$value": {
                "xtype": "sheet",
                "cls": Ext.baseCSSPrefix + "gridviewoptions",
                "items": [
                    {
                        "docked": "top",
                        "xtype": "titlebar",
                        "title": window.i18n( "Customize" ),
                        "items": [
                            {
                                "xtype": "button",
                                "text": window.i18n( "Done" ),
                                "ui": "action",
                                "align": "right",
                                "role": "donebutton",
                            },
                        ],
                    },
                ],
                "hidden": true,
                "hideOnMaskTap": true,
                "enter": "right",
                "exit": "right",
                "modal": true,
                "right": 0,
                "layout": "fit",
                "stretchY": true,
            },
        },
    },

    "columnList": {
        "lazy": true,
        "$value": {
            "xtype": "nestedlist",
            "title": window.i18n( "Columns" ),
            "clearSelectionOnListChange": false,
            "listConfig": {
                "triggerEvent": null,
                "infinite": true,
                "mode": "MULTI",
                "variableHeights": true,
                "scrollToTopOnRefresh": false,
                "plugins": {
                    "sortablelist": {
                        "source": {
                            "handle": "." + Ext.baseCSSPrefix + "column-options-sortablehandle",
                        },
                    },
                },
                "itemConfig": {
                    "xtype": "viewoptionslistitem",
                },
                "itemTpl": "{text}",
            },
            "store": {
                "type": "tree",
                "fields": ["id", "text", "dataIndex", "header", "hidden", "hideable", "grouped", "groupable"],
                "root": {
                    "text": window.i18n( "Columns" ),
                },
            },
        },
    },
} );
