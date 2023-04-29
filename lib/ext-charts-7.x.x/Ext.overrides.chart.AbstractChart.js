import themeStore from "#vue/stores/theme";

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
        "downloadServerUrl": "https://",
    },

    initialize () {
        if ( !this._themeListener ) {
            themeStore.on( "themeChange", ( this._themeListener = this._setTheme.bind( this ) ) );
        }

        this._setTheme( themeStore.theme );

        this.callParent( arguments );
    },

    doDestroy () {
        if ( this._themeListener ) {
            themeStore.off( "themeChange", this._themeListener );
            this._themeListener = null;
        }

        this.callParent( arguments );
    },

    _setTheme ( theme ) {
        if ( theme.darkMode ) {
            this.setTheme( DARK_MODE_THEME );
        }
        else {
            this.setTheme( THEMES[theme.base] || DEFAULT_THEME );
        }
    },
} );
