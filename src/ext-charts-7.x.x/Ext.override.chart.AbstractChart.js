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

Ext.define( null, {
    "override": "Ext.chart.AbstractChart",

    "config": {
        "downloadServerUrl": "https://",
    },

    initialize () {
        if ( !this._themeListener ) {
            this._themeListener = this._updateTheme.bind( this );

            window[Symbol.for( "app" )].theme.on( "darkModeChange", this._themeListener );
            window[Symbol.for( "app" )].theme.on( "themeChange", this._themeListener );
        }

        this._updateTheme();

        // XXX
        try {
            this.callParent( arguments );
        }
        catch ( e ) {}
    },

    doDestroy () {
        if ( this._themeListener ) {
            window[Symbol.for( "app" )].theme.off( "darkModeChange", this._themeListener );
            window[Symbol.for( "app" )].theme.off( "themeChange", this._themeListener );
            this._themeListener = null;
        }

        // XXX
        try {
            this.callParent( arguments );
        }
        catch ( e ) {}
    },

    _updateTheme () {
        if ( window[Symbol.for( "app" )].theme.darkMode ) {
            this.setTheme( DARK_MODE_THEME );
        }
        else {
            this.setTheme( THEMES[window[Symbol.for( "app" )].theme.theme.base] || DEFAULT_THEME );
        }
    },
} );
