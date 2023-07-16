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
            this._themeListener = this._updateTheme.bind( this );

            Ext.getApplication().app.theme.on( "darkModeChange", this._themeListener );
            Ext.getApplication().app.theme.on( "themeChange", this._themeListener );
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
            Ext.getApplication().app.theme.off( "darkModeChange", this._themeListener );
            Ext.getApplication().app.theme.off( "themeChange", this._themeListener );
            this._themeListener = null;
        }

        // XXX
        try {
            this.callParent( arguments );
        }
        catch ( e ) {}
    },

    _updateTheme () {
        if ( Ext.getApplication().app.theme.darkMode ) {
            this.setTheme( DARK_MODE_THEME );
        }
        else {
            this.setTheme( THEMES[Ext.getApplication().app.theme.theme.base] || DEFAULT_THEME );
        }
    },
} );
