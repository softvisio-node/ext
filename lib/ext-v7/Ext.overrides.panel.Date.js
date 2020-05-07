Ext.define( "Ext.overrides.panel.Date", {
    "override": "Ext.panel.Date",

    // fix font-awesome icons
    "config": {
        "tools": {
            "previousMonth": {
                "reference": "navigatePrevMonth",
                "iconCls": "fas fa-angle-left",
                "cls": Ext.baseCSSPrefix + "left-year-tool ",
                "weight": -100,
                "increment": -1,
                "focusable": false,
                "tabIndex": null,
                "forceTabIndex": true,
                "listeners": {
                    "click": "onMonthToolClick",
                },
            },
            "previousYear": {
                "reference": "navigatePrevYear",
                "iconCls": "fas fa-angle-double-left",
                "cls": Ext.baseCSSPrefix + "left-month-tool",
                "weight": -90,
                "increment": -12,
                "focusable": false,
                "tabIndex": null,
                "forceTabIndex": true,
                "listeners": {
                    "click": "onMonthToolClick",
                },
            },
            "nextYear": {
                "reference": "navigateNextYear",
                "iconCls": "fas fa-angle-double-right",
                "cls": Ext.baseCSSPrefix + "right-month-tool",
                "weight": 90,
                "increment": 12,
                "focusable": false,
                "tabIndex": null,
                "forceTabIndex": true,
                "listeners": {
                    "click": "onMonthToolClick",
                },
            },
            "nextMonth": {
                "reference": "navigateNextMonth",
                "iconCls": "fas fa-angle-right",
                "cls": Ext.baseCSSPrefix + "right-year-tool",
                "weight": 100,
                "increment": 1,
                "focusable": false,
                "tabIndex": null,
                "forceTabIndex": true,
                "listeners": {
                    "click": "onMonthToolClick",
                },
            },
        },
    },
} );
