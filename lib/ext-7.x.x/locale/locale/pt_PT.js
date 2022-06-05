Ext.onReady( function () {
    if ( Ext.Date ) {
        Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        Ext.Date.defaultFormat = "Y/m/d";
        Ext.Date.defaultTimeFormat = "H:i";

        Ext.Date.getShortMonthName = function ( month ) {
            return Ext.Date.monthNames[month].substring( 0, 3 );
        };

        Ext.Date.monthNumbers = {
            "Jan": 0,
            "Feb": 1,
            "Mar": 2,
            "Apr": 3,
            "May": 4,
            "Jun": 5,
            "Jul": 6,
            "Aug": 7,
            "Sep": 8,
            "Oct": 9,
            "Nov": 10,
            "Dec": 11,
        };

        Ext.Date.getMonthNumber = function ( name ) {
            return Ext.Date.monthNumbers[name.substring( 0, 1 ).toUpperCase() + name.substring( 1, 3 ).toLowerCase()];
        };

        Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

        Ext.Date.getShortDayName = function ( day ) {
            return Ext.Date.dayNames[day].substring( 0, 3 );
        };
    }

    if ( Ext.util && Ext.util.Format ) {
        Ext.apply( Ext.util.Format, {
            "thousandSeparator": ".",
            "decimalSeparator": ",",
            "currencySign": "\u20ac",

            // Portugese Euro
            "dateFormat": "Y/m/d",
        } );
    }
} );
