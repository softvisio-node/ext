import locale from "../../locale.js";

const parsedFormats = {},
    intlDateTimeFormatters = {},
    intlNumberFormatters = {};

function parseFormat ( format ) {
    var parsedFormat = parsedFormats[format];

    if ( !parsedFormat ) {
        parsedFormat = {};

        for ( const token of format.split( "," ) ) {
            const idx = token.indexOf( ":" );

            if ( idx < 1 ) continue;

            parsedFormat[token.substring( 0, idx )] = token.substring( idx + 1 );
        }

        // cache parsed format
        parsedFormats[format] = parsedFormat;
    }

    return parsedFormat;
}

Ext.define( "Ext.locale.util.Format", {
    "override": "Ext.util.Format",

    "defaultDateFormat": "",

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        var formatter;

        if ( !format ) {
            formatter = intlDateTimeFormatters[""] ??= new Intl.DateTimeFormat( locale.intlLocale );
        }
        else if ( typeof format === "string" ) {
            const parsedFormat = parseFormat( format );

            if ( parsedFormat.ext ) return this.callParent( value, parsedFormat.ext );

            formatter = intlDateTimeFormatters[format] ??= new Intl.DateTimeFormat( locale.intlLocale, format );
        }
        else {
            formatter = new Intl.DateTimeFormat( locale.intlLocale, format );
        }

        return formatter.format( value );
    },

    number ( value, format ) {
        var formatter;

        if ( !format ) {
            formatter = intlNumberFormatters[""] ??= new Intl.NumberFormat( locale.intlLocale );
        }
        else if ( typeof format === "string" ) {
            const parsedFormat = parseFormat( format );

            if ( parsedFormat.ext ) return this.callParent( value, parsedFormat.ext );

            formatter = intlNumberFormatters[format] ??= new Intl.NumberFormat( locale.intlLocale, format );
        }
        else {
            formatter = new Intl.NumberFormat( locale.intlLocale, format );
        }

        return formatter.format( value );
    },

    // "minimumFractionDigits": 2, "maximumFractionDigits": 2
    // XXX cache
    percent ( value, format ) {

        // parse format
        if ( typeof format === "string" ) format = parseFormat( format );

        if ( !format || !format.ext ) {
            return this.number( value, {
                ...( format || {} ),
                "style": "percent",
            } );
        }
        else {
            return this.callParent( value, format.ext );
        }
    },

    currency ( value, currency ) {
        return this.number( value, `style:currency,currency:${currency || locale.defaultCurrency}` );
    },
} );
