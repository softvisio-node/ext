import locale from "#vue/locale";

Ext.define( "Ext.overrides.util.Format", {
    "override": "Ext.util.Format",

    "defaultDateFormat": "",
    "thousandSeparator": locale.groupSeparator,
    "decimalSeparator": locale.decimalSeparator,

    parseFormat ( format, cache ) {
        return locale.parseFormat( format, cache );
    },

    buildFormat ( format ) {
        if ( !format ) return "";

        return Object.entries( format )
            .map( ( [key, value] ) => `${key}:${value}` )
            .join( "," );
    },

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        if ( format && format.startsWith( "ext:" ) ) return Ext.Date.formatExt( value, format.substring( 4 ) );

        return locale.formatDate( value, format );
    },

    number ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.substring( 4 ) );

        return locale.formatNumber( value, format );
    },

    // minimumFractionDigits:2,maximumFractionDigits:2
    percent ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.substring( 4 ) );

        return locale.formatPercent( value, format );
    },

    currency ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.substring( 4 ) );

        return locale.formatCurrency( value, format );
    },

    relativeTime ( value, format ) {
        return locale.formatRelativeTime( value, format );
    },

    relativeTimeRenderer ( format ) {
        return value => this.relativeTime( value, format );
    },

    label ( text, color ) {
        return '<span style="padding:2px 10px;background-color:' + color + ';">' + text + "</span>";
    },
} );
