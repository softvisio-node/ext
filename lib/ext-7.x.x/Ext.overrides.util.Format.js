Ext.define( "Ext.overrides.util.Format", {
    "override": "Ext.util.Format",

    dateTime ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) value = new Date( Date.parse( value ) );

        return Ext.Date.dateFormat( value, format || Ext.Date.defaultFormat + " " + Ext.Date.defaultTimeFormat );
    },

    dateTimeRenderer ( format ) {
        return value => this.dateTime( value, format );
    },

    time ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) value = new Date( Date.parse( value ) );

        return Ext.Date.dateFormat( value, format || Ext.Date.defaultTimeFormat );
    },

    timeRenderer ( format ) {
        return value => this.time( value, format );
    },

    label ( text, color ) {
        return '<span style="padding:2px 10px;background-color:' + color + ';">' + text + "</span>";
    },
} );
