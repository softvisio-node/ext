import locale from "../../locale.js";

const formats = {};

function parseIntlFormat ( format ) {
    var intlFormat = formats[format];

    if ( !intlFormat ) {
        intlFormat = {};

        for ( const token of format.substring( 5 ).split( "," ) ) {
            const idx = token.indexOf( ":" );

            if ( idx < 1 ) continue;

            intlFormat[token.substring( 0, idx )] = token.substring( idx + 1 );
        }

        formats[format] = intlFormat;
    }

    return intlFormat;
}

Ext.define( "Ext.locale.util.Format", {
    "override": "Ext.util.Format",

    "defaultDateFormat": "",

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        // parse intl format
        if ( typeof format === "string" && format.startsWith( "intl:" ) ) format = parseIntlFormat( format );

        if ( !format || typeof format === "object" ) {
            return new Intl.DateTimeFormat( locale.intlLocale, format ).format( value );
        }
        else {
            return this.callParent( value, format );
        }
    },

    number ( value, format ) {

        // parse intl format
        if ( typeof format === "string" && format.startsWith( "intl:" ) ) format = parseIntlFormat( format );

        if ( !format || typeof format === "object" ) {
            return new Intl.NumberFormat( locale.intlLocale, format ).format( value );
        }
        else {
            return this.callParent( value, format );
        }
    },

    // "minimumFractionDigits": 2, "maximumFractionDigits": 2
    percent ( value, format ) {

        // parse intl format
        if ( typeof format === "string" && format.startsWith( "intl:" ) ) format = parseIntlFormat( format );

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
