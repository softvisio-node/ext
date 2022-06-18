import locale from "../../locale.js";

const parsedFormats = {},
    intlDateTimeFormatters = {},
    intlNumberFormatters = {},
    intlPercentFormatters = {};

Ext.define( "Ext.locale.util.Format", {
    "override": "Ext.util.Format",

    "defaultDateFormat": "",
    "thousandSeparator": locale.groupSeparator,
    "decimalSeparator": locale.decimalSeparator,

    parseFormat ( format ) {
        if ( !format ) return {};

        // extjs format
        if ( format.startsWith( "ext:" ) ) return { "ext": format.substring( 4 ) };

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
    },

    buildFormat ( format ) {
        format ||= {};

        return Object.entries( format )
            .map( ( [key, value] ) => `${key}:${value}` )
            .join( "," );
    },

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        var formatter;

        if ( !format ) {
            formatter = intlDateTimeFormatters[""] ??= new Intl.DateTimeFormat( locale.intlLocale );
        }
        else {
            const parsedFormat = this.parseFormat( format );

            if ( parsedFormat.ext ) return Ext.Date.formatExt( value, parsedFormat.ext );

            formatter = intlDateTimeFormatters[format] ??= new Intl.DateTimeFormat( locale.intlLocale, parsedFormat );
        }

        return formatter.format( value );
    },

    number ( value, format ) {
        var formatter;

        if ( !format ) {
            formatter = intlNumberFormatters[""] ??= new Intl.NumberFormat( locale.intlLocale );
        }
        else {
            const parsedFormat = this.parseFormat( format );

            if ( parsedFormat.ext ) return this.callParent( value, parsedFormat.ext );

            formatter = intlNumberFormatters[format] ??= new Intl.NumberFormat( locale.intlLocale, parsedFormat );
        }

        return formatter.format( value );
    },

    // minimumFractionDigits:2,maximumFractionDigits:2
    percent ( value, format ) {
        var formatter;

        if ( !format ) {
            formatter = intlPercentFormatters[""] ??= new Intl.NumberFormat( locale.intlLocale, { "style": "percent" } );
        }
        else {
            const parsedFormat = this.parseFormat( format );

            if ( parsedFormat.ext ) return this.callParent( value, parsedFormat.ext );

            formatter = intlPercentFormatters[format];

            if ( !formatter ) {
                parsedFormat.style = "percent";

                formatter = intlPercentFormatters[format] = new Intl.NumberFormat( locale.intlLocale, parsedFormat );
            }
        }

        return formatter.format( value );
    },

    currency ( value, currency ) {
        return this.number( value, `style:currency,currency:${currency || locale.defaultCurrency}` );
    },
} );
