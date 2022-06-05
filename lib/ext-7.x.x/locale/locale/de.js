Ext.onReady( function () {
    if ( Ext.Date ) {
        Ext.Date.monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

        Ext.Date.defaultFormat = "d.m.Y";
        Ext.Date.defaultTimeFormat = "H:i";

        Ext.Date.getShortMonthName = function ( month ) {
            return Ext.Date.monthNames[month].substring( 0, 3 );
        };

        Ext.Date.monthNumbers = {
            "Jan": 0,
            "Feb": 1,
            "M\u00e4r": 2,
            "Apr": 3,
            "Mai": 4,
            "Jun": 5,
            "Jul": 6,
            "Aug": 7,
            "Sep": 8,
            "Okt": 9,
            "Nov": 10,
            "Dez": 11,
        };

        Ext.Date.getMonthNumber = function ( name ) {
            return Ext.Date.monthNumbers[name.substring( 0, 1 ).toUpperCase() + name.substring( 1, 3 ).toLowerCase()];
        };

        Ext.Date.dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

        Ext.Date.getShortDayName = function ( day ) {
            return Ext.Date.dayNames[day].substring( 0, 3 );
        };
    }

    if ( Ext.util && Ext.util.Format ) {
        Ext.util.Format.__number = Ext.util.Format.number;

        Ext.util.Format.number = function ( v, format ) {
            return Ext.util.Format.__number( v, format || "0.000,00/i" );
        };

        Ext.apply( Ext.util.Format, {
            "thousandSeparator": ".",
            "decimalSeparator": ",",
            "currencySign": "\u20ac",

            // German Euro
            "dateFormat": "d.m.Y",
        } );
    }
} );
