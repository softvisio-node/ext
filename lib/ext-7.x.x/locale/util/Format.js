import locale from "../../locale.js";

Ext.define( "Ext.locale.util.Format", {
    "override": "Ext.util.Format",

    "defaultDateFormat": "",

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        if ( !format || typeof format === "object" ) {
            return new Intl.DateTimeFormat( locale.intlLocale, format ).format( value );
        }
        else {
            return this.callParent( value, format );
        }
    },

    number ( value, format ) {
        if ( !format || typeof format === "object" ) {
            return new Intl.NumberFormat( locale.intlLocale, format ).format( value );
        }
        else {
            return this.callParent( value, format );
        }
    },

    // "minimumFractionDigits": 2, "maximumFractionDigits": 2
    percent ( value, format ) {
        if ( !format || typeof format === "object" ) {
            return this.number( value, {
                ...( format || {} ),
                "style": "percent",
            } );
        }
        else {
            return this.callParent( value, format );
        }
    },

    currency ( value, currency, decimals, end, currencySpacer ) {
        return this.intlNumber( value, {
            "style": "currency",
            "currency": currency || locale.defaultCurrency,
        } );
    },
} );
