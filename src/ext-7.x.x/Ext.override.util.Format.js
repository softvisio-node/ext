import locale from "#vue/locale";

Ext.define( null, {
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
            .map( ( [ key, value ] ) => `${ key }:${ value }` )
            .join( "," );
    },

    name ( value, format ) {
        return locale.formatName( value, format );
    },

    nameRenderer ( format ) {
        return value => this.name( value, format );
    },

    date ( value, format ) {
        if ( !value ) return "";

        if ( !Ext.isDate( value ) ) {
            value = new Date( Date.parse( value ) );
        }

        if ( format && format.startsWith( "ext:" ) ) return Ext.Date.formatExt( value, format.slice( 4 ) );

        return locale.formatDate( value, format );
    },

    number ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.slice( 4 ) );

        return locale.formatNumber( value, format );
    },

    // minimumFractionDigits:2,maximumFractionDigits:2
    percent ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.slice( 4 ) );

        return locale.formatPercent( value, format );
    },

    currency ( value, format ) {
        if ( format && format.startsWith( "ext:" ) ) return this.callParent( value, format.slice( 4 ) );

        return locale.formatCurrency( value, format );
    },

    relativeDate ( value, format ) {
        return locale.formatRelativeDate( value, format );
    },

    relativeDateRenderer ( format ) {
        return value => this.relativeDate( value, format );
    },

    digitalSize ( value, format ) {
        return locale.formatDigitalSize( value, format );
    },

    digitalSizeRenderer ( format ) {
        return value => this.digitalSize( value, format );
    },

    duration ( value, format ) {
        return locale.formatDuration( value, format );
    },

    durationRenderer ( format ) {
        return value => this.duration( value, format );
    },

    list ( value, format ) {
        return locale.formatList( value, format );
    },

    listRenderer ( format ) {
        return value => this.list( value, format );
    },
} );
