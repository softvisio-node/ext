Ext.onReady( function () {
    if ( Ext.Date ) {
        Ext.Date.shortMonthNames = ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

        Ext.Date.defaultFormat = "d/m/Y";
        Ext.Date.defaultTimeFormat = "H:i";

        Ext.Date.getShortMonthName = function ( month ) {
            return Ext.Date.shortMonthNames[month];
        };

        Ext.Date.monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        Ext.Date.monthNumbers = {
            "Janvier": 0,
            "Janv": 0,
            "Février": 1,
            "Févr": 1,
            "Mars": 2,
            "Avril": 3,
            "Avr": 3,
            "Mai": 4,
            "Juin": 5,
            "Juillet": 6,
            "Juil": 6,
            "Août": 7,
            "Septembre": 8,
            "Sept": 8,
            "Octobre": 9,
            "Oct": 9,
            "Novembre": 10,
            "Nov": 10,
            "Décembre": 11,
            "Déc": 11,
        };

        Ext.Date.getMonthNumber = function ( name ) {
            return Ext.Date.monthNumbers[Ext.util.Format.capitalize( name )];
        };

        Ext.Date.dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

        Ext.Date.getShortDayName = function ( day ) {
            return Ext.Date.dayNames[day].substring( 0, 3 );
        };

        Ext.Date.parseCodes.S.s = "(?:er)";

        Ext.Date.getSuffix = function () {
            return this.getDate() === 1 ? "er" : "";
        };
    }

    if ( Ext.util && Ext.util.Format ) {
        Ext.apply( Ext.util.Format, {
            "thousandSeparator": ".",
            "decimalSeparator": ",",
            "currencySign": "\u20ac",

            // French Euro
            "dateFormat": "d/m/Y",
        } );
    }
} );
