import locale from "../locale.js";

Ext.define( "Ext.locale.util.Format", {
    "override": "Ext.util.Format",

    intlDate ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        return new Intl.DateTimeFormat( locale.intlLocale, format ).format( value );
    },

    intlDateRenderer ( format ) {
        return value => this.intlDate( value, format );
    },

    intlNumber ( value, format ) {
        return new Intl.NumberFormat( locale.intlLocale, format ).format( value );
    },

    intlNumberRenderer ( format ) {
        return value => this.intlNumber( value, format );
    },

    // "minimumFractionDigits": 2, "maximumFractionDigits": 2
    intlPercent ( value, format ) {
        return this.intlNumber( value, {
            ...( format || {} ),
            "style": "percent",
        } );
    },

    intlCurrency ( value, currency ) {
        return this.intlNumber( value, {
            "style": "currency",
            "currency": currency || process.env.APP_CURRENCY || "USD",
        } );
    },
} );
