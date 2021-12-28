const DEFAULT_THEME = "green";
const DARK_MODE_THEME = "midnight";
const THEMES = {
    "red": "red",
    "pink": "red",
    "purple": "purple",
    "deep-purple": "purple",
    "indigo": "muted",
    "blue": "blue",
    "light-blue": "sky",
    "cyan": "sky",
    "teal": "blue",
    "green": "green",
    "light-green": "green",
    "lime": "yellow",
    "yellow": "yellow",
    "amber": "yellow",
    "orange": "red",
    "deep-orange": "red",
    "brown": "purple",
    "grey": "purple",
    "blue-grey": "blue",
};

Ext.define( "Ext.overrides.chart.AbstractChart", {
    "override": "Ext.chart.AbstractChart",

    "config": {
        "downloadServerUrl": "https://www.google.com/",
    },

    initialize () {
        this.__setTheme( window[Symbol.for( "THEME_REGISTRY" )].theme );

        this._themeListener = theme => this.__setTheme( theme );

        window[Symbol.for( "THEME_REGISTRY" )].on( "theme", this._themeListener );

        this.callParent( arguments );
    },

    doDestroy () {
        window[Symbol.for( "THEME_REGISTRY" )].off( "theme", this._themeListener );

        this._themeListener = null;

        this.callParent( arguments );
    },

    __setTheme ( theme ) {
        if ( theme.darkMode ) {
            this.setTheme( DARK_MODE_THEME );
        }
        else {
            this.setTheme( THEMES[theme.base] || DEFAULT_THEME );
        }
    },
} );
